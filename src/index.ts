import "dotenv/config";
import { existsSync, writeFileSync, readFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";
import path from "path";
import {
  GovernanceV3Arbitrum,
  GovernanceV3Avalanche,
  GovernanceV3BNB,
  GovernanceV3Base,
  GovernanceV3Ethereum,
  GovernanceV3Gnosis,
  GovernanceV3Metis,
  GovernanceV3Optimism,
  GovernanceV3Polygon,
  GovernanceV3Scroll,
  GovernanceV3PolygonZkEvm,
} from "@bgd-labs/aave-address-book";
import { mainnet } from "viem/chains";
import { Hex, PublicClient } from "viem";
import {
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
import {
  CHAIN_ID_CLIENT_MAP,
  arbitrumClient,
  avalancheClient,
  baseClient,
  bnbClient,
  gnosisClient,
  mainnetClient,
  metisClient,
  optimismClient,
  polygonClient,
  scrollClient,
  zkEVMClient,
} from "@bgd-labs/js-utils";

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
    // -1, // error
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

const DEFAULT_NETWORK = mainnet.id;
const DEFAULT_GOVERNANCE = GovernanceV3Ethereum.GOVERNANCE;

async function simulateProposals(proposalsToCheck: number[], cache: Cache) {
  // construct governance
  const publicClient = CHAIN_ID_CLIENT_MAP[DEFAULT_NETWORK];
  const governance = getGovernance({
    address: DEFAULT_GOVERNANCE,
    publicClient,
  });

  // populate cache
  const logs = await governance.cacheLogs();

  if (proposalsToCheck.length > 0)
    logInfo("Preparation", `Checking proposals ${proposalsToCheck}`);
  else logWarning("Preparation", `No proposals found`);

  try {
    // check each proposal
    for (const proposalId of proposalsToCheck) {
      logInfo("Check", `Checking proposal ${proposalId}`);
      const proposal = await governance.getProposalAndLogs(
        BigInt(proposalId),
        logs
      );
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
          ].chain!.id,
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
              ].chain!.name,
              `Skipping ${payload.payloadId} as it was simulated in it's final state before`
            );
          } else {
            logInfo(
              CHAIN_ID_CLIENT_MAP[
                Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP
              ].chain!.name,
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
                ].chain!.name
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
            ].chain!.name,
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
              ].chain!.name
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

async function simulatePayloads() {
  const cache = getCache();

  const PAYLOAD_CONTROLLERS: { publicClient: PublicClient; address: Hex }[] = [
    {
      publicClient: mainnetClient,
      address: GovernanceV3Ethereum.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: polygonClient,
      address: GovernanceV3Polygon.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: avalancheClient,
      address: GovernanceV3Avalanche.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: optimismClient,
      address: GovernanceV3Optimism.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: arbitrumClient,
      address: GovernanceV3Arbitrum.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: metisClient,
      address: GovernanceV3Metis.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: baseClient,
      address: GovernanceV3Base.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: gnosisClient,
      address: GovernanceV3Gnosis.PAYLOADS_CONTROLLER,
    },
    { publicClient: bnbClient, address: GovernanceV3BNB.PAYLOADS_CONTROLLER },
    {
      publicClient: zkEVMClient,
      address: GovernanceV3PolygonZkEvm.PAYLOADS_CONTROLLER,
    },
    {
      publicClient: scrollClient,
      address: GovernanceV3Scroll.PAYLOADS_CONTROLLER,
    },
  ];
  for (const pc of PAYLOAD_CONTROLLERS) {
    const chain = Number(pc.publicClient.chain!.id);
    logInfo(
      pc.publicClient.chain!.name,
      `Simulating payloads on ${pc.address}`
    );
    const controllerContract = getPayloadsController(
      pc.address,
      pc.publicClient
    );

    const payloadsCount =
      await controllerContract.controllerContract.read.getPayloadsCount();
    if (payloadsCount == 0) {
      logInfo(pc.publicClient.chain!.name, "No payloads found");
      continue;
    }
    let firstBlockToSearch: bigint | undefined = undefined;
    if (!cache[chain]?.[pc.address]) {
      logWarning(
        pc.publicClient.chain!.name,
        "It's the first time we see this controller. So it might take some time."
      );
      // TODO: it's not so trivial as onchain the block is not stored - just the timestamp
      // if it's the first time we see the payloadscontroller we optimize the log searching
      // to do so we fetch the creation block of the first proposal
      // const firstProposal =
      //   await controllerContract.controllerContract.read.getPayloadById([0]);
    }
    const logs = await controllerContract.cacheLogs(firstBlockToSearch);
    const payloadsToCheck = [...Array(Number(payloadsCount)).keys()].filter(
      (payloadId) => {
        if (cache[chain]?.[pc.address]?.[payloadId]) {
          logWarning(
            pc.publicClient.chain!.name,
            `Skipping ${payloadId} as the payload was simulated before`
          );
          return false;
        }
        return true;
      }
    );
    logInfo(pc.publicClient.chain!.name, `Simulating ${payloadsToCheck}`);
    for (const payloadId of payloadsToCheck) {
      const fileName = getPayloadFileName(chain, pc.address, payloadId);
      const config = await controllerContract.getPayload(payloadId, logs);
      // tenderly
      try {
        const tenderlyPayload =
          await controllerContract.simulatePayloadExecutionOnTenderly(
            payloadId,
            config
          );
        const report = await generateReport({
          payloadId: payloadId,
          payloadInfo: config,
          simulation: tenderlyPayload,
          publicClient: pc.publicClient,
        });
        writeFileSync(fileName, report);
        // update cache
        if (!cache[chain]) cache[chain] = {};
        if (!cache[chain][pc.address]) cache[chain][pc.address] = {};
        cache[chain][pc.address][payloadId] = config.payload.state;
      } catch (e) {
        logError(
          pc.publicClient.chain!.name,
          `Simulating payload ${payloadId} on ${pc.address} failed`
        );
        console.log(e);
        if (!cache[chain]) cache[chain] = {};
        if (!cache[chain][pc.address]) cache[chain][pc.address] = {};
        cache[chain][pc.address][payloadId] = -1;
      }

      // foundry
      // on foundry we only want to simulate non executed payloads
      try {
        let blockNumber = BigInt(0); // current
        if (config.executedLog)
          blockNumber = BigInt(config.executedLog.blockNumber) - BigInt(1);
        execSync(
          `forge script script/E2EPayload.s.sol:E2EPayload --rpc-url ${pc
            .publicClient.transport.url!} ${
            blockNumber != BigInt(0) ? `--block-number ${blockNumber}` : ""
          } --sig "run(uint40)" -- ${payloadId}`,
          { stdio: "inherit" }
        );
      } catch (e) {
        console.log("simulating on foundry failed");
      }
    }
    storeCache(cache);
  }
}

async function simulateAll() {
  const cache = getCache();
  const publicClient = CHAIN_ID_CLIENT_MAP[DEFAULT_NETWORK];
  const governance = getGovernance({
    address: DEFAULT_GOVERNANCE,
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
  simulateAll().then(simulatePayloads);
}
