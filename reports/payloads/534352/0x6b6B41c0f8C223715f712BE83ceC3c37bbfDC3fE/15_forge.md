## Reserve changes

### Reserve altered

#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x24aB4C31eE3c1F5D86407Aa39a44a5b123b9449A](https://scrollscan.com/address/0x24aB4C31eE3c1F5D86407Aa39a44a5b123b9449A) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| virtualAccountingActive | false | true |
| virtualBalance | 0 USDC [0] | 16,585,534.9169 USDC [16585534916975] |
| maxVariableBorrowRate | / | 66.5 % |
| baseStableBorrowRate | 7.5 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 10 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 6 % | / |
| stableRateSlope2 | 60 % | / |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=665000000000000000000000000) |

#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967](https://scrollscan.com/address/0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| virtualAccountingActive | false | true |
| virtualBalance | 0 WETH [0] | 22,223.2519 WETH [22223251937637034216711] |
| maxVariableBorrowRate | / | 82.7 % |
| baseStableBorrowRate | 4.7 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 20 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 3.3 % | / |
| stableRateSlope2 | 80 % | / |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=827000000000000000000000000) |

#### wstETH ([0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8](https://scrollscan.com/address/0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| virtualAccountingActive | false | true |
| virtualBalance | 0 wstETH [0] | 15,510.8633 wstETH [15510863331048179269159] |
| maxVariableBorrowRate | / | 307 % |
| baseStableBorrowRate | 9 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 55 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 7 % | / |
| stableRateSlope2 | 300 % | / |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=undefined) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3070000000000000000000000000) |

## Raw diff

```json
{
  "poolConfig": {
    "protocolDataProvider": {
      "from": "0xa99F4E69acF23C6838DE90dD1B5c02EA928A53ee",
      "to": "0xD9b61AC3a94584E7B5253F37Fe7500259D688a63"
    }
  },
  "reserves": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "interestRateStrategy": {
        "from": "0x24aB4C31eE3c1F5D86407Aa39a44a5b123b9449A",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "virtualAccountingActive": {
        "from": false,
        "to": true
      },
      "virtualBalance": {
        "from": "0",
        "to": "16585534916975"
      }
    },
    "0x5300000000000000000000000000000000000004": {
      "interestRateStrategy": {
        "from": "0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "virtualAccountingActive": {
        "from": false,
        "to": true
      },
      "virtualBalance": {
        "from": "0",
        "to": "22223251937637034216711"
      }
    },
    "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32": {
      "interestRateStrategy": {
        "from": "0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "virtualAccountingActive": {
        "from": false,
        "to": true
      },
      "virtualBalance": {
        "from": "0",
        "to": "15510863331048179269159"
      }
    }
  },
  "strategies": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "address": {
        "from": "0x24aB4C31eE3c1F5D86407Aa39a44a5b123b9449A",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "baseStableBorrowRate": {
        "from": "75000000000000000000000000",
        "to": null
      },
      "maxExcessStableToTotalDebtRatio": {
        "from": "800000000000000000000000000",
        "to": null
      },
      "maxExcessUsageRatio": {
        "from": "100000000000000000000000000",
        "to": null
      },
      "optimalStableToTotalDebtRatio": {
        "from": "200000000000000000000000000",
        "to": null
      },
      "stableRateSlope1": {
        "from": "60000000000000000000000000",
        "to": null
      },
      "stableRateSlope2": {
        "from": "600000000000000000000000000",
        "to": null
      },
      "maxVariableBorrowRate": {
        "from": null,
        "to": "665000000000000000000000000"
      }
    },
    "0x5300000000000000000000000000000000000004": {
      "address": {
        "from": "0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "baseStableBorrowRate": {
        "from": "47000000000000000000000000",
        "to": null
      },
      "maxExcessStableToTotalDebtRatio": {
        "from": "800000000000000000000000000",
        "to": null
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": null
      },
      "optimalStableToTotalDebtRatio": {
        "from": "200000000000000000000000000",
        "to": null
      },
      "stableRateSlope1": {
        "from": "33000000000000000000000000",
        "to": null
      },
      "stableRateSlope2": {
        "from": "800000000000000000000000000",
        "to": null
      },
      "maxVariableBorrowRate": {
        "from": null,
        "to": "827000000000000000000000000"
      }
    },
    "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32": {
      "address": {
        "from": "0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "baseStableBorrowRate": {
        "from": "90000000000000000000000000",
        "to": null
      },
      "maxExcessStableToTotalDebtRatio": {
        "from": "800000000000000000000000000",
        "to": null
      },
      "maxExcessUsageRatio": {
        "from": "550000000000000000000000000",
        "to": null
      },
      "optimalStableToTotalDebtRatio": {
        "from": "200000000000000000000000000",
        "to": null
      },
      "stableRateSlope1": {
        "from": "70000000000000000000000000",
        "to": null
      },
      "stableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": null
      },
      "maxVariableBorrowRate": {
        "from": null,
        "to": "3070000000000000000000000000"
      }
    }
  }
}
```