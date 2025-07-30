## Reserve changes

### Reserves altered

#### wstETH ([0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0](https://etherscan.io/address/0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 5 % [500] | 35 % [3500] |
| maxVariableBorrowRate | 86 % | 41 % |
| variableRateSlope2 | 85 % | 40 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=10000000000000000000000000&variableRateSlope2=850000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=860000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=10000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=410000000000000000000000000) |

## Raw diff

```json
{
  "reserves": {
    "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0": {
      "reserveFactor": {
        "from": 500,
        "to": 3500
      }
    }
  },
  "strategies": {
    "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0": {
      "maxVariableBorrowRate": {
        "from": "860000000000000000000000000",
        "to": "410000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "850000000000000000000000000",
        "to": "400000000000000000000000000"
      }
    }
  }
}
```