## Reserve changes

### Reserves altered

#### weETH ([0x01f0a31698C4d065659b9bdC21B3610292a1c506](https://scrollscan.com/address/0x01f0a31698C4d065659b9bdC21B3610292a1c506))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 15 % [1500] | 45 % [4500] |
| optimalUsageRatio | 45 % | 30 % |
| maxVariableBorrowRate | 307 % | 308 % |
| baseVariableBorrowRate | 0 % | 1 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3070000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=300000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=3080000000000000000000000000) |

## Raw diff

```json
{
  "reserves": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "reserveFactor": {
        "from": 1500,
        "to": 4500
      }
    }
  },
  "strategies": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "baseVariableBorrowRate": {
        "from": "0",
        "to": "10000000000000000000000000"
      },
      "maxVariableBorrowRate": {
        "from": "3070000000000000000000000000",
        "to": "3080000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "300000000000000000000000000"
      }
    }
  }
}
```