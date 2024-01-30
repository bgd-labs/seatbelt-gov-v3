import 'dotenv/config';
import {existsSync, writeFileSync, readFileSync, mkdirSync} from 'fs';
import {execSync} from 'child_process';
import path from 'path';
import {GovernanceV3Ethereum} from '@bgd-labs/aave-address-book';
import {Client, Hex} from 'viem';
import {
  PayloadState,
  ProposalState,
  cacheGovernance,
  cachePayloadsController,
  findPayloadsController,
  generateProposalReport,
  generateReport,
  getGovernance,
  getPayloadsController,
  logError,
  logInfo,
  logWarning,
  readBookKeepingCache,
  writeBookKeepingCache,
} from '@bgd-labs/aave-cli';
import {CHAIN_ID_CLIENT_MAP, ChainId, mainnetClient} from '@bgd-labs/js-utils';
import {Option, program} from 'commander';

const payloadStateCachePath = './cache/payload-states.json';

type Cache = {
  proposals: {[id: number]: boolean};
  [chainId: number]: {
    [payloadsController: Hex]: {[payloadId: number]: number};
  };
};

function getCache() {
  let cache: Cache = {proposals: {}};
  if (existsSync(payloadStateCachePath))
    cache = JSON.parse(readFileSync(payloadStateCachePath, 'utf8'));
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
  return [ProposalState.Expired, ProposalState.Cancelled, ProposalState.Failed].includes(state);
}

function getPayloadFileName(chain: number, payloadsController: Hex, payloadId: number) {
  const storagePath = `./reports/payloads/${chain}/${payloadsController}`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, {recursive: true});
  return path.join(storagePath, `${payloadId}.md`);
}

function getProposalFileName(proposalId: number) {
  const storagePath = `./reports/proposals`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, {recursive: true});
  return path.join(storagePath, `${proposalId}.md`);
}

const CHAIN_NOT_SUPPORTED_ON_TENDERLY: number[] = [ChainId.metis];

