import { createPublicClient, http } from "viem";
import { sepolia, polygonMumbai, bscTestnet, avalancheFuji } from "viem/chains";

export const CHAIN_ID_CLIENT_MAP = {
  [sepolia.id]: {
    client: createPublicClient({
      chain: sepolia,
      transport: http(process.env.RPC_SEPOLIA),
    }),
    blockCreated: 3967960n,
  },
  [polygonMumbai.id]: {
    client: createPublicClient({
      chain: polygonMumbai,
      transport: http(process.env.RPC_POLYGON_MUMBAI),
    }),
    blockCreated: 38318051n,
  },
  [bscTestnet.id]: {
    client: createPublicClient({
      chain: bscTestnet,
      transport: http(process.env.RPC_BSC_TESTNET),
    }),
    blockCreated: 31893040n,
  },
  [avalancheFuji.id]: {
    client: createPublicClient({
      chain: avalancheFuji,
      transport: http(process.env.RPC_AVALANCHE_FUJI),
    }),
    blockCreated: 24512916n,
  },
} as const;
