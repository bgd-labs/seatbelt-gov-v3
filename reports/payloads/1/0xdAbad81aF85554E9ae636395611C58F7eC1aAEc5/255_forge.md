## Reserve changes

### Reserve altered

#### tBTC ([0x18084fbA666a33d37592fA2633fD49a74DD93a88](https://etherscan.io/address/0x18084fbA666a33d37592fA2633fD49a74DD93a88))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 20 % [2000] | 50 % [5000] |
| optimalUsageRatio | 45 % | 80 % |
| maxVariableBorrowRate | 304 % | 64 % |
| variableRateSlope2 | 300 % | 60 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3040000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=640000000000000000000000000) |

#### cbBTC ([0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf](https://etherscan.io/address/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 20 % [2000] | 50 % [5000] |
| optimalUsageRatio | 45 % | 80 % |
| maxVariableBorrowRate | 304 % | 64 % |
| variableRateSlope2 | 300 % | 60 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3040000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=640000000000000000000000000) |

## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: sUSDe Stablecoins(id: 2)



### EMode: rsETH LST main(id: 3)



### EMode: LBTC_WBTC(id: 4)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | LBTC / WBTC | LBTC_WBTC |
| eMode.ltv (unchanged) | 84 % | 84 % |
| eMode.liquidationThreshold (unchanged) | 86 % | 86 % |
| eMode.liquidationBonus (unchanged) | 3 % | 3 % |
| eMode.borrowableBitmap (unchanged) | WBTC | WBTC |
| eMode.collateralBitmap (unchanged) | LBTC | LBTC |


### EMode: LBTC_cbBTC(id: 5)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | LBTC_cbBTC |
| eMode.ltv | - | 84 % |
| eMode.liquidationThreshold | - | 86 % |
| eMode.liquidationBonus | - | 3 % |
| eMode.borrowableBitmap | - | cbBTC |
| eMode.collateralBitmap | - | LBTC |


### EMode: LBTC_tBTC(id: 6)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | LBTC_tBTC |
| eMode.ltv | - | 84 % |
| eMode.liquidationThreshold | - | 86 % |
| eMode.liquidationBonus | - | 3 % |
| eMode.borrowableBitmap | - | tBTC |
| eMode.collateralBitmap | - | LBTC |


## Raw diff

```json
{
  "eModes": {
    "4": {
      "label": {
        "from": "LBTC / WBTC",
        "to": "LBTC_WBTC"
      }
    },
    "5": {
      "from": null,
      "to": {
        "borrowableBitmap": "17179869184",
        "collateralBitmap": "137438953472",
        "eModeCategory": 5,
        "label": "LBTC_cbBTC",
        "liquidationBonus": 10300,
        "liquidationThreshold": 8600,
        "ltv": 8400
      }
    },
    "6": {
      "from": null,
      "to": {
        "borrowableBitmap": "8589934592",
        "collateralBitmap": "137438953472",
        "eModeCategory": 6,
        "label": "LBTC_tBTC",
        "liquidationBonus": 10300,
        "liquidationThreshold": 8600,
        "ltv": 8400
      }
    }
  },
  "reserves": {
    "0x18084fbA666a33d37592fA2633fD49a74DD93a88": {
      "reserveFactor": {
        "from": 2000,
        "to": 5000
      }
    },
    "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf": {
      "reserveFactor": {
        "from": 2000,
        "to": 5000
      }
    }
  },
  "strategies": {
    "0x18084fbA666a33d37592fA2633fD49a74DD93a88": {
      "maxVariableBorrowRate": {
        "from": "3040000000000000000000000000",
        "to": "640000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "800000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "600000000000000000000000000"
      }
    },
    "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf": {
      "maxVariableBorrowRate": {
        "from": "3040000000000000000000000000",
        "to": "640000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "800000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "600000000000000000000000000"
      }
    }
  }
}
```