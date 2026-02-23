import {
  AbiStateMutability,
  Address,
  Client,
  ContractFunctionReturnType,
  GetContractReturnType,
  Hex,
  TestClient,
  encodePacked,
  getContract,
} from "viem";
import {
  IPayloadsController_ABI,
  getSolidityStorageSlotUint,
} from "@bgd-labs/toolbox";
import { getBlock } from "viem/actions";

export type Payload = ContractFunctionReturnType<
  typeof IPayloadsController_ABI,
  AbiStateMutability,
  "getPayloadById"
>;

export enum PayloadState {
  None = 0,
  Created = 1,
  Queued = 2,
  Executed = 3,
  Cancelled = 4,
  Expired = 5,
}

export const HUMAN_READABLE_PAYLOAD_STATE = {
  [PayloadState.None]: "None",
  [PayloadState.Created]: "Created",
  [PayloadState.Queued]: "Queued",
  [PayloadState.Executed]: "Executed",
  [PayloadState.Cancelled]: "Cancelled",
  [PayloadState.Expired]: "Expired",
};

export type PayloadsControllerContract = GetContractReturnType<
  typeof IPayloadsController_ABI,
  Client
>;

export function getPayloadsController<T extends Client>(
  client: T,
  address: Hex,
): PayloadsControllerContract {
  return getContract({
    abi: IPayloadsController_ABI,
    client,
    address,
  });
}

export async function getPayloadStorageOverrides(
  client: Client,
  payloadsController: Address,
  payloadId: number,
) {
  const controllerContract = getPayloadsController(client, payloadsController);
  const payload = await controllerContract.read.getPayloadById([payloadId]);
  const currentBlock = await getBlock(client);
  return [
    {
      slot: getSolidityStorageSlotUint(3n, BigInt(payloadId)),
      value: encodePacked(
        ["uint40", "uint40", "uint8", "uint8", "address"],
        [
          // we subtract 240n(4min), as tenderly might have been fallen behind
          // therefore using block_number -1 (latest on tenderly) and a 4min margin should give a save margin
          Number(currentBlock.timestamp - BigInt(payload.delay) - 1n - 240n), // altering queued time so can be executed in current block
          payload.createdAt,
          PayloadState.Queued,
          payload.maximumAccessLevelRequired,
          payload.creator,
        ],
      ),
    },
  ];
}

export async function makePayloadExecutableOnTestClient(
  client: TestClient,
  payloadsController: Address,
  payloadId: number,
) {
  const overrides = await getPayloadStorageOverrides(
    client,
    payloadsController,
    payloadId,
  );
  for (const { slot, value } of overrides) {
    await client.setStorageAt({
      address: payloadsController,
      // 3 is the slot of the payloads mapping
      index: slot,
      value: value,
    });
  }
}

export function isPayloadFinal(state: PayloadState) {
  return ![PayloadState.Queued, PayloadState.Created].includes(state);
}

export async function getNonFinalizedPayloads<T extends Client>(
  client: T,
  payloadsController: Address,
): Promise<number[]> {
  const controllerContract = getPayloadsController(client, payloadsController);
  const payloadsCount = await controllerContract.read.getPayloadsCount();
  // if there is only one payload or less we know there cannot be any dependencies
  if (payloadsCount <= 1) return [];
  const nonFinalPayloads: number[] = [];
  for (let payloadId = payloadsCount - 1; payloadId != 0; payloadId--) {
    // controllerContract.read.EXPIRATION_DELAY(), controllerContract.read.MAX_EXECUTION_DELAY(), controllerContract.read.GRACE_PERIOD()
    const maxRange = (35 + 10 + 7) * 24 * 60 * 60;
    const payload = await controllerContract.read.getPayloadById([payloadId]);
    if (!isPayloadFinal(payload.state)) nonFinalPayloads.push(payloadId);
    // If the payload was created longer then maxRange in the past, we now everything that was created before will be expired as well
    if (payload.createdAt < Date.now() / 1000 - maxRange) break;
  }
  return nonFinalPayloads;
}
