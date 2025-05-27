import {
  ChainList,
  genericIndexer,
  getClient,
  getContractDeploymentBlock,
  getHyperRPC,
  getRPCUrl,
} from '@bgd-labs/toolbox';
import * as addresses from '@bgd-labs/aave-address-book';
import {providerConfig} from '../common';
import {GovernanceV3Ethereum, UmbrellaEthereum} from '@bgd-labs/aave-address-book';
import {Address, createPublicClient, getAbiItem, http, Log} from 'viem';
import {IPayloadsControllerCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {getBlockNumber} from 'viem/actions';
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import indexCache from './cache.json';

export function getCache(chainId: number, address: Address) {
  const cacheKey = `${chainId}:${address}`;
  const pcCachePath = path.join(process.cwd(), `src/cache/${cacheKey}.json`);
  const pcCache = existsSync(pcCachePath) ? JSON.parse(readFileSync(pcCachePath, 'utf8')) : [];
  return pcCache as {
    eventName: 'PayloadExecuted';
    args: {payloadId: number};
    blockNumber: string;
  }[];
}

export async function refreshLogs() {
  const cache = new Map<string, number>(indexCache as any);
  const logsCache = new Map<string, Log[]>();

  await Promise.all(
    Object.keys(addresses).map(async (key) => {
      const gov = addresses[key as keyof typeof addresses] as typeof GovernanceV3Ethereum;
      const addr =
        gov.PAYLOADS_CONTROLLER ||
        (gov as unknown as typeof UmbrellaEthereum).PERMISSIONED_PAYLOADS_CONTROLLER;

      if (addr && ![1088].includes(gov.CHAIN_ID)) {
        let rpc = '';
        try {
          rpc = getHyperRPC(gov.CHAIN_ID);
        } catch (e) {
          rpc = getRPCUrl(gov.CHAIN_ID, providerConfig)!;
        }
        const client = createPublicClient({
          chain: ChainList[Number(gov.CHAIN_ID) as keyof typeof ChainList],
          transport: http(rpc),
        });
        const cacheKey = `${client.chain!.id}:${addr}`;
        const pcLastIndexed = BigInt(cache.get(cacheKey) || 0);
        const currentBlock = await getBlockNumber(client);
        const indexer = genericIndexer({
          client,
          getIndexerState: async () => {
            return [
              {
                abi: getAbiItem({abi: IPayloadsControllerCore_ABI, name: 'PayloadCreated'}),
                lastIndexedBlockNumber: pcLastIndexed,
                address: addr,
              },
              {
                abi: getAbiItem({abi: IPayloadsControllerCore_ABI, name: 'PayloadQueued'}),
                lastIndexedBlockNumber: pcLastIndexed,
                address: addr,
              },
              {
                abi: getAbiItem({abi: IPayloadsControllerCore_ABI, name: 'PayloadExecuted'}),
                lastIndexedBlockNumber: pcLastIndexed,
                address: addr,
              },
            ];
          },
          updateIndexerState: async (states) => {
            states.map((state) => {
              cache.set(cacheKey, Number(state.lastIndexedBlockNumber));
            });
          },
          processLogs: async (logs) => {
            for (const log of logs) {
              const key = cacheKey;
              if (!logsCache.has(key)) {
                logsCache.set(key, []);
              }
              const cache = logsCache.get(key);
              cache!.push(log as any);
            }
          },
        });
        await indexer(currentBlock);
        console.log('finished', client.chain!.id);
        writeFileSync(
          path.join(process.cwd(), 'src/cache/cache.json'),
          JSON.stringify(Array.from(cache), (_, v) => (typeof v === 'bigint' ? v.toString() : v), 2)
        );
        const newLogs = logsCache.get(cacheKey);
        if (newLogs?.length) {
          const pcCache = getCache(client.chain!.id, addr);
          const pcCachePath = path.join(process.cwd(), `src/cache/${cacheKey}.json`);
          writeFileSync(
            pcCachePath,
            JSON.stringify(
              [...pcCache, ...newLogs],
              (_, v) => (typeof v === 'bigint' ? v.toString() : v),
              2
            )
          );
        }
      }
    })
  );
}
