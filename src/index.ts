import "dotenv/config";
import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import path from "path";
import {
  CHAIN_ID_CLIENT_MAP,
  PayloadState,
  ProposalState,
  generateProposalReport,
  generateReport,
  getGovernance,
  getPayloadsController,
  logError,
  logInfo,
  logWarning,
} from "@bgd-labs/aave-cli";
import { GovernanceV3Goerli } from "@bgd-labs/aave-address-book";
import { goerli } from "viem/chains";
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
    -1, // error
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

function getProposalFileName(proposalId: number) {
  const storagePath = `./reports/proposals`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, { recursive: true });
  return path.join(storagePath, `${proposalId}.md`);
}

const GOVERNANCE_NETWORK = goerli.id;

async function simulateProposals(proposalsToCheck: number[], cache: Cache) {
  // construct governance
  const publicClient = CHAIN_ID_CLIENT_MAP[GOVERNANCE_NETWORK];
  const governance = getGovernance({
    address: GovernanceV3Goerli.GOVERNANCE,
    publicClient,
  });

  // populate cache
  const logs = await governance.cacheLogs();

  logInfo("Ci", `Checking proposals ${proposalsToCheck}`);

  try {
    // check each proposal
    for (const proposalId of proposalsToCheck) {
      logInfo("Ci", `Checking proposal ${proposalId}`);
      const proposal = await governance.getProposal(BigInt(proposalId), logs);
      const proposalSimulation =
        await governance.simulateProposalExecutionOnTenderly(
          BigInt(proposalId),
          proposal
        );
      const payloadsSection: string[] = [];

      for (const payload of proposal.proposal.payloads) {
        const fileName = getPayloadFileName(
          CHAIN_ID_CLIENT_MAP[
            Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
          ].chain.id,
          payload.payloadsController,
          payload.payloadId
        );
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
              ].chain.name,
              `Skipping ${payload.payloadId} as it was simulated in it's final state before`
            );
          } else {
            logInfo(
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ].chain.name,
              `Simulating payload ${payload.payloadId} on ${payload.payloadsController}`
            );
            const controllerContract = getPayloadsController(
              payload.payloadsController,
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ]
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
                ],
            });
            writeFileSync(fileName, report);
            payloadsSection.push(
              `- [Network: ${
                CHAIN_ID_CLIENT_MAP[
                  Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
                ].chain.name
              }, PayloadsController: ${payload.payloadsController}, ID: ${
                payload.payloadId
              }](/${fileName})`
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
            ].chain.name,
            `Simulating payload ${payload.payloadId} on ${payload.payloadsController} failed`
          );
          console.log(e);
          if (!cache[Number(payload.chain)]) cache[Number(payload.chain)] = {};
          if (!cache[Number(payload.chain)][payload.payloadsController])
            cache[Number(payload.chain)][payload.payloadsController] = {};
          cache[Number(payload.chain)][payload.payloadsController][
            payload.payloadId
          ] = -1;
          payloadsSection.push(
            `- Network: ${
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ].chain.name
            }, PayloadsController: ${payload.payloadsController}, ID: ${
              payload.payloadId
            } - ERROR`
          );
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
      const proposalReport = await generateProposalReport({
        proposalId: BigInt(proposalId),
        proposalInfo: proposal,
        simulation: proposalSimulation,
        publicClient,
      });
      writeFileSync(
        getProposalFileName(proposalId),
        `# Payloads\n\n${payloadsSection.join("\n")}\n\n${proposalReport}`
      );
    }
  } catch (error) {
    logError("Error", "Stopping simulation due to an error");
    console.log(error);
  }
  storeCache(cache);
}

async function simulateAll() {
  const cache = getCache();
  const publicClient = CHAIN_ID_CLIENT_MAP[GOVERNANCE_NETWORK];
  const governance = getGovernance({
    address: GovernanceV3Goerli.GOVERNANCE,
    publicClient,
  });
  // figure out which proposals to check
  const proposalCount =
    await governance.governanceContract.read.getProposalsCount();
  const proposalsToCheck = [...Array(Number(proposalCount)).keys()].filter(
    (proposalId) => !cache.proposals[proposalId]
  );
  return simulateProposals(proposalsToCheck, cache);
}

async function simulateSome(proposals: number[]) {
  const cache = getCache();
  return simulateProposals(proposals, cache);
}
if (process.argv.length > 2) {
  simulateSome(process.argv.slice(2).map((v) => Number(v)));
} else {
  simulateAll();
}
