## Reserve changes

### Reserves altered

#### wS ([0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38](https://sonicscan.org//address/0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 45 % | 80 % |
| maxVariableBorrowRate | 307 % | 84 % |
| variableRateSlope1 | 7 % | 4 % |
| variableRateSlope2 | 300 % | 80 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3070000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=840000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38": {
      "maxVariableBorrowRate": {
        "from": "3070000000000000000000000000",
        "to": "840000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "800000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "70000000000000000000000000",
        "to": "40000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "800000000000000000000000000"
      }
    }
  }
}
```