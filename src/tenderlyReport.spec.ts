import { describe, expect, it } from "vitest";
import { renderTenderlyReport } from "./tenderlyReport";
import example from "./mocks/example.json";
import { ChainId, getClient } from "@bgd-labs/toolbox";

describe("report", () => {
  it("should generate a report", async () => {
    expect(
      (
        await renderTenderlyReport({
          ...example,
          client: getClient(ChainId.celo, {
            providerConfig: { alchemyKey: process.env.ALCHEMY_API_KEY },
          }),
        } as any)
      ).report
    ).toMatchInlineSnapshot(`
      "## Payload 3 on Celo

      - creator: 0x3Cbded22F878aFC8d39dCD744d3Fe62086B76193
      - maximumAccessLevelRequired: 1
      - state: 3(Executed)
      - actions:
        - [0xB510C1d34ED499e17A110341379384C60a094EeE](https://celoscan.io/tx/0xB510C1d34ED499e17A110341379384C60a094EeE), accessLevel: 1, withDelegateCall: true, value: 0, signature: execute(), callData: 0x
      - createdAt: [01/04/2025, 10:40:55](https://celoscan.io/tx/0x829837a2f14cef92adb3cab34111bc92e51ff5651c1640a920aaa5c48077a08b)
      - queuedAt: [09/04/2025, 08:42:57](https://celoscan.io/tx/0xf0dca261dbbdab1083a43a723d18fda52a8241b1b3d880fa0f5d930714c6234f)
      - executedAt: [10/04/2025, 17:29:40, block: 32405422](https://celoscan.io/tx/0x914cf8498f903ae0b3e695857ea4b62852108812d63691aba19ca44921f03380)

      <name> at 0xE48E10834C04E394A04BF22a565D063D40b9FA42[{"before":"\\"0x006863a5910067ebc2b702013cbded22f878afc8d39dcd744d3fe62086b76193\\"","after":"\\"0x006863a5910067ebc2b703013cbded22f878afc8d39dcd744d3fe62086b76193\\"","name":"Slot \`0xcbc4e5fb02c3d1de23a9f1e014b4d2ee5aeaea9505df5e855c9210bf472495af\`"},{"before":"\\"0x000000000000000000093a800000015180006819e73700000000000067f80004\\"","after":"\\"0x000000000000000000093a800000015180006819e7370000000000006864f800\\"","name":"Slot \`0xcbc4e5fb02c3d1de23a9f1e014b4d2ee5aeaea9505df5e855c9210bf472495b0\`"}]### Verification status for contracts touched in the proposal

      | Contract | Status |
      |---------|------------|
      | 0xd73a92be73efbfcf3854433a5fcbabf9c1316073(undefined) | EOA |
      | 0xe48e10834c04e394a04bf22a565d063d40b9fa42(TransparentUpgradeableProxy) | Contract |
      | 0xda4b6024aa06f7565bbcaad9b8be24c3c229aab5(PayloadsController) | Contract |
      | 0x1df462e2712496373a347f8ad10802a5e95f053d(Executor) | Contract |
      | 0xb510c1d34ed499e17a110341379384c60a094eee(AaveV3Celo_RiskStewardParameterUpdatesPhase3_20250320) | Contract |
      | 0x69a6caf240698982c3ac89e0a7c12e76bceee4ef(RiskSteward) | Contract |

      ### Selfdestruct analysis

      | Address | Result |
      |---------|------------|
      | 0xd73a92be73efbfcf3854433a5fcbabf9c1316073 | Empty |
      | 0xe48e10834c04e394a04bf22a565d063d40b9fa42 | DelegateCall |
      | 0xda4b6024aa06f7565bbcaad9b8be24c3c229aab5 | Safe |
      | 0x1df462e2712496373a347f8ad10802a5e95f053d | DelegateCall |
      | 0xb510c1d34ed499e17a110341379384c60a094eee | Safe |
      | 0x69a6caf240698982c3ac89e0a7c12e76bceee4ef | DelegateCall |

      ### Events emitted from the proposal

      | Address | Event Name | Arguments |
      |---------|------------|-----------|
      | 0x69a6caf240698982c3ac89e0a7c12e76bceee4ef | RiskConfigSet | {"riskConfig":"0x754380ea9169975cd00bb65c2f3dbfcc649eb55e993b630580f0ff7563c15691"} |
      | 0x1df462e2712496373a347f8ad10802a5e95f053d | ExecutedAction | {"target":"0xB510C1d34ED499e17A110341379384C60a094EeE","value":"0","signature":"execute()","data":"0x","executionTime":"1751447552","withDelegatecall":true,"resultData":"0x"} |
      | 0xe48e10834c04e394a04bf22a565d063d40b9fa42 | PayloadExecuted | {"payloadId":3} |
      "
    `);
  });
});
