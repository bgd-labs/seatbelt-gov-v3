import {Address, getContract} from 'viem';
import {getClient} from '@bgd-labs/rpc-env';
import {IPayloadsControllerCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {isPayloadFinal, isProposalFinal} from '@bgd-labs/aave-v3-governance-cache';
import {getNonFinalizedPayloads} from '@bgd-labs/toolbox';
import tree from './tree.json';

export type PayloadExecutionStrategy = {
  executeBefore: number[];
  alerts: string[];
  proposals?: number[];
};

export async function generatePayloadsStrategy(
  chainId: number,
  payloadsController: Address,
  payloadId: number
): Promise<PayloadExecutionStrategy> {
  const alerts: string[] = [];
  const client = getClient(chainId, {});
  const controllerContract = getContract({
    abi: IPayloadsControllerCore_ABI,
    client,
    address: payloadsController,
  });
  // if it's already final, we just simulate the existing transaction
  const payload = await controllerContract.read.getPayloadById([payloadId]);
  if (isPayloadFinal(payload.state)) {
    return {executeBefore: [], alerts};
  }

  const node = tree.payloads[chainId]?.[payloadsController]?.[payloadId];
  if (node) {
    // there is at least one proposal which tries executing the payload
    // in this case we simulate the proposal based on the assumption that:
    // - all payload referenced on proposals with an id < payload.proposalId are already executed
    const allAttachedProposals = Object.keys(node) as unknown as number[];
    const activeProposalIds = allAttachedProposals.filter(
      (id) => !isProposalFinal(tree.governance[id as unknown as number].state)
    );
    if (activeProposalIds.length > 1) {
      alerts.push(
        `There are multiple running proposals that try executing the same payload. Proposals: ${activeProposalIds.join(
          ', '
        )}`
      );
    }
    if (!activeProposalIds.length) {
      alerts.push(
        `The payload was included in inactive proposals. Proposals: ${allAttachedProposals.join(
          ', '
        )}`
      );
      return {executeBefore: [], alerts};
    }
    const nonFinalizedPayloads: number[] = [];
    for (let i = 0; i < activeProposalIds[0]; i++) {
      if (!isProposalFinal(tree.governance[i].state))
        nonFinalizedPayloads.push(
          ...tree.governance[i].payloads.filter((p) => p.chain === chainId).map((p) => p.payloadId)
        );
    }
    return {executeBefore: nonFinalizedPayloads, alerts, proposals: allAttachedProposals};
  } else {
    // This state will only be reached before proposal creation
    // in this case we simulate the proposal based on the assumption that all currently existing payloads that are attached on a proposal are already executed
    const nonFilizedPayloads = await getNonFinalizedPayloads(client, payloadsController);
    return {
      executeBefore: nonFilizedPayloads.filter(
        (pl) => pl != payloadId && tree.payloads[chainId]?.[payloadsController]?.[pl]
      ),
      alerts,
    };
  }
}
