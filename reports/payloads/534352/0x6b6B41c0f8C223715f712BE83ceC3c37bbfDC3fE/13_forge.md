## Reserve changes

### Reserves altered

#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05](https://scrollscan.com/address/0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05) | [0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967](https://scrollscan.com/address/0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967) |
| variableRateSlope1 | 3.3 % | 2.7 % |
| baseStableBorrowRate | 5.3 % | 4.7 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=33000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) |

## Raw diff

```json
{
  "reserves": {
    "0x5300000000000000000000000000000000000004": {
      "interestRateStrategy": {
        "from": "0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05",
        "to": "0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967"
      }
    }
  },
  "strategies": {
    "0x5300000000000000000000000000000000000004": {
      "address": {
        "from": "0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05",
        "to": "0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967"
      },
      "baseStableBorrowRate": {
        "from": "53000000000000000000000000",
        "to": "47000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "33000000000000000000000000",
        "to": "27000000000000000000000000"
      }
    }
  }
}
```