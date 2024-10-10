## Reserve changes

### Reserve altered

#### USDC ([0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4](https://era.zksync.network//address/0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1](https://era.zksync.network//address/0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1) | [0x57815Ab06D846d7dECd326Ee541CD06144FED237](https://era.zksync.network//address/0x57815Ab06D846d7dECd326Ee541CD06144FED237) |
| interestRate | ![before](/.assets/88c626952e0ed2d7f5142e87ba36164243861403.svg) | ![after](/.assets/869b664a7bf6b7f8cc79d769725d2bd6ff308633.svg) |

#### USDT ([0x493257fD37EDB34451f62EDf8D2a0C418852bA4C](https://era.zksync.network//address/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1](https://era.zksync.network//address/0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1) | [0x57815Ab06D846d7dECd326Ee541CD06144FED237](https://era.zksync.network//address/0x57815Ab06D846d7dECd326Ee541CD06144FED237) |
| interestRate | ![before](/.assets/88c626952e0ed2d7f5142e87ba36164243861403.svg) | ![after](/.assets/869b664a7bf6b7f8cc79d769725d2bd6ff308633.svg) |

#### ZK ([0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E](https://era.zksync.network//address/0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1](https://era.zksync.network//address/0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1) | [0x57815Ab06D846d7dECd326Ee541CD06144FED237](https://era.zksync.network//address/0x57815Ab06D846d7dECd326Ee541CD06144FED237) |
| interestRate | ![before](/.assets/72b4b6108cb7431d5e158ca454ff11aabd8095ea.svg) | ![after](/.assets/ab36d130736202f9009fd9a952b43cb2fe063234.svg) |

#### WETH ([0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91](https://era.zksync.network//address/0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1](https://era.zksync.network//address/0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1) | [0x57815Ab06D846d7dECd326Ee541CD06144FED237](https://era.zksync.network//address/0x57815Ab06D846d7dECd326Ee541CD06144FED237) |
| interestRate | ![before](/.assets/860131ef424633306b723f0d2abcc4489c30cf94.svg) | ![after](/.assets/03771965e331e8468db38913049d9aaf64167253.svg) |

#### wstETH ([0x703b52F2b28fEbcB60E1372858AF5b18849FE867](https://era.zksync.network//address/0x703b52F2b28fEbcB60E1372858AF5b18849FE867))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1](https://era.zksync.network//address/0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1) | [0x57815Ab06D846d7dECd326Ee541CD06144FED237](https://era.zksync.network//address/0x57815Ab06D846d7dECd326Ee541CD06144FED237) |
| interestRate | ![before](/.assets/716252e0fc7d5404739676642987f0f393117b50.svg) | ![after](/.assets/60bc0a442d76c445e251a649a06e9885f9eb9111.svg) |

## Emodes changes

### EMode: ETH correlated(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.borrowableBitmap | - | WETH, wstETH |
| eMode.collateralBitmap | - | WETH, wstETH |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.priceSource | 0x0000000000000000000000000000000000000000 | - |


## Raw diff

```json
{
  "eModes": {
    "1": {
      "priceSource": {
        "from": "0x0000000000000000000000000000000000000000",
        "to": null
      },
      "borrowableBitmap": {
        "from": null,
        "to": "12"
      },
      "collateralBitmap": {
        "from": null,
        "to": "12"
      }
    }
  },
  "poolConfig": {
    "poolConfiguratorImpl": {
      "from": "0x908bCea460F5011046782A4280569c4eAcE1082E",
      "to": "0xBc4c49630350F67D7Ec88785E5DF9A57c78a1b7d"
    },
    "poolImpl": {
      "from": "0xEe8EBB0704F5954Ab281166f35309087E1b81903",
      "to": "0x3Db69F17e682a8E6f029a90c8DD04A4689B988b9"
    },
    "protocolDataProvider": {
      "from": "0x48B96565291d1B23a014bb9f68E07F4B2bb3Cd6D",
      "to": "0x5F2A704cE47B373c908fE8A29514249469b52b99"
    }
  },
  "reserves": {
    "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4": {
      "interestRateStrategy": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C": {
      "interestRateStrategy": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E": {
      "interestRateStrategy": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91": {
      "interestRateStrategy": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x703b52F2b28fEbcB60E1372858AF5b18849FE867": {
      "interestRateStrategy": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    }
  },
  "strategies": {
    "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4": {
      "address": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C": {
      "address": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x5A7d6b2F92C77FAD6CCaBd7EE0624E64907Eaf3E": {
      "address": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91": {
      "address": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    },
    "0x703b52F2b28fEbcB60E1372858AF5b18849FE867": {
      "address": {
        "from": "0x73E2D854e809504b8e6d4e29ddae4ac5b40d5be1",
        "to": "0x57815Ab06D846d7dECd326Ee541CD06144FED237"
      }
    }
  }
}
```