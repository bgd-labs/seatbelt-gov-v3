import { describe, it, expect } from "vitest";
import { getClient, getVerificationStatus } from "@bgd-labs/toolbox";
import { MOCK_SIMULATION } from "./mocks/mockSimulation";

describe.skipIf(process.env.CI)("seatbelt", () => {
  it("should check contract verification", async () => {
    const client = getClient(Number(MOCK_SIMULATION.transaction.network_id), {
      providerConfig: { alchemyKey: process.env.ALCHEMY_API_KEY },
    });
    expect(
      await getVerificationStatus({
        client: client,
        addresses: MOCK_SIMULATION.transaction.addresses,
        apiKey: process.env.ETHERSCAN_API_KEY,
        apiUrl: process.env.EXPLORER_PROXY,
        contractDb: {},
      }),
    ).toMatchInlineSnapshot(`
      [
        {
          "address": "0xd73a92be73efbfcf3854433a5fcbabf9c1316073",
          "status": 0,
        },
        {
          "address": "0xdabad81af85554e9ae636395611c58f7ec1aaec5",
          "name": "TransparentUpgradeableProxy",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x7222182cb9c5320587b5148bf03eee107ad64578",
          "name": "PayloadsController",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x5300a1a15135ea4dc7ad5a167152c01efc9b192a",
          "name": "Executor",
          "new": true,
          "status": 1,
        },
        {
          "address": "0xc7c080511adce1e4728ab4e28a31d97243d1c581",
          "name": "AaveV2Ethereum_EthereumV2ReserveFactorAdjustment_20240304",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x311bb771e4f8952e6da169b425e7e92d6ac45756",
          "name": "InitializableImmutableAdminUpgradeabilityProxy",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x246ca67522df5895cd6cf8807ec161954ea1ba61",
          "name": "LendingPoolConfigurator",
          "new": true,
          "status": 1,
        },
        {
          "address": "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
          "name": "LendingPoolAddressesProvider",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
          "name": "InitializableImmutableAdminUpgradeabilityProxy",
          "new": true,
          "status": 1,
        },
        {
          "address": "0x085e34722e04567df9e6d2c32e82fd74f3342e79",
          "name": "LendingPool",
          "new": true,
          "status": 1,
        },
      ]
    `);
  });
});
