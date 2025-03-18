import {writeFileSync} from 'node:fs';
import {IGovernanceCore_ABI} from '@bgd-labs/aave-address-book/abis';
import {ChainId, getRPCUrl} from '@bgd-labs/rpc-env';
import {Address, createPublicClient, getContract, http} from 'viem';
import {mainnet} from 'viem/chains';
import {GovernanceV3Ethereum} from '../lib/aave-helpers/lib/aave-address-book/src/ts/AaveAddressBook';
import {ProposalState} from '@bgd-labs/toolbox';
import tree from './tree.json';
import path from 'node:path';
import {isProposalFinal} from '@bgd-labs/aave-v3-governance-cache';

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(
    getRPCUrl(ChainId.mainnet, {
      alchemyKey: process.env.ALCHEMY_API_KEY,
      quicknodeToken: process.env.QUICKNODE_TOKEN,
      quicknodeEndpointName: process.env.QUICKNODE_ENDPOINT_NAME,
    })
  ),
});

const governanceContract = getContract({
  client: mainnetClient,
  abi: IGovernanceCore_ABI,
  address: GovernanceV3Ethereum.GOVERNANCE,
});

type ProposalId = number;
type PayloadId = number;
type PayloadsController = Address;

interface TreeStructure {
  governance: Record<
    ProposalId,
    {
      state: ProposalState;
      payloads: {chain: number; payloadsController: PayloadsController; payloadId: number}[];
    }
  >;
  payloads: Record<
    number,
    Record<PayloadsController, Record<PayloadId, Record<ProposalId, boolean>>>
  >;
}

export async function syncTree() {
  const treeCopy = tree as TreeStructure;
  const count = await governanceContract.read.getProposalsCount();
  for (let i = 0; i < count; i++) {
    if (!treeCopy.governance[i] || !isProposalFinal(treeCopy.governance[i].state)) {
      const proposal = await governanceContract.read.getProposal([BigInt(i)]);
      treeCopy.governance[i] = {
        state: proposal.state,
        payloads: proposal.payloads.map((pl) => ({
          chain: Number(pl.chain),
          payloadId: pl.payloadId,
          payloadsController: pl.payloadsController,
        })),
      };
      proposal.payloads.map((val) => {
        if (!treeCopy.payloads[Number(val.chain)])
          treeCopy.payloads[Number(val.chain)] = {[val.payloadsController]: {[val.payloadId]: {}}};
        if (!treeCopy.payloads[Number(val.chain)][val.payloadsController])
          treeCopy.payloads[Number(val.chain)][val.payloadsController] = {};
        if (!treeCopy.payloads[Number(val.chain)][val.payloadsController][val.payloadId])
          treeCopy.payloads[Number(val.chain)][val.payloadsController][val.payloadId] = {};
        treeCopy.payloads[Number(val.chain)][val.payloadsController][val.payloadId][i] = true;
      });
    }
  }
  writeFileSync(path.join(process.cwd(), 'src/tree.json'), JSON.stringify(treeCopy, null, 2));
  return treeCopy;
}
