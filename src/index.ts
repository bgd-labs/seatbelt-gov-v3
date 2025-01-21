import 'dotenv/config';
import {existsSync, writeFileSync, readFileSync, mkdirSync} from 'fs';
import {execSync} from 'child_process';
import path from 'path';
import {GovernanceV3Ethereum} from '@bgd-labs/aave-address-book';
import {Address, Client, createClient, Hex, http, HttpTransportConfig} from 'viem';
import {
  findPayloadsController,
  generateProposalReport,
  generateReport,
  getGovernance,
  getPayloadsController,
  logError,
  logInfo,
  logWarning,
} from '@bgd-labs/aave-cli';
import {fallbackProvider} from '@bgd-labs/aave-v3-governance-cache/fallbackProvider';
import {githubPagesProvider} from '@bgd-labs/aave-v3-governance-cache/githubPagesProvider';
import {customStorageProvider} from '@bgd-labs/aave-v3-governance-cache/customStorageProvider';

import {Option, program} from 'commander';
import {ProposalState, isPayloadFinal} from '@bgd-labs/aave-v3-governance-cache';
import {fileSystemStorageAdapter} from '@bgd-labs/aave-v3-governance-cache/fileSystemStorageAdapter';
import {ChainId, ChainList, getRPCUrl} from '@bgd-labs/rpc-env';

const commonConfig: HttpTransportConfig = {timeout: 30_000, batch: true};
const batchConfig = {batch: {multicall: true}};

const clientCache: Record<number, Client> = {};

export function getClient(chainId: number) {
  if (!clientCache[chainId]) {
    const rpcURL = getRPCUrl(chainId as any, {alchemyKey: process.env.ALCHEMY_API_KEY});

    clientCache[chainId] = createClient({
      chain: ChainList[chainId as keyof typeof ChainList],
      transport: http(rpcURL, commonConfig),
      ...batchConfig,
    });
  }
  return clientCache[chainId];
}

const cachingLayer = fallbackProvider(
  githubPagesProvider,
  customStorageProvider(fileSystemStorageAdapter)
);

const MOCK_FINAL_PROPOSAL_STATE = 1000;

type SimulationCache = {state: number};

function getBasePath(chainId: number | bigint, address: Address) {
  return path.join(process.cwd(), 'cache', chainId.toString(), address);
}

function getPath(chainId: number | bigint, address: Address, id: number | bigint) {
  return path.join(getBasePath(chainId, address), `${id}.json`);
}

function getCache(
  chainId: number | bigint,
  address: Address,
  id: number | bigint
): SimulationCache {
  let cache = {state: -1};
  if (existsSync(getPath(chainId, address, id)))
    cache = JSON.parse(readFileSync(getPath(chainId, address, id), 'utf8'));
  return cache;
}

