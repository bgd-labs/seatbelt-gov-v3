## Reserve changes

### Reserves altered

#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 80 % | 90 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=827000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=827000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x5300000000000000000000000000000000000004": {
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "900000000000000000000000000"
      }
    }
  }
}
```