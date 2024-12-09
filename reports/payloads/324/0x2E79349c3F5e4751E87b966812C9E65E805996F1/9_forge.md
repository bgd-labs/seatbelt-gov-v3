## Reserve changes

### Reserve altered

#### USDC ([0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4](https://era.zksync.network//address/0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 65.5 % | 52.5 % |
| variableRateSlope1 | 5.5 % | 12.5 % |
| variableRateSlope2 | 60 % | 40 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=55000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=655000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=125000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=525000000000000000000000000) |

#### USDT ([0x493257fD37EDB34451f62EDf8D2a0C418852bA4C](https://era.zksync.network//address/0x493257fD37EDB34451f62EDf8D2a0C418852bA4C))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 65.5 % | 52.5 % |
| variableRateSlope1 | 5.5 % | 12.5 % |
| variableRateSlope2 | 60 % | 40 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=55000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=655000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=125000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=525000000000000000000000000) |

## Raw diff

```json
{
  "strategies": {
    "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4": {
      "maxVariableBorrowRate": {
        "from": "655000000000000000000000000",
        "to": "525000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "55000000000000000000000000",
        "to": "125000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "600000000000000000000000000",
        "to": "400000000000000000000000000"
      }
    },
    "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C": {
      "maxVariableBorrowRate": {
        "from": "655000000000000000000000000",
        "to": "525000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "55000000000000000000000000",
        "to": "125000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "600000000000000000000000000",
        "to": "400000000000000000000000000"
      }
    }
  }
}
```