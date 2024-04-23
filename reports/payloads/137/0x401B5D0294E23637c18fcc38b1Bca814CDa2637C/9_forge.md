## Reserve changes

### Reserves altered

#### miMATIC ([0xa3Fa99A148fA48D14Ed51d610c367C61876997F1](https://polygonscan.com/address/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1))

| description | value before | value after |
| --- | --- | --- |
| liquidationThreshold | 80 % | 1 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xb02381b1d27aA9845e5012083CA288c1818884f0](https://polygonscan.com/address/0xb02381b1d27aA9845e5012083CA288c1818884f0) | [0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276](https://polygonscan.com/address/0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276) |
| optimalUsageRatio | 80 % | 45 % |
| variableRateSlope2 | 75 % | 300 % |
| maxExcessUsageRatio | 20 % | 55 % |
| interestRate | ![before](/.assets/ae7b62b35d6b7a5db699351ce3d56eee5419d3ac.svg) | ![after](/.assets/4e7bbf631220ce3b40f53423477c6be3a8b8dfd2.svg) |

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
    "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1": {
      "address": {
        "from": "0xb02381b1d27aA9845e5012083CA288c1818884f0",
        "to": "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276"
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