import { ChainId } from "@bgd-labs/toolbox";

export type V4ChainTargets = {
  chainId: number;
};

export const V4_TARGETS_BY_CHAIN: Record<number, V4ChainTargets> = {
  [ChainId.mainnet]: { chainId: ChainId.mainnet },
};

export function hasV4(chainId: number): boolean {
  return chainId in V4_TARGETS_BY_CHAIN;
}

export function getV4Targets(chainId: number): V4ChainTargets | undefined {
  return V4_TARGETS_BY_CHAIN[chainId];
}
