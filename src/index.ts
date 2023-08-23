import "dotenv/config";
import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import path from "path";
import {
  PayloadState,
  generateReport,
  getGovernance,
  getPayloadsController,
  logInfo,
  logWarning,
} from "@bgd-labs/aave-cli";
import { AaveV3Sepolia } from "@bgd-labs/aave-address-book";
import { sepolia } from "viem/chains";
import { CHAIN_ID_CLIENT_MAP } from "./clients";
import { Hex } from "viem";

const payloadStateCachePath = "./cache/payload-states.json";

type Cache = {
  proposals: { [id: number]: boolean };
  [chainId: number]: { [payloadAddress: number]: number };
};

function getCache() {
  let cache: Cache = { proposals: {} };
  if (existsSync(payloadStateCachePath))
    cache = JSON.parse(readFileSync(payloadStateCachePath, "utf8"));
  return cache;
}

function storeCache(cache: Cache) {
  writeFileSync(payloadStateCachePath, JSON.stringify(cache, null, 2));
}

function isPayloadFinal(state: number) {
  return [
    PayloadState.Cancelled,
    PayloadState.Executed,
    PayloadState.Expired,
  ].includes(state);
}

function getPayloadFileName(
  chain: number,
  payloadsController: Hex,
  payloadId: number
) {
  const storagePath = `./reports/payloads/${chain}/${payloadsController}`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, { recursive: true });
  return path.join(storagePath, `${payloadId}.md`);
}

async function main() {
  // construct governance
  const cache = getCache();
  const governance = getGovernance(
    AaveV3Sepolia.GOVERNANCE,
    CHAIN_ID_CLIENT_MAP[sepolia.id].client
  );

  // populate cache
  const logs = await governance.cacheLogs();

  // figure out which
  const proposalCount =
    await governance.governanceContract.read.getProposalsCount();
  const proposalsToCheck = [...Array(Number(proposalCount)).keys()].filter(
    (proposalId) => !cache.proposals[proposalId]
  );
  logInfo("Info", `Checking proposals ${proposalsToCheck}`);

  // check each proposal
  for (const proposalId of proposalsToCheck) {
    logInfo("Info", `Checking proposal ${proposalId}`);
    const proposal = await governance.getProposal(BigInt(proposalId), logs);
    for (const payload of proposal.proposal.payloads) {
      if (isPayloadFinal(cache[Number(payload.chain)]?.[payload.payloadId])) {
        logWarning(
          "Warning",
          `Skipping ${payload.payloadId} on ${payload.chain} as it was simulated in it's final state`
        );
      } else {
        logInfo(
          String(payload.chain),
          `Simulating payload ${payload.payloadId}`
        );
        const controllerContract = getPayloadsController(
          payload.payloadsController,
          CHAIN_ID_CLIENT_MAP[
            Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
          ].client,
          CHAIN_ID_CLIENT_MAP[
            Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
          ].blockCreated
        );
        const logs = await controllerContract.cacheLogs();
        const config = await controllerContract.getPayload(
          payload.payloadId,
          logs
        );
        const result =
          await controllerContract.simulatePayloadExecutionOnTenderly(
            payload.payloadId,
            config
          );
        const report = await generateReport({
          payloadId: payload.payloadId,
          payloadInfo: config,
          simulation: result,
          publicClient:
            CHAIN_ID_CLIENT_MAP[
              Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
            ].client,
        });
        writeFileSync(
          getPayloadFileName(
            CHAIN_ID_CLIENT_MAP[
              Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
            ].client.chain.id,
            payload.payloadsController,
            payload.payloadId
          ),
          report
        );

        // update cache
        if (!cache[Number(payload.chain)]) cache[Number(payload.chain)] = {};
        cache[Number(payload.chain)][payload.payloadId] = config.payload.state;
      }
    }
    // if all payloads are final, it means the proposal no longer needs to be simulated
    const allPayloadsAreFinal = proposal.proposal.payloads.every((payload) =>
      isPayloadFinal(cache[Number(payload.chain)]?.[payload.payloadId])
    );
    if (allPayloadsAreFinal) {
      cache.proposals[proposalId] = true;
    }
  }
  storeCache(cache);
}

main();
