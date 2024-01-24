## Reserve changes

### Reserves altered

#### MAI ([0xdFA46478F9e5EA86d57387849598dbFB2e964b02](https://optimistic.etherscan.io/address/0xdFA46478F9e5EA86d57387849598dbFB2e964b02))

| description | value before | value after |
| --- | --- | --- |
| liquidationThreshold | 80 % | 65 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xf895e42505E48E3aa83fa41994CBd8d1D006C42B](https://optimistic.etherscan.io/address/0xf895e42505E48E3aa83fa41994CBd8d1D006C42B) | [0x049E42fe40368384d04bC10f8494Ea6FD164442a](https://optimistic.etherscan.io/address/0x049E42fe40368384d04bC10f8494Ea6FD164442a) |
| optimalUsageRatio | 80 % | 45 % |
| maxExcessUsageRatio | 20 % | 55 % |
| variableRateSlope2 | 75 % | 300 % |
| interestRate | ![before](/.assets/df7fd666881ec31eda779728d617bf3efe6be6d8.svg) | ![after](/.assets/6f34858c4ab5446d26b260c353dc36aa73d94358.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xdFA46478F9e5EA86d57387849598dbFB2e964b02": {
      "interestRateStrategy": {
        "from": "0xf895e42505E48E3aa83fa41994CBd8d1D006C42B",
        "to": "0x049E42fe40368384d04bC10f8494Ea6FD164442a"
      },
      "liquidationThreshold": {
        "from": 8000,
        "to": 6500
      },
      "reserveFactor": {
        "from": 2000,
        "to": 9500
      }
    }
  },
  "strategies": {
    "0x049E42fe40368384d04bC10f8494Ea6FD164442a": {
      "from": null,
      "to": {
        "baseStableBorrowRate": "60000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "550000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "stableRateSlope1": "40000000000000000000000000",
        "stableRateSlope2": "750000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```