function storeCache(
  chainId: number | bigint,
  address: Address,
  id: number | bigint,
  state: number
) {
  if (!existsSync(getBasePath(chainId, address)))
    mkdirSync(getBasePath(chainId, address), {recursive: true});
  writeFileSync(getPath(chainId, address, id), JSON.stringify({state}));
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

function getChainName(chainId: number) {
  return Object.keys(ChainId)
    .find((key) => ChainId[key as keyof typeof ChainId] === chainId)
    ?.toLowerCase();
}

function simulateViaFoundry(
  payload: {chain: bigint | number; payloadId: number | bigint},
  blockNumber: number | bigint
) {
  const client = getClient(Number(payload.chain));
  const command = [
    `FOUNDRY_PROFILE=${getChainName(Number(payload.chain))}`,
    `forge script ${
      Number(payload.chain) === ChainId.zksync ? 'zksync/' : ''
    }script/E2EPayload.s.sol:E2EPayload`,
    Number(payload.chain) === ChainId.zksync ? '--zksync' : '',
    `--fork-url ${client.transport.url!}`,
    blockNumber != 0n ? ` --fork-block-number ${blockNumber}` : '',
    '-vvvv',
    `--sig "run(uint40)" -- ${payload.payloadId}`,
  ]
    .filter((c) => c)
    .join(' ');
  if (process.env.VERBOSE === 'true') console.log(command);
  return execSync(command, {stdio: 'inherit'});
}

const CHAIN_NOT_SUPPORTED_ON_TENDERLY: number[] = [ChainId.zkEVM, ChainId.zksync, ChainId.celo];

async function simulateProposals(proposalsToCheck: number[]) {
  const client = getClient(1);
  const governance = getGovernance({
    address: GovernanceV3Ethereum.GOVERNANCE,
    client,
  });

  // populate cache
  if (proposalsToCheck.length > 0) logInfo('Preparation', `Checking proposals ${proposalsToCheck}`);
  else logWarning('Preparation', `No proposals found`);

  try {
    // check each proposal
    for (const proposalId of proposalsToCheck) {
      try {
        logInfo('Check', `Checking proposal ${proposalId}`);
        const cache = await cachingLayer.getProposal({
          chainId: 1,
          governance: GovernanceV3Ethereum.GOVERNANCE,
          proposalId: BigInt(proposalId),
        });
        const proposalSimulation = await governance.simulateProposalExecutionOnTenderly(
          BigInt(proposalId),
          cache.logs
        );
        const payloadsSection: string[] = [];

        for (const payload of cache.proposal.payloads) {
          const client = getClient(Number(payload.chain));
          const fileName = getPayloadFileName(
            client.chain!.id,
            payload.payloadsController,
            payload.payloadId
          );
          const simulationCache = getCache(
            payload.chain,
            payload.payloadsController,
            payload.payloadId
          );
          try {
            if (isPayloadFinal(simulationCache.state)) {
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

              const cache = await cachingLayer.getPayload({
                chainId: Number(payload.chain),
                payloadId: payload.payloadId,
                payloadsController: payload.payloadsController,
              });
              if (!CHAIN_NOT_SUPPORTED_ON_TENDERLY.includes(client.chain!.id)) {
                try {
                  const result = await controllerContract.simulatePayloadExecutionOnTenderly(
                    payload.payloadId,
                    cache.logs
                  );
                  const report = await generateReport({
                    payloadId: payload.payloadId,
                    payloadInfo: cache,
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
              if (simulationCache.state !== cache.payload.state || process.env.RUN_FORGE_ALWAYS) {
                try {
                  let blockNumber = 0n; // current
                  if (cache.logs.executedLog)
                    blockNumber = BigInt(cache.logs.executedLog.blockNumber) - BigInt(1);
                  simulateViaFoundry(payload, blockNumber);
                  console.log('foundry simulation finished');
                  // update cache
                  storeCache(
                    payload.chain,
                    payload.payloadsController,
                    payload.payloadId,
                    cache.payload.state
                  );
                } catch (e) {
                  throw new Error('Error simulating on foundry');
                }
              }
            }
          } catch (e) {
            logError(
              getClient(Number(payload.chain)).chain!.name,
              `Simulating payload ${payload.payloadId} on ${payload.payloadsController} failed`
            );
            console.log(e);
            storeCache(payload.chain, payload.payloadsController, payload.payloadId, -1);
            payloadsSection.push(
              `- Network: ${getClient(Number(payload.chain)).chain!.name}, PayloadsController: ${
                payload.payloadsController
              }, ID: ${payload.payloadId} - ERROR`
            );
          }
        }
        // if all payloads are final, it means the proposal no longer needs to be simulated
        const willNeverBeFinal = isProposalStuck(cache.proposal.state);
        const allPayloadsAreFinal = cache.proposal.payloads.every((payload) =>
          isPayloadFinal(
            getCache(payload.chain, payload.payloadsController, payload.payloadId).state
          )
        );
        if (allPayloadsAreFinal || willNeverBeFinal) {
          storeCache(1, GovernanceV3Ethereum.GOVERNANCE, proposalId, MOCK_FINAL_PROPOSAL_STATE);
        }
        const proposalReport = await generateProposalReport({
          proposalId: BigInt(proposalId),
          proposalInfo: cache,
          simulation: proposalSimulation,
          client,
        });
        writeFileSync(
          getProposalFileName(proposalId),
          `# Payloads\n\n${payloadsSection.join('\n')}\n\n${proposalReport}`
        );
      } catch (e) {
        console.log(e);
        console.log(`error simulating proposal ${proposalId}`);
      }
    }
  } catch (error) {
    logError('Error', 'Stopping simulation due to an error');
    console.log(error);
  }
}

async function simulatePayload(chainId: number, payloadIds: number[]) {
  const client = getClient(chainId);
  const address = findPayloadsController(chainId)!;
  if (!address) throw new Error(`payloadsController on ${chainId} not found`);
  logInfo(client.chain!.name, `Simulating payloads on ${address}`);
  const controllerContract = getPayloadsController(address, client);
  if (!payloadIds || payloadIds.length === 0) {
    const payloadsCount = await controllerContract.controllerContract.read.getPayloadsCount();
    payloadIds = [...Array(Number(payloadsCount)).keys()].filter((payloadId) => {
      if (getCache(chainId, address, payloadId).state !== -1) {
        logWarning(client.chain!.name, `Skipping ${payloadId} as the payload was simulated before`);
        return false;
      }
      return true;
    });
  }
  for (const payloadId of payloadIds) {
    logInfo(client.chain!.name, `Simulating ${payloadId}`);
    const fileName = getPayloadFileName(chainId, address, payloadId);
    const cache = await cachingLayer.getPayload({chainId, payloadId, payloadsController: address});
    // tenderly
    if (!CHAIN_NOT_SUPPORTED_ON_TENDERLY.includes(chainId)) {
      try {
        const tenderlyPayload = await controllerContract.simulatePayloadExecutionOnTenderly(
          payloadId,
          cache.logs
        );
        const report = await generateReport({
          payloadId: payloadId,
          payloadInfo: cache,
          simulation: tenderlyPayload,
          client,
        });
        writeFileSync(fileName, report);
        storeCache(chainId, address, payloadId, cache.payload.state);
      } catch (e) {
        logError(client.chain!.name, `Simulating payload ${payloadId} on ${address} failed`);
        console.log(e);
        storeCache(chainId, address, payloadId, -1);
      }
    }

    // foundry
    try {
      let blockNumber = BigInt(0); // current
      if (cache.logs.executedLog)
        blockNumber = BigInt(cache.logs.executedLog.blockNumber) - BigInt(1);
      simulateViaFoundry({chain: chainId, payloadId}, blockNumber);
      storeCache(chainId, address, payloadId, cache.payload.state);
      console.log('foundry simulation finished');
    } catch (e) {
      console.log('simulating on foundry failed');
    }
  }
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
    console.log(options);
    if (options.type === 'proposal') {
      if (options.ids && options.ids.length > 0)
        return simulateProposals(options.ids.map((id: string) => Number(id)));
      else {
        const client = getClient(1);
        const governance = getGovernance({
          address: GovernanceV3Ethereum.GOVERNANCE,
          client,
        });
        // figure out which proposals to check
        const proposalCount = await governance.governanceContract.read.getProposalsCount();
        const proposalsToCheck = [...Array(Number(proposalCount)).keys()].filter(
          (proposalId) =>
            getCache(1, GovernanceV3Ethereum.GOVERNANCE, proposalId).state !==
            MOCK_FINAL_PROPOSAL_STATE
        );
        return simulateProposals(proposalsToCheck);
      }
    } else {
      if (!options.chainId || typeof options.chainId === 'boolean')
        throw new Error('chainId required when simulating payloads');
      return simulatePayload(
        Number(options.chainId),
        options.ids && options.ids.length > 0 && options.ids.map((id: string) => Number(id))
      );
    }
  })
  .showHelpAfterError()
  .parse();
