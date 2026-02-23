import { Abi, Address, Client, decodeEventLog, Hex } from "viem";
import { addAssetSymbol, findAsset, prettifyNumber } from "./utils";

type LogType = {
  topics: [Hex];
  data: Hex;
  address: Address;
  eventName?: string;
  args?: any;
};

interface ParseLogsArgs {
  logs: LogType[];
  eventDb: Abi;
}

export function parseLogs({ logs, eventDb }: ParseLogsArgs) {
  const parsedLogs = logs.map((log) => {
    try {
      const decoded = decodeEventLog({
        data: log.data,
        topics: log.topics,
        abi: eventDb,
      });
      return { ...log, ...decoded };
    } catch (e) {
      return log;
    }
  });

  return parsedLogs;
}

const knownAssetFields = ["asset", "token", "reserve", "fromToken", "toToken"];
/**
 * Opinionated log formatter, based on known events
 * @param client
 * @param logs
 * @returns
 */
export function enhanceLogs(client: Client, logs: LogType[]) {
  return Promise.all(
    logs.map(async (log) => {
      // only for encoded events
      if (log.args && log.eventName) {
        const argKeys = Object.keys(log.args);
        if (
          ["Transfer", "Approval", "Burn", "Mint", "BalanceTransfer"].includes(
            log.eventName,
          )
        ) {
          const asset = await findAsset(client, log.address);
          for (const key of argKeys) {
            if (["value", "amount", "wad"].includes(key)) {
              log.args[key] = prettifyNumber({
                value: log.args[key],
                decimals: asset.decimals,
                showDecimals: true,
              });
            }
          }
        }

        if (["Mint", "ReserveDataUpdated", "Burn"].includes(log.eventName)) {
          // fields formatted by the asset decimal
          for (const key of argKeys) {
            if (
              ["liquidityIndex", "variableBorrowIndex", "index"].includes(key)
            ) {
              log.args[key] = prettifyNumber({
                value: log.args[key],
                decimals: 27,
                showDecimals: true,
              });
            }
          }
        }

        if (
          ["Withdraw", "Supply", "Deposit"].includes(log.eventName) &&
          log.args.reserve &&
          log.args.amount
        ) {
          const asset = await findAsset(client, log.args.reserve);
          log.args.amount = prettifyNumber({
            showDecimals: true,
            value: log.args.amount,
            decimals: asset.decimals,
          });
        }

        if (
          ["ReserveFactorChanged"].includes(log.eventName) &&
          log.args.factor
        ) {
          log.args.factor = prettifyNumber({
            suffix: "%",
            value: log.args.factor,
            decimals: 2,
          });
        }

        // Finally append symbol to known asset keys
        for (const key of argKeys) {
          if (knownAssetFields.includes(key)) {
            const asset = await findAsset(client, log.args[key]);
            log.args[key] = addAssetSymbol(asset, log.args[key]);
          }
        }
        return log;
      }
      return log;
    }),
  );
}
