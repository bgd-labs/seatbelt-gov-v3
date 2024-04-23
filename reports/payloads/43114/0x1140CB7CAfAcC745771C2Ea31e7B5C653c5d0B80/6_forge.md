## Reserve changes

### Reserves altered

#### MAI ([0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b](https://snowscan.xyz/address/0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | false | true |
| ltv | 75 % | 0 % |
| liquidationThreshold | 80 % | 1 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xF9336Bb69654fdd665AaC6618309a8cba078D8fE](https://snowscan.xyz/address/0xF9336Bb69654fdd665AaC6618309a8cba078D8fE) | [0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326](https://snowscan.xyz/address/0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326) |
| optimalUsageRatio | 80 % | 45 % |
| variableRateSlope2 | 75 % | 300 % |
| maxExcessUsageRatio | 20 % | 55 % |
| interestRate | ![before](/.assets/b0858fe1a817e8bff6a199e62cfa0dd1b0660212.svg) | ![after](/.assets/ad65621e946b4e1b18cdb7b25c9fa0ae9d9fbb18.svg) |

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
    "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b": {
      "address": {
        "from": "0xF9336Bb69654fdd665AaC6618309a8cba078D8fE",
        "to": "0x5f58C25D17C09c9e1892F45DE6dA45ed973A5326"
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