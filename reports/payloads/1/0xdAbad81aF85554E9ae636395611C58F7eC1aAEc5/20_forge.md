## Reserve changes

### Reserve altered

#### LUSD ([0x5f98805A4E8be255a32880FDeC7F6728C6568bA0](https://etherscan.io/address/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3](https://etherscan.io/address/0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3) | [0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477](https://etherscan.io/address/0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/5e840cd224a9912ce541c969356e2ca8b3cbb992.svg) | ![after](/.assets/df5f8d4e981d7df1fa5125ff64ae540b4c74d29b.svg) |

#### FRAX ([0x853d955aCEf822Db058eb8505911ED77F175b99e](https://etherscan.io/address/0x853d955aCEf822Db058eb8505911ED77F175b99e))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2](https://etherscan.io/address/0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2) | [0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3](https://etherscan.io/address/0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3) |
| optimalUsageRatio | 80 % | 90 % |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/9e5f3834f274c045890d6390de02d218abf19808.svg) | ![after](/.assets/d28259358b2ac4bc13298220f6ea2075acfdad14.svg) |

#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x8F183Ee74C790CB558232a141099b316D6C8Ba6E](https://etherscan.io/address/0x8F183Ee74C790CB558232a141099b316D6C8Ba6E) | [0x53b13a6D43F647D788411Abfd28D229C274AfBF9](https://etherscan.io/address/0x53b13a6D43F647D788411Abfd28D229C274AfBF9) |
| variableRateSlope1 | 3.5 % | 5 % |
| baseStableBorrowRate | 4.5 % | 6 % |
| interestRate | ![before](/.assets/8ed1b39cf5fd16da7ffb93865c32ead90233e0bf.svg) | ![after](/.assets/f026f669632b38618fe2f5e520b460247c827ccb.svg) |

#### USDT ([0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xC82dF96432346cFb632473eB619Db3B8AC280234](https://etherscan.io/address/0xC82dF96432346cFb632473eB619Db3B8AC280234) | [0x588b62C84533232E3A881e096E5D639Fa754F093](https://etherscan.io/address/0x588b62C84533232E3A881e096E5D639Fa754F093) |
| optimalUsageRatio | 80 % | 90 % |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/48d6a6981f68acff3e94a7712d0d610a39f820c9.svg) | ![after](/.assets/de3c0e0ab4fbbbdee53fcc7772fc7d8c66a10e5c.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0": {
      "interestRateStrategy": {
        "from": "0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3",
        "to": "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477"
      }
    },
    "0x853d955aCEf822Db058eb8505911ED77F175b99e": {
      "interestRateStrategy": {
        "from": "0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2",
        "to": "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "interestRateStrategy": {
        "from": "0x8F183Ee74C790CB558232a141099b316D6C8Ba6E",
        "to": "0x53b13a6D43F647D788411Abfd28D229C274AfBF9"
      }
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "interestRateStrategy": {
        "from": "0xC82dF96432346cFb632473eB619Db3B8AC280234",
        "to": "0x588b62C84533232E3A881e096E5D639Fa754F093"
      }
    }
  },
  "strategies": {
    "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0": {
      "address": {
        "from": "0x349684Da30f8c9Affeaf21AfAB3a1Ad51f5d95A3",
        "to": "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477"
      },
      "baseStableBorrowRate": {
        "from": "50000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "40000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0x853d955aCEf822Db058eb8505911ED77F175b99e": {
      "address": {
        "from": "0x694d4cFdaeE639239df949b6E24Ff8576A00d1f2",
        "to": "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3"
      },
      "baseStableBorrowRate": {
        "from": "50000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "900000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "40000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "address": {
        "from": "0x8F183Ee74C790CB558232a141099b316D6C8Ba6E",
        "to": "0x53b13a6D43F647D788411Abfd28D229C274AfBF9"
      },
      "baseStableBorrowRate": {
        "from": "45000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "35000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "address": {
        "from": "0xC82dF96432346cFb632473eB619Db3B8AC280234",
        "to": "0x588b62C84533232E3A881e096E5D639Fa754F093"
      },
      "baseStableBorrowRate": {
        "from": "50000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "900000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "40000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    }
  }
}
```