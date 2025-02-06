## Reserve changes

### Reserves altered

#### WETH ([0x420000000000000000000000000000000000000A](https://explorer.metis.io/address/0x420000000000000000000000000000000000000A))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x83e654d42f437915bf849dE04c19AAd8C5e8c01E](https://explorer.metis.io/address/0x83e654d42f437915bf849dE04c19AAd8C5e8c01E) | [0xf043D74F1CbF798D8E9a3cB19fDf2084C275f921](https://explorer.metis.io/address/0xf043D74F1CbF798D8E9a3cB19fDf2084C275f921) |
| variableRateSlope1 | 3.8 % | 2.7 % |
| baseStableBorrowRate | 6.8 % | 5.7 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=38000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=undefined) |

## Raw diff

```json
{
  "reserves": {
    "0x420000000000000000000000000000000000000A": {
      "interestRateStrategy": {
        "from": "0x83e654d42f437915bf849dE04c19AAd8C5e8c01E",
        "to": "0xf043D74F1CbF798D8E9a3cB19fDf2084C275f921"
      }
    }
  },
  "strategies": {
    "0x420000000000000000000000000000000000000A": {
      "address": {
        "from": "0x83e654d42f437915bf849dE04c19AAd8C5e8c01E",
        "to": "0xf043D74F1CbF798D8E9a3cB19fDf2084C275f921"
      },
      "baseStableBorrowRate": {
        "from": "68000000000000000000000000",
        "to": "57000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "38000000000000000000000000",
        "to": "27000000000000000000000000"
      }
    }
  }
}
```