## Reserve changes

### Reserves altered

#### miMATIC ([0xa3Fa99A148fA48D14Ed51d610c367C61876997F1](https://polygonscan.com/address/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1))

| description | value before | value after |
| --- | --- | --- |
| liquidationThreshold | 80 % | 1 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xb02381b1d27aA9845e5012083CA288c1818884f0](https://polygonscan.com/address/0xb02381b1d27aA9845e5012083CA288c1818884f0) | [0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276](https://polygonscan.com/address/0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276) |
| optimalUsageRatio | 80 % | 45 % |
| maxExcessUsageRatio | 20 % | 55 % |
| variableRateSlope2 | 75 % | 300 % |
| interestRate | ![before](/.assets/9ed0ac5bda0d6aea5b627325dd757aab5a706122.svg) | ![after](/.assets/6d0466e349dc1a41744012a7a6812bbcfcbfdb5e.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1": {
      "interestRateStrategy": {
        "from": "0xb02381b1d27aA9845e5012083CA288c1818884f0",
        "to": "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276"
      },
      "liquidationThreshold": {
        "from": 8000,
        "to": 100
      },
      "reserveFactor": {
        "from": 2000,
        "to": 9500
      }
    }
  },
  "strategies": {
    "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "550000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "stableRateSlope1": "5000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```