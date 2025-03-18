import {IPayloadsControllerCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {generateReport} from '@bgd-labs/aave-cli';
import {ChainId, getClient} from '@bgd-labs/rpc-env';
import {makePayloadExecutableOnTestClient, tenderly_createVnet} from '@bgd-labs/toolbox';
import {Address, encodeFunctionData} from 'viem';
import {GetPayloadReturnType} from '@bgd-labs/aave-v3-governance-cache';

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

export async function simulateOnTenderly({
  chainId,
  executeBefore,
  payloadId,
  payloadsController,
  cache,
}: SimulateOnTenderlyParams) {
  const vnet = await tenderly_createVnet(
    {
      baseChainId: chainId,
      forkChainId: chainId,
      displayName: `Seatbelt ${chainId} ${payloadId}`,
      slug: `seatbelt_${chainId}_${payloadId}`,
    },
    {
      projectSlug: process.env.TENDERLY_PROJECT_SLUG!,
      accountSlug: process.env.TENDERLY_ACCOUNT!,
      accessToken: process.env.TENDERLY_ACCESS_TOKEN!,
    }
  );
  // first execute all previous payloads
  for (const before of executeBefore) {
    await makePayloadExecutableOnTestClient(vnet.testClient, payloadsController, before);
    await vnet.walletClient.writeContract({
      chain: {id: chainId} as any,
      abi: IPayloadsControllerCore_ABI,
      account: '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073',
      address: payloadsController,
      functionName: 'executePayload',
      args: [before],
    });
  }
  // prepare the actual payload execution via state overrides
  await makePayloadExecutableOnTestClient(vnet.testClient, payloadsController, payloadId);
  const tenderlyPayload = await (
    await vnet.simulate({
      network_id: chainId.toString(),
      from: '0xD73a92Be73EfbFcF3854433A5FcbAbF9c1316073',
      to: payloadsController,
      input: encodeFunctionData({
        abi: IPayloadsControllerCore_ABI,
        functionName: 'executePayload',
        args: [payloadId],
      }),
      block_number: null,
      transaction_index: 0,
      gas: 8_000_000,
      gas_price: '0',
      value: '0',
      access_list: [],
      generate_access_list: true,
      save: true,
      source: 'dashboard',
    })
  ).json();
  const report = await generateReport({
    payloadId: payloadId,
    payloadInfo: cache,
    simulation: tenderlyPayload,
    client: getClient(chainId, {}),
  });
  await vnet.delete();
  return report;
}
