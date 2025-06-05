## Reserve changes

### Reserve altered

#### CRV ([0x172370d5Cd63279eFa6d502DAB29171933a610AF](https://polygonscan.com/address/0x172370d5Cd63279eFa6d502DAB29171933a610AF))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 70 % | 45 % |
| maxVariableBorrowRate | 317 % | 163 % |
| variableRateSlope1 | 14 % | 10 % |
| variableRateSlope2 | 300 % | 150 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=140000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=700000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=3170000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=1630000000000000000000000000) |

#### BAL ([0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3](https://polygonscan.com/address/0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 80 % | 45 % |
| maxVariableBorrowRate | 177 % | 170 % |
| variableRateSlope1 | 22 % | 15 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=220000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=50000000000000000000000000&maxVariableBorrowRate=1770000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=50000000000000000000000000&maxVariableBorrowRate=1700000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x172370d5Cd63279eFa6d502DAB29171933a610AF": {
      "maxVariableBorrowRate": {
        "from": "3170000000000000000000000000",
        "to": "1630000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "700000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "140000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "1500000000000000000000000000"
      }
    },
    "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3": {
      "maxVariableBorrowRate": {
        "from": "1770000000000000000000000000",
        "to": "1700000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "220000000000000000000000000",
        "to": "150000000000000000000000000"
      }
    }
  }
}
```