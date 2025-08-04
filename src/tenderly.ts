import { IPayloadsControllerCore_ABI } from "@bgd-labs/aave-address-book/abis";
import { getAddressBookReferences } from "@bgd-labs/aave-address-book/utils";
import {
  ChainId,
  Payload,
  getClient,
  getMdContractName,
  getPayloadStorageOverrides,
  makePayloadExecutableOnTestClient,
  renderTenderlyReport,
  tenderly_createVnet,
  tenderly_logsToAbiLogs,
  tenderly_sim,
} from "@bgd-labs/toolbox";
import { Address, encodeFunctionData, Hash, Hex } from "viem";
import { writeFileSync } from "fs";
import { providerConfig } from "./common";
import eventCache from "./cache/eventDb.json";

export const CHAIN_NOT_SUPPORTED_ON_TENDERLY: number[] = [ChainId.zkEVM];
export const NO_V_NET: number[] = [ChainId.zksync];

type SimulateOnTenderlyParams = {
  chainId: number;
  executeBefore: number[];
  payloadId: number;
  payloadsController: Address;
  cache: {
    logs: {
      createdLog: { transactionHash: Hash; blockNumber: number };
      queuedLog?: { transactionHash: Hash; blockNumber: number };
      executedLog?: { transactionHash: Hash; blockNumber: number };
    };
    payload: Payload;
  };
};

const EOA = "0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073";

export async function simulateOnTenderly({
  chainId,
  executeBefore,
  payloadId,
  payloadsController,
  cache,
}: SimulateOnTenderlyParams) {
  const tenderlyConfig = {
    projectSlug: process.env.TENDERLY_PROJECT_SLUG!,
    accountSlug: process.env.TENDERLY_ACCOUNT!,
    accessToken: process.env.TENDERLY_ACCESS_TOKEN!,
  };
  try {
    const vnet = await tenderly_createVnet(
      {
        baseChainId: chainId,
        forkChainId: chainId,
        displayName: `Seatbelt ${chainId} ${payloadId}`,
        slug: `seatbelt_${chainId}_${payloadId}`,
        force: true,
      },
      tenderlyConfig,
    );
    // first execute all previous payloads
    for (const before of executeBefore) {
      await makePayloadExecutableOnTestClient(
        vnet.testClient,
        payloadsController,
        before,
      );
      await vnet.walletClient.writeContract({
        chain: { id: chainId } as any,
        abi: IPayloadsControllerCore_ABI,
        account: EOA,
        address: payloadsController,
        functionName: "executePayload",
        args: [before],
      });
    }
    // prepare the actual payload execution via state overrides
    await makePayloadExecutableOnTestClient(
      vnet.testClient,
      payloadsController,
      payloadId,
    );
    console.log({
      network_id: chainId.toString(),
      from: EOA,
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: "executePayload",
        args: [payloadId],
      }),
      block_number: null,
      transaction_index: 0,
      gas: 30_000_000,
      gas_price: "0",
      value: "0",
      access_list: [],
      generate_access_list: true,
      save: true,
      source: "dashboard",
    });
    const simResult = await vnet.simulate({
      network_id: chainId.toString(),
      from: EOA,
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: "executePayload",
        args: [payloadId],
      }),
      block_number: null,
      transaction_index: 0,
      gas: 30_000_000,
      gas_price: "0",
      value: "0",
      access_list: [],
      generate_access_list: true,
      save: true,
      source: "dashboard",
    });
    const events = tenderly_logsToAbiLogs(
      simResult.transaction.transaction_info?.logs,
    );
    events.map((e) => {
      if (!eventCache.find((eC) => JSON.stringify(eC) === JSON.stringify(e))) {
        eventCache.push(e as any);
      }
    });
    if (process.env.UPDATE_EVENT_DB === "true") {
      writeFileSync("cache/eventDb.json", JSON.stringify(events, null, 2));
    }
    // await vnet.delete();
    const report = await renderTenderlyReport({
      payloadId: payloadId,
      payload: cache.payload,
      onchainLogs: cache.logs as any,
      sim: simResult,
      client: getClient(chainId, {
        providerConfig,
      }),
      config: {
        etherscanApiKey: process.env.ETHERSCAN_API_KEY!,
      },
      eventCache: eventCache as any,
      getContractName: (sim, address) => {
        const references = getAddressBookReferences(
          address,
          Number(sim.simulation.network_id),
        );
        if (references.length > 0)
          return flagAsKnown(
            getMdContractName(sim.contracts, address),
            references[0],
          );
        return getMdContractName(sim.contracts, address);
      },
    });
    return report;
  } catch (e) {
    console.log(e);
    console.log(
      "error simulating against a vnet, trying against the simulation endpoint",
    );
    const overrides = await getPayloadStorageOverrides(
      getClient(chainId, { providerConfig }) as any,
      payloadsController,
      payloadId,
    );
    const simPayload = {
      network_id: chainId.toString(),
      from: EOA,
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: "executePayload",
        args: [payloadId],
      }),
      block_number: -2,
      state_objects: {
        [payloadsController]: {
          storage: overrides.reduce(
            (acc, val) => {
              acc[val.slot] = val.value;
              return acc;
            },
            {} as Record<Hex, Hex>,
          ),
        },
      },
    } as const;
    console.info(JSON.stringify(simPayload));
    const simResult = await tenderly_sim(tenderlyConfig, simPayload);
    const report = await renderTenderlyReport({
      payload: cache.payload,
      payloadId: payloadId,
      onchainLogs: cache.logs as any,
      sim: simResult,
      client: getClient(chainId, {
        providerConfig,
      }),
      config: {
        etherscanApiKey: process.env.ETHERSCAN_API_KEY!,
      },
      getContractName: (sim, address) => {
        const references = getAddressBookReferences(
          address,
          Number(sim.simulation.network_id),
        );
        if (references.length)
          return flagAsKnown(
            getMdContractName(sim.contracts, address),
            references[0],
          );
        return getMdContractName(sim.contracts, address);
      },
    });
    return report;
  }
}

function flagAsKnown(value: string, reference: string) {
  return `${value} [:ghost:](https://github.com/bgd-labs/aave-address-book  "${reference}")`;
}
