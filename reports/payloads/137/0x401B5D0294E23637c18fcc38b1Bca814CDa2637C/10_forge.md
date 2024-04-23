## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xC82dF96432346cFb632473eB619Db3B8AC280234](https://polygonscan.com/address/0xC82dF96432346cFb632473eB619Db3B8AC280234) | [0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3](https://polygonscan.com/address/0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3) |
| variableRateSlope1 | 3.5 % | 5 % |
| baseStableBorrowRate | 4.5 % | 6 % |
| interestRate | ![before](/.assets/5551c85b9db0d63515c559894f39c288eef49fcc.svg) | ![after](/.assets/1ec3d2568dae6d724981c1d411bbea83fca6b9f8.svg) |

#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xA9F3C3caE095527061e6d270DBE163693e6fda9D](https://polygonscan.com/address/0xA9F3C3caE095527061e6d270DBE163693e6fda9D) | [0xdef8F50155A6cf21181E29E400E8CffAE2d50968](https://polygonscan.com/address/0xdef8F50155A6cf21181E29E400E8CffAE2d50968) |
| optimalUsageRatio | 80 % | 90 % |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8a10dd458958b063af4177af8f709f1971c58974.svg) | ![after](/.assets/9e095249e48bd804aaedf478236657a01de602ab.svg) |

#### miMATIC ([0xa3Fa99A148fA48D14Ed51d610c367C61876997F1](https://polygonscan.com/address/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xA9F3C3caE095527061e6d270DBE163693e6fda9D](https://polygonscan.com/address/0xA9F3C3caE095527061e6d270DBE163693e6fda9D) | [0xb02381b1d27aA9845e5012083CA288c1818884f0](https://polygonscan.com/address/0xb02381b1d27aA9845e5012083CA288c1818884f0) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/8a10dd458958b063af4177af8f709f1971c58974.svg) | ![after](/.assets/ae7b62b35d6b7a5db699351ce3d56eee5419d3ac.svg) |

#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xA9F3C3caE095527061e6d270DBE163693e6fda9D](https://polygonscan.com/address/0xA9F3C3caE095527061e6d270DBE163693e6fda9D) | [0xdef8F50155A6cf21181E29E400E8CffAE2d50968](https://polygonscan.com/address/0xdef8F50155A6cf21181E29E400E8CffAE2d50968) |
| optimalUsageRatio | 80 % | 90 % |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/8a10dd458958b063af4177af8f709f1971c58974.svg) | ![after](/.assets/9e095249e48bd804aaedf478236657a01de602ab.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "interestRateStrategy": {
        "from": "0xC82dF96432346cFb632473eB619Db3B8AC280234",
        "to": "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "interestRateStrategy": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xdef8F50155A6cf21181E29E400E8CffAE2d50968"
      }
    },
    "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1": {
      "interestRateStrategy": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xb02381b1d27aA9845e5012083CA288c1818884f0"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "interestRateStrategy": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xdef8F50155A6cf21181E29E400E8CffAE2d50968"
      }
    }
  },
  "strategies": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "address": {
        "from": "0xC82dF96432346cFb632473eB619Db3B8AC280234",
        "to": "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3"
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
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "address": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xdef8F50155A6cf21181E29E400E8CffAE2d50968"
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
    "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1": {
      "address": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xb02381b1d27aA9845e5012083CA288c1818884f0"
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
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "address": {
        "from": "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
        "to": "0xdef8F50155A6cf21181E29E400E8CffAE2d50968"
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