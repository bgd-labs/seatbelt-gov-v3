## Reserve changes

### Reserves altered

#### USDS ([0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 47 % | 44.5 % |
| baseVariableBorrowRate | 11.25 % | 8.75 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=7500000000000000000000000&variableRateSlope2=350000000000000000000000000&optimalUsageRatio=920000000000000000000000000&baseVariableBorrowRate=112500000000000000000000000&maxVariableBorrowRate=470000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=7500000000000000000000000&variableRateSlope2=350000000000000000000000000&optimalUsageRatio=920000000000000000000000000&baseVariableBorrowRate=87500000000000000000000000&maxVariableBorrowRate=445000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0xdC035D45d973E3EC169d2276DDab16f1e407384F": {
      "baseVariableBorrowRate": {
        "from": "112500000000000000000000000",
        "to": "87500000000000000000000000"
      },
      "maxVariableBorrowRate": {
        "from": "470000000000000000000000000",
        "to": "445000000000000000000000000"
      }
    }
  }
}
```