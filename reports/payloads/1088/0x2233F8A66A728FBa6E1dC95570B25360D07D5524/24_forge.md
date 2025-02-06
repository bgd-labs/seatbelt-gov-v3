## Reserve changes

### Reserves altered

#### WETH ([0x420000000000000000000000000000000000000A](https://explorer.metis.io/address/0x420000000000000000000000000000000000000A))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 80 % | 90 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=837000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=837000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x420000000000000000000000000000000000000A": {
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "900000000000000000000000000"
      }
    }
  }
}
```