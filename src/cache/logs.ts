import {genericIndexer, getClient} from '@bgd-labs/toolbox';
import * as addresses from '@bgd-labs/aave-address-book';
import {providerConfig} from '../common';
import {GovernanceV3Ethereum} from '@bgd-labs/aave-address-book';
import {getAbiItem} from 'viem';
import {IPayloadsControllerCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {getBlockNumber} from 'viem/actions';

const cache = new Map();
await Promise.all(
  Object.keys(addresses).map(async (key) => {
    const gov = addresses[key as keyof typeof addresses] as typeof GovernanceV3Ethereum;
    if (!gov.PAYLOADS_CONTROLLER) return;
    const client = getClient(Number(gov.CHAIN_ID), {
      providerConfig,
    });
    const indexer = genericIndexer({
      client,
      getIndexerState: () => {
        console.log('what');
        return [
          {
            abi: getAbiItem({abi: IPayloadsControllerCore_ABI, name: 'PayloadExecuted'}),
            lastIndexedBlockNumber: 0n,
            address: gov.PAYLOADS_CONTROLLER,
          },
        ];
      },
      updateIndexerState: async (state) => {
        console.log(state);
      },
      processLogs: async (logs) => {
        console.log(logs);
      },
    });
    await indexer(await getBlockNumber(client));
  })
);
