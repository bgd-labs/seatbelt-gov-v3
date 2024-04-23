## Reserve changes

### Reserves altered

#### MAI ([0xdFA46478F9e5EA86d57387849598dbFB2e964b02](https://optimistic.etherscan.io/address/0xdFA46478F9e5EA86d57387849598dbFB2e964b02))

| description | value before | value after |
| --- | --- | --- |
| liquidationThreshold | 80 % | 65 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xf895e42505E48E3aa83fa41994CBd8d1D006C42B](https://optimistic.etherscan.io/address/0xf895e42505E48E3aa83fa41994CBd8d1D006C42B) | [0x049E42fe40368384d04bC10f8494Ea6FD164442a](https://optimistic.etherscan.io/address/0x049E42fe40368384d04bC10f8494Ea6FD164442a) |
| optimalUsageRatio | 80 % | 45 % |
| variableRateSlope2 | 75 % | 300 % |
| maxExcessUsageRatio | 20 % | 55 % |
| interestRate | ![before](/.assets/b6581f5961d45043dac91ef2eccf843b37abe2df.svg) | ![after](/.assets/e6a628a0b2178eb029c23d5a886e25abe0fe030d.svg) |

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
    "0xdFA46478F9e5EA86d57387849598dbFB2e964b02": {
      "address": {
        "from": "0xf895e42505E48E3aa83fa41994CBd8d1D006C42B",
        "to": "0x049E42fe40368384d04bC10f8494Ea6FD164442a"
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": "550000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "750000000000000000000000000",
        "to": "3000000000000000000000000000"
      }
    }
  }
}
```