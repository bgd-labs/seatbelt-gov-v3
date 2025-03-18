## Reserve changes

### Reserve altered

#### USDC.e ([0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0](https://gnosisscan.io/address/0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 48.5 % | 46.5 % |
| variableRateSlope1 | 8.5 % | 6.5 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=85000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=485000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=465000000000000000000000000) |

#### EURe ([0xcB444e90D8198415266c6a2724b7900fb12FC56E](https://gnosisscan.io/address/0xcB444e90D8198415266c6a2724b7900fb12FC56E))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 58.5 % | 56.5 % |
| variableRateSlope1 | 8.5 % | 6.5 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=85000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=585000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=565000000000000000000000000) |

#### WXDAI ([0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://gnosisscan.io/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 48.5 % | 46.5 % |
| variableRateSlope1 | 8.5 % | 6.5 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=85000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=485000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=465000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0": {
      "maxVariableBorrowRate": {
        "from": "485000000000000000000000000",
        "to": "465000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "85000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    },
    "0xcB444e90D8198415266c6a2724b7900fb12FC56E": {
      "maxVariableBorrowRate": {
        "from": "585000000000000000000000000",
        "to": "565000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "85000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    },
    "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d": {
      "maxVariableBorrowRate": {
        "from": "485000000000000000000000000",
        "to": "465000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "85000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    }
  }
}
```