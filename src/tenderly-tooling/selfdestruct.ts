import { Address, Client } from "viem";
import { getBytecode, getTransactionCount } from "viem/actions";

const STOP = 0x00;
const JUMPDEST = 0x5b;
const PUSH1 = 0x60;
const PUSH32 = 0x7f;
const RETURN = 0xf3;
const REVERT = 0xfd;
const INVALID = 0xfe;
const SELFDESTRUCT = 0xff;
const DELEGATECALL = 0xf4;

const isHalting = (opcode: number): boolean =>
  [STOP, RETURN, REVERT, INVALID, SELFDESTRUCT].includes(opcode);
const isPUSH = (opcode: number): boolean => opcode >= PUSH1 && opcode <= PUSH32;

export enum SelfdestructCheckState {
  TRUSTED,
  EOA,
  EMPTY,
  DELEGATECALL,
  SAFE,
  SELF_DESTRUCT,
}

export function selfDestructStatusToString(
  state: SelfdestructCheckState,
): string {
  switch (state) {
    case SelfdestructCheckState.TRUSTED:
      return "Trusted";
    case SelfdestructCheckState.EOA:
      return "EOA";
    case SelfdestructCheckState.EMPTY:
      return "Empty";
    case SelfdestructCheckState.DELEGATECALL:
      return "DelegateCall";
    case SelfdestructCheckState.SAFE:
      return "Safe";
    case SelfdestructCheckState.SELF_DESTRUCT:
      return "SelfDestruct";
    default:
      return "Unknown";
  }
}

export async function checkForSelfdestruct(
  client: Client,
  addresses: Address[],
  trustedAddresses: Address[],
) {
  const result: { address: Address; state: SelfdestructCheckState }[] = [];
  for (const address of addresses) {
    if (trustedAddresses.includes(address)) {
      result.push({ address, state: SelfdestructCheckState.TRUSTED });
      continue;
    }
    const code = await getBytecode(client, { address });
    if (!code) {
      // If there is no code and nonce is > 0 then it's an EOA.
      // If nonce is 0 it is an empty account that might have code later.
      // A contract might have nonce > 0, but then it will have code.
      // If it had code, but was selfdestructed, the nonce should be reset to 0.
      const nonce = await getTransactionCount(client, { address });
      if (nonce > 0)
        result.push({ address, state: SelfdestructCheckState.EOA });
      else result.push({ address, state: SelfdestructCheckState.EMPTY });
      continue;
    }

    // Detection logic from https://github.com/MrLuit/selfdestruct-detect
    const bytecode = Buffer.from(code.substring(2), "hex");
    const { delegatecall, selfDestruct } = checkCode(bytecode);
    if (selfDestruct) {
      result.push({ address, state: SelfdestructCheckState.SELF_DESTRUCT });
    } else if (delegatecall) {
      result.push({ address, state: SelfdestructCheckState.DELEGATECALL });
    } else {
      result.push({ address, state: SelfdestructCheckState.SAFE });
    }
  }
  return result;
}

function checkCode(bytecode: Buffer) {
  let halted = false;
  let delegatecall = false;
  for (let index = 0; index < bytecode.length; index++) {
    const opcode = bytecode[index];
    if (opcode === SELFDESTRUCT && !halted) {
      return { halted, delegatecall, selfDestruct: true };
    }
    if (opcode === DELEGATECALL && !halted) {
      delegatecall = true;
    } else if (opcode === JUMPDEST) {
      halted = false;
    } else if (isHalting(opcode)) {
      halted = true;
    } else if (isPUSH(opcode)) {
      index += opcode - PUSH1 + 0x01;
    }
  }
  return { halted, delegatecall, selfDestruct: false };
}
