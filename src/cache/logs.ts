import {
  ChainList,
  genericIndexer,
  getContractDeploymentBlock,
  getHyperRPC,
  getRPCUrl,
} from "@bgd-labs/toolbox";
import * as addresses from "@bgd-labs/aave-address-book";
import { providerConfig } from "../common";
import {
  GovernanceV3Ethereum,
  UmbrellaEthereum,
} from "@bgd-labs/aave-address-book";
import { Address, createPublicClient, getAbiItem, http, Log } from "viem";
import { IPayloadsControllerCore_ABI } from "@bgd-labs/aave-address-book/abis";
import { getBlockNumber } from "viem/actions";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import indexCache from "./cache.json";

export function getCacheFile(chainId: number, address: Address) {
  const cacheKey = `${chainId}:${address}`;
  const pcCachePath = path.join(process.cwd(), `src/cache/${cacheKey}.json`);
  const pcCache: {
    eventName: "PayloadExecuted" | "PayloadQueued" | "PayloadCreated";
    args: { payloadId: number };
    blockNumber: string;
  }[] = existsSync(pcCachePath)
    ? JSON.parse(readFileSync(pcCachePath, "utf8"))
    : [];
  return pcCache;
}
export async function getCache(
  chainId: number,
  address: Address,
  payloadId: number,
) {
  let cache = getCacheFile(chainId, address);
  if (process.env.INDEXER_API) {
    try {
      const res = (await (
        await fetch(
          `${process.env.INDEXER_API}/gov/payloads/${address}/${payloadId}`,
        )
      ).json()) as { events: any[] };
      if (res.status !== 200) throw new Error(`API error: ${res.message}`);
      cache = res.events;
    } catch (e) {
      console.log("api error", e);
    }
  }

  return {
    createdLog: cache.find(
      (log) =>
        log.args.payloadId === payloadId && log.eventName === "PayloadCreated",
    )!,
    queuedLog: cache.find(
      (log) =>
        log.args.payloadId === payloadId && log.eventName === "PayloadQueued",
    ),
    executedLog: cache.find(
      (log) =>
        log.args.payloadId === payloadId && log.eventName === "PayloadExecuted",
    ),
  };
}

export async function refreshLogs() {
  const cache = new Map<string, number>(indexCache as any);
  const logsCache = new Map<string, Log[]>();

  await Promise.all(
    Object.keys(addresses).map(async (key) => {
      const gov = addresses[
        key as keyof typeof addresses
      ] as typeof GovernanceV3Ethereum;
      const addr =
        gov.PAYLOADS_CONTROLLER ||
        (gov as unknown as typeof UmbrellaEthereum)
          .PERMISSIONED_PAYLOADS_CONTROLLER;

      if (addr) {
        let rpc = getRPCUrl(gov.CHAIN_ID, providerConfig);
        let client = createPublicClient({
          chain: ChainList[Number(gov.CHAIN_ID) as keyof typeof ChainList],
          transport: http(rpc),
        });
        console.log("started", client.chain!.id);
        const cacheKey = `${gov.CHAIN_ID}:${addr}`;
        let pcLastIndexed = BigInt(cache.get(cacheKey) || 0);
        const currentBlock = await getBlockNumber(client);
        if (pcLastIndexed === 0n) {
          try {
            rpc = getHyperRPC(gov.CHAIN_ID);
            if (process.env.HYPER_RPC_API_TOKEN)
              rpc += `/${process.env.HYPER_RPC_API_TOKEN}`;
            client = createPublicClient({
              chain: ChainList[Number(gov.CHAIN_ID) as keyof typeof ChainList],
              transport: http(rpc),
            });
          } catch (e) {
            pcLastIndexed = await getContractDeploymentBlock({
              client,
              contractAddress: addr,
              fromBlock: 0n,
              toBlock: currentBlock,
              maxDelta: 10000n,
            });
          }
        }
        const indexer = genericIndexer({
          client,
          getIndexerState: async () => {
            return [
              {
                abi: getAbiItem({
                  abi: IPayloadsControllerCore_ABI,
                  name: "PayloadCreated",
                }),
                lastIndexedBlockNumber: pcLastIndexed,
                address: addr,
              },
              {
                abi: getAbiItem({
                  abi: IPayloadsControllerCore_ABI,
                  name: "PayloadQueued",
                }),
                lastIndexedBlockNumber: pcLastIndexed,
                address: addr,
              },
              {
                abi: getAbiItem({
                  abi: IPayloadsControllerCore_ABI,
                  name: "PayloadExecuted",
                }),
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
        console.log("finished", client.chain!.id);
        writeFileSync(
          path.join(process.cwd(), "src/cache/cache.json"),
          JSON.stringify(
            Array.from(cache),
            (_, v) => (typeof v === "bigint" ? v.toString() : v),
            2,
          ),
        );
        const newLogs = logsCache.get(cacheKey);
        if (newLogs?.length) {
          const pcCache = getCacheFile(client.chain!.id, addr);
          const pcCachePath = path.join(
            process.cwd(),
            `src/cache/${cacheKey}.json`,
          );
          writeFileSync(
            pcCachePath,
            JSON.stringify(
              [...pcCache, ...newLogs],
              (_, v) => (typeof v === "bigint" ? v.toString() : v),
              2,
            ),
          );
        }
      }
    }),
  );
}
