import { describe, expect, it } from "vitest";
import {
  TxBuilderTransaction,
  buildPrevalidatedSignature,
  buildSafeTransaction,
  encodeTxBuilderTransaction,
  getTxBuilderTransactionSignature,
} from "./tx-builder";

const ADD_SPOKE_TX: TxBuilderTransaction = {
  to: "0x1F0753480bB03EaA00863224602267B7E0525C3d",
  value: "0",
  data: null,
  contractMethod: {
    inputs: [
      { internalType: "address", name: "hub", type: "address" },
      { internalType: "address", name: "spoke", type: "address" },
      { internalType: "uint256", name: "assetId", type: "uint256" },
      {
        components: [
          { internalType: "uint40", name: "addCap", type: "uint40" },
          { internalType: "uint40", name: "drawCap", type: "uint40" },
          {
            internalType: "uint24",
            name: "riskPremiumThreshold",
            type: "uint24",
          },
          { internalType: "bool", name: "active", type: "bool" },
          { internalType: "bool", name: "halted", type: "bool" },
        ],
        internalType: "struct IHub.SpokeConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "addSpoke",
    payable: false,
  },
  contractInputsValues: {
    hub: "0x62d63197660c080236193CA60b70E49A08E90368",
    spoke: "0xFaB44fbD00C5056956BC1c4d681A80563E10d2fD",
    assetId: "1",
    config: "[13000000,0,0,true,false]",
  },
};

describe("tx-builder", () => {
  it("should encode a transaction with tuple params", () => {
    // cast calldata "addSpoke(address,address,uint256,(uint40,uint40,uint24,bool,bool))" 0x62d63197660c080236193CA60b70E49A08E90368 0xFaB44fbD00C5056956BC1c4d681A80563E10d2fD 1 "(13000000,0,0,true,false)"
    expect(encodeTxBuilderTransaction(ADD_SPOKE_TX)).toBe(
      "0x7cf1dbc500000000000000000000000062d63197660c080236193ca60b70e49a08e90368000000000000000000000000fab44fbd00c5056956bc1c4d681a80563e10d2fd00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000c65d400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
    );
  });

  it("should render the transaction signature", () => {
    expect(getTxBuilderTransactionSignature(ADD_SPOKE_TX)).toBe(
      "addSpoke(address,address,uint256,(uint40,uint40,uint24,bool,bool))",
    );
  });

  it("should use a plain call for a single transaction", () => {
    const safeTx = buildSafeTransaction([ADD_SPOKE_TX]);
    expect(safeTx.to).toBe(ADD_SPOKE_TX.to);
    expect(safeTx.operation).toBe(0);
    expect(safeTx.data).toBe(encodeTxBuilderTransaction(ADD_SPOKE_TX));
  });

  it("should batch multiple transactions via multiSend delegatecall", () => {
    const multiSend = "0x9641d764fc13c8B624c04430C7356C1C7C8102e2";
    const safeTx = buildSafeTransaction(
      [ADD_SPOKE_TX, ADD_SPOKE_TX],
      multiSend,
    );
    expect(safeTx.to).toBe(multiSend);
    expect(safeTx.operation).toBe(1);
    // multiSend(bytes) selector
    expect(safeTx.data.startsWith("0x8d80ff0a")).toBe(true);
    const innerData = encodeTxBuilderTransaction(ADD_SPOKE_TX);
    // packed encoding: operation (00) + to + value + dataLength + data
    const packedTx =
      `00${ADD_SPOKE_TX.to.slice(2)}${"0".repeat(64)}${((innerData.length - 2) / 2).toString(16).padStart(64, "0")}${innerData.slice(2)}`.toLowerCase();
    expect(safeTx.data).toContain(packedTx);
    expect(
      safeTx.data.indexOf(packedTx, safeTx.data.indexOf(packedTx) + 1),
    ).toBeGreaterThan(-1);
  });

  it("should build a pre-validated signature", () => {
    expect(
      buildPrevalidatedSignature("0x9440850335c7C2a644dc2abEBBA93463c9736F2C"),
    ).toBe(
      "0x0000000000000000000000009440850335c7c2a644dc2abebba93463c9736f2c000000000000000000000000000000000000000000000000000000000000000001",
    );
  });
});
