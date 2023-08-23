import "dotenv/config";
import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import path from "path";
import {
  PayloadState,
  ProposalState,
  generateReport,
  getGovernance,
  getPayloadsController,
  logError,
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
  [chainId: number]: {
    [payloadsController: Hex]: { [payloadId: number]: number };
  };
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

function isProposalStuck(state: number) {
  return [
    ProposalState.Expired,
    ProposalState.Cancelled,
    ProposalState.Failed,
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
  logInfo("Ci", `Checking proposals ${proposalsToCheck}`);

  try {
    // check each proposal
    for (const proposalId of proposalsToCheck) {
      logInfo("Ci", `Checking proposal ${proposalId}`);
      const proposal = await governance.getProposal(BigInt(proposalId), logs);
      console.log(proposal.proposal.payloads);
      for (const payload of proposal.proposal.payloads) {
        try {
          if (
            isPayloadFinal(
              cache[Number(payload.chain)]?.[payload.payloadsController]?.[
                payload.payloadId
              ]
            )
          ) {
            logWarning(
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ].client.chain.name,
              `Skipping ${payload.payloadId} as it was simulated in it's final state before`
            );
          } else {
            logInfo(
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ].client.chain.name,
              `Simulating payload ${payload.payloadId} on ${payload.payloadsController}`
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
            if (!cache[Number(payload.chain)])
              cache[Number(payload.chain)] = {};
            if (!cache[Number(payload.chain)][payload.payloadsController])
              cache[Number(payload.chain)][payload.payloadsController] = {};
            cache[Number(payload.chain)][payload.payloadsController][
              payload.payloadId
            ] = config.payload.state;
          }
        } catch (e) {
          logError(
            CHAIN_ID_CLIENT_MAP[
              Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
            ].client.chain.name,
            `Simulating payload ${payload.payloadId} on ${payload.payloadsController} failed`
          );
          console.log(e);
          if (!cache[Number(payload.chain)]) cache[Number(payload.chain)] = {};
          if (!cache[Number(payload.chain)][payload.payloadsController])
            cache[Number(payload.chain)][payload.payloadsController] = {};
          cache[Number(payload.chain)][payload.payloadsController][
            payload.payloadId
          ] = -1;
        }
      }
      // if all payloads are final, it means the proposal no longer needs to be simulated
      const willNeverBeFinal = isProposalStuck(proposal.proposal.state);
      const allPayloadsAreFinal = proposal.proposal.payloads.every((payload) =>
        isPayloadFinal(
          cache[Number(payload.chain)][payload.payloadsController]?.[
            payload.payloadId
          ]
        )
      );
      if (allPayloadsAreFinal || willNeverBeFinal) {
        cache.proposals[proposalId] = true;
      }
    }
  } catch (error) {
    logError("Error", "Stopping simulation due to an error");
    console.log(error);
  }
  storeCache(cache);
}

main();