async function simulateProposals(proposalsToCheck: number[], cache: Cache) {
  const bookKeeping = readBookKeepingCache();
  // construct governance
  const client = mainnetClient;
  const governance = getGovernance({
    address: GovernanceV3Ethereum.GOVERNANCE,
    client,
  });

  // populate cache
  const {eventsCache} = await cacheGovernance(client, GovernanceV3Ethereum.GOVERNANCE, bookKeeping);

  if (proposalsToCheck.length > 0) logInfo('Preparation', `Checking proposals ${proposalsToCheck}`);
  else logWarning('Preparation', `No proposals found`);

  try {
    // check each proposal
    for (const proposalId of proposalsToCheck) {
      logInfo('Check', `Checking proposal ${proposalId}`);
      const proposal = await governance.getProposalAndLogs(BigInt(proposalId), eventsCache);
      const proposalSimulation = await governance.simulateProposalExecutionOnTenderly(
        BigInt(proposalId),
        proposal
      );
      const payloadsSection: string[] = [];

      for (const payload of proposal.proposal.payloads) {
        const client =
          CHAIN_ID_CLIENT_MAP[Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP];
        const fileName = getPayloadFileName(
          client.chain!.id,
          payload.payloadsController,
          payload.payloadId
        );
        try {
          if (
            isPayloadFinal(
              cache[Number(payload.chain)]?.[payload.payloadsController]?.[payload.payloadId]
            )
          ) {
            logWarning(
              client.chain!.name,
              `Skipping ${payload.payloadId} as it was simulated in it's final state before`
            );
          } else {
            logInfo(
              client.chain!.name,
              `Simulating payload ${payload.payloadId} on ${payload.payloadsController}`
            );
            const controllerContract = getPayloadsController(payload.payloadsController, client);
            const {eventsCache} = await cachePayloadsController(
              client,
              payload.payloadsController,
              bookKeeping
            );

            const config = await controllerContract.getPayload(payload.payloadId, eventsCache);
            if (!CHAIN_NOT_SUPPORTED_ON_TENDERLY.includes(client.chain!.id)) {
              try {
                const result = await controllerContract.simulatePayloadExecutionOnTenderly(
                  payload.payloadId,
                  config
                );
                const report = await generateReport({
                  payloadId: payload.payloadId,
                  payloadInfo: config,
                  simulation: result,
                  client,
                });
                writeFileSync(fileName, report);
                payloadsSection.push(
                  `- [Network: ${client.chain!.name}, PayloadsController: ${
                    payload.payloadsController
                  }, ID: ${payload.payloadId}](/${fileName})`
                );
              } catch (e) {
                console.log('error simulating on tenderly');
              }
            }
            // foundry
            if (
              cache[Number(payload.chain)]?.[payload.payloadsController]?.[payload.payloadId] !=
              config.payload.state
            ) {
              try {
                let blockNumber = BigInt(0); // current
                if (config.executedLog)
                  blockNumber = BigInt(config.executedLog.blockNumber) - BigInt(1);
                execSync(
                  `forge script script/E2EPayload.s.sol:E2EPayload --fork-url ${client.transport
                    .url!}${
                    blockNumber != BigInt(0) ? ` --fork-block-number ${blockNumber}` : ''
                  } --sig "run(uint40)" -- ${payload.payloadId}`,
                  {stdio: 'inherit'}
                );
                // update cache
                if (!cache[Number(payload.chain)]) cache[Number(payload.chain)] = {};
                if (!cache[Number(payload.chain)][payload.payloadsController])
                  cache[Number(payload.chain)][payload.payloadsController] = {};
                cache[Number(payload.chain)][payload.payloadsController][payload.payloadId] =
                  config.payload.state;
              } catch (e) {
                throw new Error('Error simulating on foundry');
              }
            }
          }
        } catch (e) {
          logError(
            CHAIN_ID_CLIENT_MAP[Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP].chain!
              .name,
            `Simulating payload ${payload.payloadId} on ${payload.payloadsController} failed`
          );
          console.log(e);
          if (!cache[Number(payload.chain)]) cache[Number(payload.chain)] = {};
          if (!cache[Number(payload.chain)][payload.payloadsController])
            cache[Number(payload.chain)][payload.payloadsController] = {};
          cache[Number(payload.chain)][payload.payloadsController][payload.payloadId] = -1;
          payloadsSection.push(
            `- Network: ${
              CHAIN_ID_CLIENT_MAP[Number(payload.chain) as keyof typeof CHAIN_ID_CLIENT_MAP].chain!
                .name
            }, PayloadsController: ${payload.payloadsController}, ID: ${payload.payloadId} - ERROR`
          );
        }
      }
      // if all payloads are final, it means the proposal no longer needs to be simulated
      const willNeverBeFinal = isProposalStuck(proposal.proposal.state);
      const allPayloadsAreFinal = proposal.proposal.payloads.every((payload) =>
        isPayloadFinal(
          cache[Number(payload.chain)][payload.payloadsController]?.[payload.payloadId]
        )
      );
      if (allPayloadsAreFinal || willNeverBeFinal) {
        cache.proposals[proposalId] = true;
      }
      const proposalReport = await generateProposalReport({
        proposalId: BigInt(proposalId),
        proposalInfo: proposal,
        simulation: proposalSimulation,
        client,
      });
      writeFileSync(
        getProposalFileName(proposalId),
        `# Payloads\n\n${payloadsSection.join('\n')}\n\n${proposalReport}`
      );
    }
  } catch (error) {
    logError('Error', 'Stopping simulation due to an error');
    console.log(error);
  }
  storeCache(cache);
  writeBookKeepingCache(bookKeeping);
}

