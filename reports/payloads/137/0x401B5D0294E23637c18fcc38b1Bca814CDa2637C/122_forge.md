## Reserve changes

### Reserves altered

#### EURS ([0xE111178A87A3BFf0c8d18DECBa5798827539Ae99](https://polygonscan.com/address/0xE111178A87A3BFf0c8d18DECBa5798827539Ae99))

| description | value before | value after |
| --- | --- | --- |
| debtCeiling | 675,000 $ [67500000] | 1 $ [100] |
| ltv | 65 % [6500] | 0 % [0] |
| reserveFactor | 20 % [2000] | 50 % [5000] |
| maxVariableBorrowRate | 59 % | 61 % |
| baseVariableBorrowRate | 0 % | 2 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=90000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=590000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=90000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=20000000000000000000000000&maxVariableBorrowRate=610000000000000000000000000) |

## Raw diff

```json
{
  "reserves": {
    "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99": {
      "debtCeiling": {
        "from": 67500000,
        "to": 100
      },
      "ltv": {
        "from": 6500,
        "to": 0
      },
      "reserveFactor": {
        "from": 2000,
        "to": 5000
      }
    }
  },
  "strategies": {
    "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99": {
      "baseVariableBorrowRate": {
        "from": "0",
        "to": "20000000000000000000000000"
      },
      "maxVariableBorrowRate": {
        "from": "590000000000000000000000000",
        "to": "610000000000000000000000000"
      }
    }
  }
}
```