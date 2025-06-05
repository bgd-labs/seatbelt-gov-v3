import { Address, Client, Hash, Hex } from "viem";
import {
  parseLogs,
  checkForSelfdestruct,
  getVerificationStatus,
  transformTenderlyStateDiff,
  TenderlySimulationResponse,
  HUMAN_READABLE_PAYLOAD_STATE,
  Payload,
} from "@bgd-labs/toolbox";
import eventDB from "./cache/eventDb.json";

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

export async function renderTenderlyReport({
  client,
  sim,
  payloadId,
  payload,
  onchainLogs: { createdLog, queuedLog, executedLog },
}: RenderTenderlyReportParams) {
  const events = sim.transaction.transaction_info?.logs?.map((log) => ({
    type: "event",
    name: log.name,
    inputs: log.inputs.map((input) => ({
      name: input.soltype?.name!,
      type: input.soltype?.type!,
      indexed: input.soltype?.indexed!,
      internalType: input.soltype?.type!,
    })),
  }));
  const logs = parseLogs({
    logs: (sim.transaction.transaction_info.logs || []).map((l: any) => l.raw),
    eventDb: events as any,
  });
  const selfDestruct = checkForSelfdestruct(
    client,
    sim.transaction.addresses,
    [] // trusted addresses
  );

  const verified = getVerificationStatus({
    client: client,
    addresses: sim.transaction.addresses,
    // In the future we might want to maintain our own db, so we do not need to rely on tenderly so much for contract name lookup.
    contractDb: sim.contracts.reduce((acc, val) => {
      acc[val.address] = val.contract_name;
      return acc;
    }, {} as Record<Address, string>),
  });

  const stateDiff = transformTenderlyStateDiff(
    sim.transaction.transaction_info.state_diff
  );

  console.log(events, logs, selfDestruct, verified, stateDiff);

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
      }, signature: ${a.signature}, callData: ${a.callData}`
  )
  .join("\n")}
- createdAt: [${renderUnixTime(payload.createdAt)}](${toTxLink(
    createdLog.transactionHash,
    client
  )})\n`;
  if (queuedLog) {
    report += `- queuedAt: [${renderUnixTime(payload.queuedAt)}](${toTxLink(
      queuedLog.transactionHash,
      client
    )})\n`;
    if (executedLog) {
      report += `- executedAt: [${renderUnixTime(payload.executedAt)}, block: ${
        executedLog.blockNumber
      }](${toTxLink(executedLog.transactionHash, client)})\n`;
    } else {
      report += `- earliest execution at: [${renderUnixTime(
        payload.queuedAt + payload.delay
      )}](https://www.epochconverter.com/countdown?q=${
        payload.queuedAt + payload.delay
      })\n`;
      const timestamp = Math.floor(
        new Date(sim.transaction.timestamp).getTime() / 1000
      );
      report += `- simulatedExecutionAt: ${renderUnixTime(
        timestamp
      )}, timestamp: ${timestamp}, block: ${sim.transaction.block_number}`;
    }
  }

  report += "\n";

  return report;
}

function renderUnixTime(time: number) {
  return new Date(time * 1000).toLocaleString("en-GB", { timeZone: "UTC" });
}

export function toTxLink(txn: Hex, client: Client): string {
  return `${client.chain?.blockExplorers?.default.url}/tx/${txn}`;
}
