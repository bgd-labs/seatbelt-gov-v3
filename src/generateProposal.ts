import { Governance } from "@bgd-labs/aave-cli";
import { getProposalMetadata } from "./ipfs";

export async function generateProposal(
  proposalId: number,
  proposal: Awaited<ReturnType<Governance["getProposal"]>>,
  payloadsSection: string[]
) {
  const ipfsMeta = await getProposalMetadata(
    proposal.proposal.ipfsHash,
    process.env.IPFS_GATEWAY
  );
  const template = `## Proposal ${proposalId}

- State: ${proposal.proposal.state}
- Access Level: ${proposal.proposal.accessLevel}

### Ipfs

<details>
  <summary>Proposal text</summary>

${ipfsMeta.description}
</details>
    
### Payloads

${payloadsSection.join("\n")}`;

  return template;
}
