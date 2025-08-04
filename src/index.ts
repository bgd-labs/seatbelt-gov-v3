import "dotenv/config";
import { existsSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { Address, Hex } from "viem";
import * as addresses from "@bgd-labs/aave-address-book";
import { getClient, getNonFinalizedPayloads } from "@bgd-labs/toolbox";
import { Option, program } from "commander";
import {
  CHAIN_NOT_SUPPORTED_ON_TENDERLY,
  simulateOnTenderly,
} from "./tenderly";
import { generatePayloadsStrategy } from "./strategy";
import { simulateViaFoundry } from "./foundry";
import { storeSimulationState } from "./simulationCache";
import { getCache } from "./cache/logs";

function getPayloadFileName(
  chain: number,
  payloadsController: Hex,
  payloadId: number,
) {
  const storagePath = `./reports/payloads/${chain}/${payloadsController}`;
  if (!existsSync(storagePath)) mkdirSync(storagePath, { recursive: true });
  return path.join(storagePath, `${payloadId}.md`);
}

async function simulatePayload(
  chainId: number,
  payloadsController: Address,
  payloadIds: number[],
) {
  if (!payloadsController)
    throw new Error(`payloadsController on ${chainId} not found`);
  console.info(
    chainId.toString(),
    `Simulating payloads on ${payloadsController}`,
  );
  if (!payloadIds || payloadIds.length === 0) {
    payloadIds = await getNonFinalizedPayloads(
      getClient(chainId, {
        providerConfig: {
          alchemyKey: process.env.ALCHEMY_API_KEY,
          quicknodeToken: process.env.QUICKNODE_TOKEN,
          quicknodeEndpointName: process.env.QUICKNODE_ENDPOINT_NAME,
        },
      }),
      payloadsController,
    );
  }
  for (const payloadId of payloadIds) {
    console.info(chainId.toString(), `Simulating ${payloadId}`);
    const fileName = getPayloadFileName(chainId, payloadsController, payloadId);
    const strategy = await generatePayloadsStrategy(
      chainId,
      payloadsController,
      payloadId,
    );
    const cache = getCache(chainId, payloadsController, payloadId);
    if (!CHAIN_NOT_SUPPORTED_ON_TENDERLY.includes(chainId)) {
      try {
        const simResult = await simulateOnTenderly({
          chainId,
          payloadsController,
          payloadId: payloadId,
          executeBefore: strategy.executeBefore,
          cache: { payload: strategy.payload, logs: cache },
        });

        if (process.env.UPDATE_EVENT_DB === "true") {
          writeFileSync(
            "./src/cache/eventDb.json",
            JSON.stringify(simResult.eventCache, null, 2),
          );
        }

        writeFileSync(fileName, simResult.report);
        storeSimulationState(
          chainId,
          payloadsController,
          payloadId,
          strategy.payload.state,
        );
      } catch (e) {
        console.error(
          chainId.toString(),
          `Simulating payload ${payloadId} on ${payloadsController} failed`,
        );
        console.log(e);
        storeSimulationState(chainId, payloadsController, payloadId, -1);

        // foundry
        try {
          let blockNumber = BigInt(0); // current
          if (cache.executedLog)
            blockNumber = BigInt(cache.executedLog.blockNumber) - BigInt(1);
          simulateViaFoundry({ chain: chainId, payloadId }, blockNumber);
          storeSimulationState(
            chainId,
            payloadsController,
            payloadId,
            strategy.payload.state,
          );
          console.log("foundry simulation finished");
        } catch (e) {
          console.log("simulating on foundry failed");
        }
      }
    }
  }
}

export function findPayloadsControllers(chainId: number): Address[] {
  return Object.keys(addresses).reduce((acc, key) => {
    if (
      (addresses[key as keyof typeof addresses] as any).CHAIN_ID === chainId
    ) {
      if ((addresses[key as keyof typeof addresses] as any).PAYLOADS_CONTROLLER)
        acc.push(
          (addresses[key as keyof typeof addresses] as any).PAYLOADS_CONTROLLER,
        );
      if (
        (addresses[key as keyof typeof addresses] as any)
          .PERMISSIONED_PAYLOADS_CONTROLLER
      )
        acc.push(
          (addresses[key as keyof typeof addresses] as any)
            .PERMISSIONED_PAYLOADS_CONTROLLER,
        );
    }

    return acc;
  }, [] as Address[]);
}

program
  .addOption(
    new Option(
      "-c, --chainId [chainId]",
      "the chainId of the payload (only for payloads)",
    ),
  )
  .addOption(
    new Option("-i, --ids [ids...]", "the ids of the payloads/proposals"),
  )
  .addOption(
    new Option(
      "-c, --payloadsController [payloadsController]",
      "the address of the payloadsController",
    ),
  )
  .action(async (options) => {
    console.log(options);
    if (!options.chainId || typeof options.chainId === "boolean")
      throw new Error("chainId required when simulating payloads");
    const payloadsControllers =
      typeof options.payloadsController === "string"
        ? [options.payloadsController]
        : findPayloadsControllers(Number(options.chainId))!;
    for (const controller of payloadsControllers) {
      if (typeof options.ids === "string" && options.ids.match(/,/g))
        options.ids = options.ids.split(",");
      return simulatePayload(
        Number(options.chainId),
        controller,
        typeof options.ids === "object" &&
          options.ids.length > 0 &&
          options.ids.map((id: string) => Number(id)),
      );
    }
  })
  .showHelpAfterError()
  .parse();
