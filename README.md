# Aave seatbelt

This repository contains tools that make on-chain governance safer,
including automated scripts that apply checks to live proposals to allow
for better informed voting.

## How it works

Aave Seatbelt is a tool for executing and interpreting governance simulations: it forks Ethereum mainnet (where the Aave governance lives), it simulates the execution of a proposal, and finally generates a report containing human-readable information on what effects a proposal will have.

The generated report will contain:

- All the state changes were caused by the proposal execution.
- Events triggered.
- Compilation report of all contracts affected, to check for potential warnings.

Some of those checks are initially generic, but in addition, we also added extra “interpretations” for particularities of the Aave ecosystem.
For example, when an Aave Pool contract is affected, we can automate a deeper interpretation of the effect, making it more human-readable.

## Local setup

```
bun install
```

## Run locally

```
bun simulate
```
