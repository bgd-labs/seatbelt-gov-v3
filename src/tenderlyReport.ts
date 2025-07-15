import { Address, Client, Hash, Hex } from "viem";
import {
  parseLogs,
  checkForSelfdestruct,
  getVerificationStatus,
  transformTenderlyStateDiff,
  TenderlySimulationResponse,
  HUMAN_READABLE_PAYLOAD_STATE,
  Payload,
  TenderlyLog,
  Input,
  SoltypeElement,
  tenderly_logsToAbiLogs,
  verificationStatusToString,
  VerificationStatus,
  SelfdestuctCheckState,
} from "@bgd-labs/toolbox";
import eventCache from "./cache/eventDb.json";

type RenderTenderlyReportParams = {
  client: Client;
  sim: TenderlySimulationResponse;
  payloadId: number;
  payload: Payload;
  onchainLogs: {
    createdLog: { transactionHash: Hash; blockNumber: number };
    queuedLog?: { transactionHash: Hash; blockNumber: number };
    executedLog?: { transactionHash: Hash; blockNumber: number };
  };
};

export function selfDestructStatusToString(
  state: SelfdestuctCheckState,
): string {
  switch (state) {
    case SelfdestuctCheckState.TRUSTED:
      return "Trusted";
    case SelfdestuctCheckState.EOA:
      return "EOA";
    case SelfdestuctCheckState.EMPTY:
      return "Empty";
    case SelfdestuctCheckState.DELEGATECALL:
      return "DelegateCall";
    case SelfdestuctCheckState.SAFE:
      return "Safe";
    case SelfdestuctCheckState.SELF_DESTRUCT:
      return "SelfDestruct";
    default:
      return "Unknown";
  }
}

export async function renderTenderlyReport({
  client,
  sim,
  payloadId,
  payload,
  onchainLogs: { createdLog, queuedLog, executedLog },
}: RenderTenderlyReportParams) {
  const events = tenderly_logsToAbiLogs(sim.transaction.transaction_info?.logs);
  events.map((e) => {
    if (!eventCache.find((eC) => JSON.stringify(eC) === JSON.stringify(e))) {
      eventCache.push(e);
    }
  });
  const logs = parseLogs({
    logs: (sim.transaction.transaction_info.logs || []).map((l: any) => l.raw),
    eventDb: eventCache,
  });
  const selfDestruct = await checkForSelfdestruct(
    client,
    sim.transaction.addresses,
    [], // trusted addresses
  );

  const verified = await getVerificationStatus({
    client: client,
    addresses: sim.transaction.addresses,
    // In the future we might want to maintain our own db, so we do not need to rely on tenderly so much for contract name lookup.
    contractDb: sim.contracts.reduce(
      (acc, val) => {
        acc[val.address] = val.contract_name;
        return acc;
      },
      {} as Record<Address, string>,
    ),
  });

  const stateDiff = transformTenderlyStateDiff(
    sim.transaction.transaction_info.state_diff,
  );

  let report = `## Payload ${payloadId} on ${client.chain!.name}

- creator: ${payload.creator}
- maximumAccessLevelRequired: ${payload.maximumAccessLevelRequired}
- state: ${payload.state}(${
    (HUMAN_READABLE_PAYLOAD_STATE as any)[payload.state]
  })
- actions:
${payload.actions
  .map(
    (a) =>
      `  - [${a.target}](${toTxLink(a.target, client)}), accessLevel: ${
        a.accessLevel
      }, withDelegateCall: ${a.withDelegateCall}, value: ${
        a.value
      }, signature: ${a.signature}, callData: ${a.callData}`,
  )
  .join("\n")}
- createdAt: [${renderUnixTime(payload.createdAt)}](${toTxLink(
    createdLog.transactionHash,
    client,
  )})\n`;
  if (queuedLog) {
    report += `- queuedAt: [${renderUnixTime(payload.queuedAt)}](${toTxLink(
      queuedLog.transactionHash,
      client,
    )})\n`;
    if (executedLog) {
      report += `- executedAt: [${renderUnixTime(payload.executedAt)}, block: ${
        executedLog.blockNumber
      }](${toTxLink(executedLog.transactionHash, client)})\n`;
    } else {
      report += `- earliest execution at: [${renderUnixTime(
        payload.queuedAt + payload.delay,
      )}](https://www.epochconverter.com/countdown?q=${
        payload.queuedAt + payload.delay
      })\n`;
      const timestamp = Math.floor(
        new Date(sim.transaction.timestamp).getTime() / 1000,
      );
      report += `- simulatedExecutionAt: ${renderUnixTime(
        timestamp,
      )}, timestamp: ${timestamp}, block: ${sim.transaction.block_number}`;
    }
  }

  report += "\n";

  if (
    verified.find((contract) => contract.status === VerificationStatus.ERROR)
  ) {
    report += `:sos: Found unverified contracts!`;
  }

  if (
    selfDestruct.find(
      (contract) => contract.state === SelfdestuctCheckState.SELF_DESTRUCT,
    )
  ) {
    report += `:sos: Found selfDestruct!`;
  }

  Object.keys(stateDiff).map((address) => {
    report += `<name> at ${address}`;
    report += JSON.stringify(stateDiff[address]);
  });

  if (verified.length) {
    report +=
      "### Verification status for contracts touched in the proposal\n\n";
    report += "| Contract | Status |\n";
    report += "|---------|------------|\n";
    verified.map((contract) => {
      report += `| ${contract.address}(${
        contract.name
      }) | ${verificationStatusToString(contract.status)} |\n`;
    });
    report += "\n";
  }

  if (selfDestruct.length) {
    report += `### Selfdestruct analysis\n\n`;
    report += "| Address | Result |\n";
    report += "|---------|------------|\n";
    selfDestruct.map((selfDestruct) => {
      report += `| ${selfDestruct.address} | ${selfDestructStatusToString(
        selfDestruct.state,
      )} |\n`;
    });
    report += "\n";
  }

  if (logs.length) {
    report += "### Events emitted from the proposal\n\n";
    report += "| Address | Event Name | Arguments |\n";
    report += "|---------|------------|-----------|\n";
    console.log(logs);
    logs.map((log) => {
      report += `| ${log.address} | ${log.eventName || log.topics} | ${
        log.args
          ? JSON.stringify(log.args, (_, v) =>
              typeof v === "bigint" ? v.toString() : v,
            )
          : log.data
      } |\n`;
    });
  }

  return { report, eventCache };
}

function renderUnixTime(time: number) {
  return new Date(time * 1000).toLocaleString("en-GB", { timeZone: "UTC" });
}

export function toTxLink(txn: Hex, client: Client): string {
  return `${client.chain?.blockExplorers?.default.url}/tx/${txn}`;
}
