## Reserve changes

### Reserves altered

#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 51.5 % | 49.5 % |
| variableRateSlope1 | 11.5 % | 9.5 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=115000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=515000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=95000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=495000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "maxVariableBorrowRate": {
        "from": "515000000000000000000000000",
        "to": "495000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "115000000000000000000000000",
        "to": "95000000000000000000000000"
      }
    }
  }
}
```