async function simulatePayload(chainId: number, payloadIds: number[]) {
  const bookKeeping = readBookKeepingCache();
  const cache = getCache();
  const client = CHAIN_ID_CLIENT_MAP[chainId] as Client;
  const address = findPayloadsController(chainId)!;
  if (!address) throw new Error(`payloadsController on ${chainId} not found`);
  logInfo(client.chain!.name, `Simulating payloads on ${address}`);
  const controllerContract = getPayloadsController(address, client);
  const {eventsCache} = await cachePayloadsController(client, address, bookKeeping);
  if (!payloadIds || payloadIds.length === 0) {
    const payloadsCount = await controllerContract.controllerContract.read.getPayloadsCount();
    payloadIds = [...Array(Number(payloadsCount)).keys()].filter((payloadId) => {
      if (cache[chainId]?.[address]?.[payloadId]) {
        logWarning(client.chain!.name, `Skipping ${payloadId} as the payload was simulated before`);
        return false;
      }
      return true;
    });
  }
  for (const payloadId of payloadIds) {
    logInfo(client.chain!.name, `Simulating ${payloadId}`);
    const fileName = getPayloadFileName(chainId, address, payloadId);
    const config = await controllerContract.getPayload(payloadId, eventsCache);
    // tenderly
    try {
      const tenderlyPayload = await controllerContract.simulatePayloadExecutionOnTenderly(
        payloadId,
        config
      );
      const report = await generateReport({
        payloadId: payloadId,
        payloadInfo: config,
        simulation: tenderlyPayload,
        client,
      });
      writeFileSync(fileName, report);
      // update cache
      if (!cache[chainId]) cache[chainId] = {};
      if (!cache[chainId][address]) cache[chainId][address] = {};
      cache[chainId][address][payloadId] = config.payload.state;
    } catch (e) {
      logError(client.chain!.name, `Simulating payload ${payloadId} on ${address} failed`);
      console.log(e);
      if (!cache[chainId]) cache[chainId] = {};
      if (!cache[chainId][address]) cache[chainId][address] = {};
      cache[chainId][address][payloadId] = -1;
    }

    // foundry
    try {
      let blockNumber = BigInt(0); // current
      if (config.executedLog) blockNumber = BigInt(config.executedLog.blockNumber) - BigInt(1);
      execSync(
        `forge script script/E2EPayload.s.sol:E2EPayload --fork-url ${client.transport.url!}${
          blockNumber != BigInt(0) ? ` --fork-block-number ${blockNumber}` : ''
        } --sig "run(uint40)" -- ${payloadId}`,
        {stdio: 'inherit'}
      );
    } catch (e) {
      console.log('simulating on foundry failed');
    }
  }
  storeCache(cache);
  writeBookKeepingCache(bookKeeping);
}

program
  .addOption(
    new Option(
      '-t, --type <type>',
      'simulate proposal(including payloads) or a single payload'
    ).choices(['payload', 'proposal'])
  )
  .addOption(
    new Option('-c, --chainId [chainId]', 'the chainId of the payload (only for payloads)')
  )
  .addOption(new Option('-i, --ids [ids...]', 'the ids of the payloads/proposals'))
  .action(async (options) => {
    const cache = getCache();
    if (options.type === 'proposal') {
      if (options.ids && options.ids.length > 0)
        return simulateProposals(
          options.ids.map((id: string) => Number(id)),
          cache
        );
      else {
        const client = mainnetClient;
        const governance = getGovernance({
          address: GovernanceV3Ethereum.GOVERNANCE,
          client,
        });
        // figure out which proposals to check
        const proposalCount = await governance.governanceContract.read.getProposalsCount();
        const proposalsToCheck = [...Array(Number(proposalCount)).keys()].filter(
          (proposalId) => !cache.proposals[proposalId]
        );
        return simulateProposals(proposalsToCheck, cache);
      }
    } else {
      if (!options.chainId) throw new Error('chainId required when simulating payloads');
      return simulatePayload(
        Number(options.chainId),
        options.ids && options.ids.length > 0 && options.ids.map((id: string) => Number(id))
      );
    }
  })
  .showHelpAfterError()
  .parse();
