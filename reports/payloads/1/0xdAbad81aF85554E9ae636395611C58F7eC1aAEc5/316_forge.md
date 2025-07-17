## Reserve changes

### Reserves altered

#### SNX ([0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F](https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F))

| description | value before | value after |
| --- | --- | --- |
| debtCeiling | 4,000,000 $ [400000000] | 1 $ [100] |
| ltv | 49 % [4900] | 0 % [0] |
| reserveFactor | 35 % [3500] | 95 % [9500] |
| maxVariableBorrowRate | 168 % | 171 % |
| baseVariableBorrowRate | 3 % | 6 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=1680000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=60000000000000000000000000&maxVariableBorrowRate=1710000000000000000000000000) |

## Raw diff

```json
{
  "reserves": {
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "debtCeiling": {
        "from": 400000000,
        "to": 100
      },
      "ltv": {
        "from": 4900,
        "to": 0
      },
      "reserveFactor": {
        "from": 3500,
        "to": 9500
      }
    }
  },
  "strategies": {
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "baseVariableBorrowRate": {
        "from": "30000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "maxVariableBorrowRate": {
        "from": "1680000000000000000000000000",
        "to": "1710000000000000000000000000"
      }
    }
  }
}
```