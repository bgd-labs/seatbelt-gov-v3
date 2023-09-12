import { Governance } from "@bgd-labs/aave-cli";
import { getProposalMetadata } from "./ipfs";
import { PublicClient } from "viem";

export async function generateProposal(
  proposalId: number,
  proposal: Awaited<ReturnType<Governance["getProposal"]>>,
  payloadsSection: string[]
) {
  const ipfsMeta = await getProposalMetadata(
    proposal.proposal.ipfsHash,
    process.env.IPFS_GATEWAY
  );
  const template = `### Ipfs

<details>
  <summary>Proposal text</summary>

${ipfsMeta.description}
</details>
    
### Payloads

${payloadsSection.join("\n")}`;

  return template;
}
