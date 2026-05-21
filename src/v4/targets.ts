import { ChainId } from "@bgd-labs/toolbox";
import { AaveV4Ethereum } from "@aave-dao/aave-address-book";
import { Address, getAddress } from "viem";

export type V4ChainTargets = {
  chainId: number;
  addresses: Set<Address>;
};

function buildEthereumAddresses(): Set<Address> {
  const addresses: Address[] = [
    ...AaveV4Ethereum.ALL_HUBS,
    ...AaveV4Ethereum.ALL_SPOKES_RAW,
    AaveV4Ethereum.HUB_CONFIGURATOR,
    AaveV4Ethereum.SPOKE_CONFIGURATOR,
  ].map((a) => getAddress(a));
  return new Set(addresses);
}

export const V4_TARGETS_BY_CHAIN: Record<number, V4ChainTargets> = {
  [ChainId.mainnet]: {
    chainId: ChainId.mainnet,
    addresses: buildEthereumAddresses(),
  },
};

export function hasV4(chainId: number): boolean {
  return chainId in V4_TARGETS_BY_CHAIN;
}

export function getV4Targets(chainId: number): V4ChainTargets | undefined {
  return V4_TARGETS_BY_CHAIN[chainId];
}

export function getV4Addresses(chainId: number): Set<Address> {
  return V4_TARGETS_BY_CHAIN[chainId]?.addresses ?? new Set();
}
