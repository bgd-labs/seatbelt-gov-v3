## Reserve changes

### Reserves altered

#### MAI ([0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b](https://snowtrace.io/address/0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | false | true |
| ltv | 75 % | 0 % |
| liquidationThreshold | 80 % | 1 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xF9336Bb69654fdd665AaC6618309a8cba078D8fE](https://snowtrace.io/address/0xF9336Bb69654fdd665AaC6618309a8cba078D8fE) | [0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326](https://snowtrace.io/address/0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326) |
| optimalUsageRatio | 80 % | 45 % |
| maxExcessUsageRatio | 20 % | 55 % |
| variableRateSlope2 | 75 % | 300 % |
| interestRate | ![before](/.assets/9ed0ac5bda0d6aea5b627325dd757aab5a706122.svg) | ![after](/.assets/6d0466e349dc1a41744012a7a6812bbcfcbfdb5e.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b": {
      "interestRateStrategy": {
        "from": "0xF9336Bb69654fdd665AaC6618309a8cba078D8fE",
        "to": "0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326"
      },
      "isFrozen": {
        "from": false,
        "to": true
      },
      "liquidationThreshold": {
        "from": 8000,
        "to": 100
      },
      "ltv": {
        "from": 7500,
        "to": 0
      },
      "reserveFactor": {
        "from": 2000,
        "to": 9500
      }
    }
  },
  "strategies": {
    "0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326": {
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