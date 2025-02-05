## Reserve changes

### Reserves altered

#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x39FA62444F4716f64253aEAc4509Ad32DE8D67B2](https://scrollscan.com/address/0x39FA62444F4716f64253aEAc4509Ad32DE8D67B2) | [0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5](https://scrollscan.com/address/0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5) |
| variableRateSlope1 | 12 % | 9 % |
| baseStableBorrowRate | 13 % | 10 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=120000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=90000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) |

## Raw diff

```json
{
  "reserves": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "interestRateStrategy": {
        "from": "0x39FA62444F4716f64253aEAc4509Ad32DE8D67B2",
        "to": "0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5"
      }
    }
  },
  "strategies": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "address": {
        "from": "0x39FA62444F4716f64253aEAc4509Ad32DE8D67B2",
        "to": "0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5"
      },
      "baseStableBorrowRate": {
        "from": "130000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "120000000000000000000000000",
        "to": "90000000000000000000000000"
      }
    }
  }
}
```