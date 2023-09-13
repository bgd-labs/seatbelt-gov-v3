<p align="center"><img width="200" src="./seatbelt_logo.png" alt="Aave logo"></a></p>

# Aave seatbelt for Aave Governance V3

This repository contains tools that make on-chain governance safer,
including automated scripts that apply checks to live proposals to allow
for better informed voting.

[![Governance Checks](https://github.com/bgd-labs/seatbelt-gov-v3/actions/workflows/cron.yaml/badge.svg)](https://github.com/bgd-labs/seatbelt-gov-v3/actions/workflows/cron.yaml)

## How it works

Aave Seatbelt is a tool for executing and interpreting governance simulations: it forks Ethereum mainnet (where the Aave governance lives), it simulates the execution of a proposal, and finally generates a report containing human-readable information on what effects a proposal will have. If the proposal targets different networks it will also fork these networks & simulate the changes specified in the proposal.

The generated report will contain:

- The ipfs content.
- All the state changes were caused by the proposal execution.
- Events triggered.
- Checks for SELFDESTRUCT calls.
- A list of all touched contracts and their verification status.

Some of those checks are initially generic, but in addition, we also added extra “interpretations” for particularities of the Aave ecosystem. For example, when an Aave Pool contract is affected, we can automate a deeper interpretation of the effect, making it more human-readable.

![diagram](seatbelt_diagram.jpg)

## Setup

```
cp .env.example .env
yarn
```

## Running locally

```
# run simulation for all proposals
yarn start
# run simulation for specific proposals
yarn start 1 2 3 would run proposals 1,2 & 3
```
