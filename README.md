# Aave Seatbelt

A comprehensive toolset for making Aave on-chain governance safer through automated proposal verification and simulation.

## Overview

Aave Seatbelt executes and interprets governance proposal simulations by forking networks, simulating proposal execution, and generating detailed human-readable reports. This allows voters and developers to understand exactly what effects a proposal will have before it's executed on mainnet.

## Features

- **State Change Analysis**: Track all state changes caused by proposal execution
- **Event Monitoring**: Capture and display all events triggered during execution
- **Contract Compilation Reports**: Identify potential warnings in affected contracts
- **Aave-Specific Interpretations**: Deep analysis of Aave Pool contracts and ecosystem changes
- **Multi-Network Support**: Simulate proposals across all Aave-supported networks
- **Dual Simulation Engines**: Tenderly-based simulation with Foundry fallback & e2e testing

## Prerequisites

- [Bun](https://bun.sh) runtime (see `.nvmrc` for version)
- [Foundry](https://getfoundry.sh) for local simulations
- RPC endpoints for target networks
- Tenderly account (for Tenderly-based simulations)

## Installation

```bash
bun install
```

## Configuration

Create a `.env` file in the project root (see `.env.example` for reference):

### Required Environment Variables

```bash
# RPC Endpoints - At minimum, configure the networks you want to simulate
RPC_MAINNET=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
RPC_ARBITRUM=https://arb-mainnet.g.alchemy.com/v2/YOUR_KEY
RPC_POLYGON=https://polygon-mainnet.g.alchemy.com/v2/YOUR_KEY
RPC_OPTIMISM=https://opt-mainnet.g.alchemy.com/v2/YOUR_KEY
RPC_BASE=https://base-mainnet.g.alchemy.com/v2/YOUR_KEY
RPC_GNOSIS=https://rpc.gnosischain.com

# Tenderly Configuration (for Tenderly simulations)
TENDERLY_ACCESS_TOKEN=your_tenderly_access_token
TENDERLY_PROJECT_SLUG=your_project_slug
TENDERLY_ACCOUNT=your_account_name
```

### Optional Environment Variables

```bash
# Provider Configuration (alternative to hardcoded RPC URLs in tenderly mode)
ALCHEMY_API_KEY=your_alchemy_api_key
QUICKNODE_TOKEN=your_quicknode_token
QUICKNODE_ENDPOINT_NAME=your_endpoint_name
HYPER_RPC_API_TOKEN=your_hyper_rpc_token

# Indexer API (speeds up transaction lookups)
# If kept empty, the system will use eth_getLogs to lookup transactions or omit transaction lookup depending ont he case
INDEXER_API=

# Etherscan API (for contract verification in reports)
ETHERSCAN_API_KEY=your_etherscan_api_key
# An optional explorer proxy can be supplied which will redirect all requests to any explorer to the specified url instead
# This can be useful for private development(using a private explorer) and for caching between runs
EXPLORER_PROXY=

# Debug and Development Options
VERBOSE=true                # Enable verbose logging
# Always use Foundry instead of Tenderly (not only as a fallback)
RUN_FORGE_ALWAYS=true
# For decoding events we optionally rely on a local collection of known events
# When the flag is set true, any run will add missing events to the collection
UPDATE_EVENT_DB=true       # Update event database after simulations
```

### Additional RPC Endpoints

The following RPC endpoints can also be configured for extended network support:

```bash
RPC_POLYGON_AMOY=
RPC_AVALANCHE=
RPC_AVALANCHE_FUJI=
RPC_ARBITRUM_SEPOLIA=
RPC_FANTOM=
RPC_FANTOM_TESTNET=
RPC_OPTIMISM_SEPOLIA=
RPC_HARMONY=
RPC_SEPOLIA=
RPC_SCROLL=
RPC_SCROLL_SEPOLIA=
RPC_METIS=
RPC_BASE_SEPOLIA=
RPC_BNB=
RPC_ZKEVM=
RPC_CELO=
RPC_ZKSYNC=
RPC_LINEA=
RPC_SONIC=
RPC_PLASMA=
```

## Usage

### Basic Usage

Simulate all pending payloads across all networks:

```bash
bun simulate
```

### Simulate Specific Payload(s)

```bash
# Simulate a single payload
bun simulate -c 1 -i 42

# Simulate multiple payloads
bun simulate -c 1 -i 42,43,44
bun simulate -c 1 -i 42 43 44

# Simulate on a specific payloads controller
bun simulate -c 1 --payloadsController 0x1234...5678 -i 42
```

### Available Commands

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `bun simulate`        | Refresh cache and simulate payloads      |
| `bun run ci:tree`     | Refresh the governance tree cache only   |
| `bun run ci:simulate` | Run simulations without refreshing cache |

### Command Options

- `-c, --chainId <chainId>` - Chain ID of the network to simulate on (required)
- `-i, --ids <ids...>` - Payload ID(s) to simulate (comma or space separated)
- `--payloadsController <address>` - Specific payloads controller address (optional)

## Output

Simulation reports are generated in the `reports/payloads/` directory, organized by:

```
reports/
└── payloads/
    └── {chainId}/
        └── {payloadsControllerAddress}/
            └── {payloadId}.md
```

Each report includes:

- Payload metadata and current state
- Complete state changes with before/after values
- All emitted events during execution
- Contract compilation warnings (if any)
- Aave-specific interpretations and risk assessments

## How It Works

1. **Cache Refresh**: Fetches the latest governance tree and payload information
2. **Payload Discovery**: Identifies non-finalized payloads from the governance system
3. **Simulation Strategy**: Generates execution strategy including pre-execution steps
4. **Tenderly Simulation**: Attempts simulation on Tenderly's platform (faster, more detailed)
5. **Foundry Fallback**: If Tenderly fails or is unavailable, falls back to local Foundry simulation
6. **Report Generation**: Produces markdown reports with detailed analysis
7. **State Caching**: Stores simulation results to avoid re-processing

## CI/CD Flow

- [cron.yaml](.github/workflows/cron.yaml): Every 2 hours, the system automatically checks for new payloads and runs simulations when necessary.
- [trigger.yaml](.github/workflows/trigger.yaml): Allows manual triggering of simulations via GitHub Actions. Currently, [BGD Labs](https://bgdlabs.com) is operating a monitoring service that automatically triggers simulations for new payloads, but this integration can be replaced by any other indexing service.

## License

MIT

## Maintainer

[BGD Labs](https://bgdlabs.com)
