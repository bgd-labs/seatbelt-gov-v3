## Reserve changes

### Reserve altered

#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5](https://scrollscan.com/address/0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| liquidityIndex | 1.021 | 1.021 |
| variableBorrowIndex | 1.032 | 1.032 |
| currentLiquidityRate | 1.487 % | 1.487 % |
| currentVariableBorrowRate | 4.065 % | 4.065 % |
| maxVariableBorrowRate | / | 69 % |
| baseStableBorrowRate | 10 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 10 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 6 % | / |
| stableRateSlope2 | 60 % | / |
| interestRate | ![before](/.assets/d4f9084ac217a95cbd2f3ddea43639b1244b6987.svg) | ![after](/.assets/337e89fa1149b8791b4fec3b0637142618101434.svg) |

#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967](https://scrollscan.com/address/0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| liquidityIndex | 1.003 | 1.003 |
| variableBorrowIndex | 1.007 | 1.007 |
| currentLiquidityRate | 0.779 % | 0.779 % |
| currentVariableBorrowRate | 1.759 % | 1.759 % |
| maxVariableBorrowRate | / | 82.7 % |
| baseStableBorrowRate | 4.7 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 20 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 3.3 % | / |
| stableRateSlope2 | 80 % | / |
| interestRate | ![before](/.assets/68e6cf60bd57a956489a458852981df50bc322c7.svg) | ![after](/.assets/3fd8da0d6db0aecdba0789fe2dff9f903cb21cfc.svg) |

#### wstETH ([0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8](https://scrollscan.com/address/0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8) | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| currentLiquidityRate | 0.339 % | 0.339 % |
| currentVariableBorrowRate | 2.489 % | 2.489 % |
| maxVariableBorrowRate | / | 307 % |
| baseStableBorrowRate | 9 % | / |
| maxExcessStableToTotalDebtRatio | 80 % | / |
| maxExcessUsageRatio | 55 % | / |
| optimalStableToTotalDebtRatio | 20 % | / |
| stableRateSlope1 | 7 % | / |
| stableRateSlope2 | 300 % | / |
| interestRate | ![before](/.assets/d7ed83ccd0e9127981903bd3f99d0eb6a5988a0e.svg) | ![after](/.assets/8fa1be0a18750a60d1bf8c471ee14d962f51656a.svg) |

## Raw diff

```json
{
  "poolConfig": {
    "poolConfiguratorImpl": {
      "from": "0xBFDDF25621d9d5543bDfa9e8a89bD546c5eE8cff",
      "to": "0x419226e0Ad27f3B2019123f7246a364622b018e5"
    },
    "poolImpl": {
      "from": "0x0c448B78A77d901f79F6afFD476aa7e761421cC1",
      "to": "0x8281ae342fb95E5dA59878b316eB2045B1D67FE0"
    },
    "protocolDataProvider": {
      "from": "0xa99F4E69acF23C6838DE90dD1B5c02EA928A53ee",
      "to": "0xD9b61AC3a94584E7B5253F37Fe7500259D688a63"
    }
  },
  "reserves": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "currentLiquidityRate": {
        "from": "14870203416750359916030812",
        "to": "14870204112849775844779148"
      },
      "currentVariableBorrowRate": {
        "from": "40647814505621004223635219",
        "to": "40647815457017525576434197"
      },
      "interestRateStrategy": {
        "from": "0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "liquidityIndex": {
        "from": "1020682056286700304657818489",
        "to": "1020682070725198973617363815"
      },
      "variableBorrowIndex": {
        "from": "1031955911081991946028984383",
        "to": "1031955950985676530889540880"
      }
    },
    "0x5300000000000000000000000000000000000004": {
      "currentLiquidityRate": {
        "from": "7793171112258895532733308",
        "to": "7793171137480684543998356"
      },
      "currentVariableBorrowRate": {
        "from": "17590757099672868834911776",
        "to": "17590757128138198119128410"
      },
      "interestRateStrategy": {
        "from": "0xE9EcAE0EDA2A97BB6a06a6244FfdFa6b1D886967",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "liquidityIndex": {
        "from": "1003154447429795389164791295",
        "to": "1003154448917191557514090435"
      },
      "variableBorrowIndex": {
        "from": "1007175934423732290165934618",
        "to": "1007175937794544170643527825"
      }
    },
    "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32": {
      "currentLiquidityRate": {
        "from": "3385133678675150048003102",
        "to": "3385133679062816667476407"
      },
      "currentVariableBorrowRate": {
        "from": "24889788835068003159363500",
        "to": "24889788836493196550927776"
      },
      "interestRateStrategy": {
        "from": "0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      }
    }
  },
  "strategies": {
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "address": {
        "from": "0x80E14993fE2cA5c64328B4a8DfC1D95960338bd5",
        "to": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0"
      },
      "baseStableBorrowRate": {
        "from": "100000000000000000000000000",
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
        "to": "690000000000000000000000000"
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