## Reserve changes

### Reserves altered

#### LUSD ([0xc40F949F8a4e094D1b49a23ea9241D289B7b2819](https://optimistic.etherscan.io/address/0xc40F949F8a4e094D1b49a23ea9241D289B7b2819))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 20 % [2000] | 50 % [5000] |
| maxVariableBorrowRate | 55.5 % | 57.5 % |
| baseVariableBorrowRate | 0 % | 2 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=55000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=555000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=55000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=20000000000000000000000000&maxVariableBorrowRate=575000000000000000000000000) |

## Raw diff

```json
{
  "reserves": {
    "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819": {
      "reserveFactor": {
        "from": 2000,
        "to": 5000
      }
    }
  },
  "strategies": {
    "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819": {
      "baseVariableBorrowRate": {
        "from": "0",
        "to": "20000000000000000000000000"
      },
      "maxVariableBorrowRate": {
        "from": "555000000000000000000000000",
        "to": "575000000000000000000000000"
      }
    }
  }
}
```