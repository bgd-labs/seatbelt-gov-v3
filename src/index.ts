import 'dotenv/config';
import {existsSync, writeFileSync, mkdirSync} from 'fs';
import path from 'path';
import {Address, Hex} from 'viem';
import * as addresses from '@bgd-labs/aave-address-book';
import {logError, logInfo} from '@bgd-labs/aave-cli';
import {getClient, getNonFinalizedPayloads} from '@bgd-labs/toolbox';
import {fallbackProvider} from '@bgd-labs/aave-v3-governance-cache/fallbackProvider';
import {githubPagesProvider} from '@bgd-labs/aave-v3-governance-cache/githubPagesProvider';
import {customStorageProvider} from '@bgd-labs/aave-v3-governance-cache/customStorageProvider';
import {fileSystemStorageAdapter} from '@bgd-labs/aave-v3-governance-cache/fileSystemStorageAdapter';
import {Option, program} from 'commander';
import {CHAIN_NOT_SUPPORTED_ON_TENDERLY, simulateOnTenderly} from './tenderly';
import {generatePayloadsStrategy} from './strategy';
import {simulateViaFoundry} from './foundry';
import {storeSimulationState} from './simulationCache';

const cachingLayer = fallbackProvider(
  githubPagesProvider,
  customStorageProvider(fileSystemStorageAdapter)
);

function getPayloadFileName(chain: number, payloadsController: Hex, payloadId: number) {
  const storagePath = `./reports/payloads/${chain}/${payloadsController}`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, {recursive: true});
  return path.join(storagePath, `${payloadId}.md`);
}

async function simulatePayload(chainId: number, payloadsController: Address, payloadIds: number[]) {
  if (!payloadsController) throw new Error(`payloadsController on ${chainId} not found`);
  logInfo(chainId.toString(), `Simulating payloads on ${payloadsController}`);
  if (!payloadIds || payloadIds.length === 0) {
    payloadIds = await getNonFinalizedPayloads(
      getClient(chainId, {
        providerConfig: {
          alchemyKey: process.env.ALCHEMY_API_KEY,
          quicknodeToken: process.env.QUICKNODE_TOKEN,
          quicknodeEndpointName: process.env.QUICKNODE_ENDPOINT_NAME,
        },
      }),
      payloadsController
    );
  }
  for (const payloadId of payloadIds) {
    const cache = await cachingLayer.getPayload({chainId, payloadId, payloadsController});
    logInfo(chainId.toString(), `Simulating ${payloadId}`);
    const fileName = getPayloadFileName(chainId, payloadsController, payloadId);
    const strategy = await generatePayloadsStrategy(chainId, payloadsController, payloadId);
    if (!CHAIN_NOT_SUPPORTED_ON_TENDERLY.includes(chainId)) {
      try {
        const report = await simulateOnTenderly({
          chainId,
          payloadsController,
          payloadId: payloadId,
          executeBefore: strategy.executeBefore,
          cache,
        });
        writeFileSync(fileName, report);
        storeSimulationState(chainId, payloadsController, payloadId, cache.payload.state);
      } catch (e) {
        logError(
          chainId.toString(),
          `Simulating payload ${payloadId} on ${payloadsController} failed`
        );
        console.log(e);
        storeSimulationState(chainId, payloadsController, payloadId, -1);
      }
    }

    // foundry
    try {
      let blockNumber = BigInt(0); // current
      if (cache.logs.executedLog)
        blockNumber = BigInt(cache.logs.executedLog.blockNumber) - BigInt(1);
      simulateViaFoundry({chain: chainId, payloadId}, blockNumber);
      storeSimulationState(chainId, payloadsController, payloadId, cache.payload.state);
      console.log('foundry simulation finished');
    } catch (e) {
      console.log('simulating on foundry failed');
    }
  }
}

export function findPayloadsControllers(chainId: number): Address[] {
  return Object.keys(addresses).reduce((acc, key) => {
    if ((addresses[key as keyof typeof addresses] as any).CHAIN_ID === chainId) {
      if ((addresses[key as keyof typeof addresses] as any).PAYLOADS_CONTROLLER)
        acc.push((addresses[key as keyof typeof addresses] as any).PAYLOADS_CONTROLLER);
      if ((addresses[key as keyof typeof addresses] as any).PERMISSIONED_PAYLOADS_CONTROLLER)
        acc.push(
          (addresses[key as keyof typeof addresses] as any).PERMISSIONED_PAYLOADS_CONTROLLER
        );
    }

    return acc;
  }, [] as Address[]);
}

program
  .addOption(
    new Option('-c, --chainId [chainId]', 'the chainId of the payload (only for payloads)')
  )
  .addOption(new Option('-i, --ids [ids...]', 'the ids of the payloads/proposals'))
  .addOption(
    new Option(
      '-c, --payloadsController [payloadsController]',
      'the address of the payloadsController'
    )
  )
  .action(async (options) => {
    console.log(options);
    if (!options.chainId || typeof options.chainId === 'boolean')
      throw new Error('chainId required when simulating payloads');
    const payloadsControllers = options.payloadsController
      ? [options.payloadsController]
      : findPayloadsControllers(Number(options.chainId))!;
    for (const controller of payloadsControllers) {
      return simulatePayload(
        Number(options.chainId),
        controller,
        options.ids && options.ids.length > 0 && options.ids.map((id: string) => Number(id))
      );
    }
  })
  .showHelpAfterError()
  .parse();
