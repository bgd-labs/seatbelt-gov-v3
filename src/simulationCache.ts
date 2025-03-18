import {existsSync, writeFileSync, readFileSync, mkdirSync} from 'node:fs';
import path from 'node:path';
import {Address} from 'viem';

export const MOCK_FINAL_PROPOSAL_STATE = 1000;

export type SimulationStataCache = {state: number};

function getBasePath(chainId: number | bigint, address: Address) {
  return path.join(process.cwd(), 'cache', chainId.toString(), address);
}

function getPath(chainId: number | bigint, address: Address, id: number | bigint) {
  return path.join(getBasePath(chainId, address), `${id}.json`);
}

export function getSimulationStateCache(
  chainId: number | bigint,
  address: Address,
  id: number | bigint
): SimulationStataCache {
  let cache = {state: -1};
  if (existsSync(getPath(chainId, address, id)))
    cache = JSON.parse(readFileSync(getPath(chainId, address, id), 'utf8'));
  return cache;
}

export function storeSimulationState(
  chainId: number | bigint,
  address: Address,
  id: number | bigint,
  state: number
) {
  if (!existsSync(getBasePath(chainId, address)))
    mkdirSync(getBasePath(chainId, address), {recursive: true});
  writeFileSync(getPath(chainId, address, id), JSON.stringify({state}));
}
