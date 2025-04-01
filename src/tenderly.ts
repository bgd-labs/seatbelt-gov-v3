import {IPayloadsControllerCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {generateReport} from '@bgd-labs/aave-cli';
import {
  ChainId,
  getClient,
  getPayloadStorageOverrides,
  makePayloadExecutableOnTestClient,
  tenderly_createVnet,
  tenderly_sim,
} from '@bgd-labs/toolbox';
import {Address, Client, encodeFunctionData, Hex, PublicClient} from 'viem';
import {GetPayloadReturnType} from '@bgd-labs/aave-v3-governance-cache';
import {providerConfig} from './common';

export const CHAIN_NOT_SUPPORTED_ON_TENDERLY: number[] = [
  ChainId.zkEVM,
  ChainId.zksync,
  ChainId.celo,
];

type SimulateOnTenderlyParams = {
  chainId: number;
  executeBefore: number[];
  payloadId: number;
  payloadsController: Address;
  cache: GetPayloadReturnType;
};

const EOA = '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073';

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
  const vnet = await tenderly_createVnet(
    {
      baseChainId: chainId,
      forkChainId: chainId,
      displayName: `Seatbelt ${chainId} ${payloadId}`,
      slug: `seatbelt_${chainId}_${payloadId}`,
      force: true,
    },
    tenderlyConfig
  );
  try {
    // first execute all previous payloads
    for (const before of executeBefore) {
      await makePayloadExecutableOnTestClient(vnet.testClient, payloadsController, before);
      await vnet.walletClient.writeContract({
        chain: {id: chainId} as any,
        abi: IPayloadsControllerCore_ABI,
        account: EOA,
        address: payloadsController,
        functionName: 'executePayload',
        args: [before],
      });
    }
    // prepare the actual payload execution via state overrides
    await makePayloadExecutableOnTestClient(vnet.testClient, payloadsController, payloadId);
    const simResult = await vnet.simulate({
      network_id: chainId.toString(),
      from: EOA,
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: 'executePayload',
        args: [payloadId],
      }),
      block_number: null,
      transaction_index: 0,
      gas: 30_000_000,
      gas_price: '0',
      value: '0',
      access_list: [],
      generate_access_list: true,
      save: true,
      source: 'dashboard',
    });
    const report = await generateReport({
      payloadId: payloadId,
      payloadInfo: cache,
      simulation: simResult,
      client: getClient(chainId, {
        providerConfig,
      }) as any, // currently there is a type mismatch due to multiple viem versions being in use. Should be resolved one tooling is unified.
    });
    return report;
  } catch (e) {
    console.log(e);
    console.log('error simulating against a vnet, trying against the simulation endpoint');
    const overrides = await getPayloadStorageOverrides(
      getClient(chainId, {providerConfig}) as any,
      payloadsController,
      payloadId
    );
    const simResult = await tenderly_sim(tenderlyConfig, {
      network_id: chainId.toString(),
      from: EOA,
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: 'executePayload',
        args: [payloadId],
      }),
      block_number: -2,
      state_objects: {
        [payloadsController]: {
          storage: overrides.reduce((acc, val) => {
            acc[val.slot] = val.value;
            return acc;
          }, {} as Record<Hex, Hex>),
        },
      },
    });
    const report = await generateReport({
      payloadId: payloadId,
      payloadInfo: cache,
      simulation: simResult,
      client: getClient(chainId, {
        providerConfig,
      }) as any, // currently there is a type mismatch due to multiple viem versions being in use. Should be resolved one tooling is unified.
    });
    return report;
  }
  await vnet.delete();
}
