## Reserve changes

### Reserve altered

#### weETH ([0x01f0a31698C4d065659b9bdC21B3610292a1c506](https://scrollscan.com/address/0x01f0a31698C4d065659b9bdC21B3610292a1c506))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |
| interestRate | ![before](/.assets/ba06e5f94338be2fe2b46141ae0af1531fe2e9ed.svg) | ![after](/.assets/e0166562d388b3615ec44995aa8b0cf57be8f5f7.svg) |

#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |
| interestRate | ![before](/.assets/79d81a829bfe358f506a4e7b9c9cd91bd31cbb1c.svg) | ![after](/.assets/7ebb0d1d98f7a0145f374cc285e4da4b6a84dd91.svg) |

#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |
| interestRate | ![before](/.assets/1eb62fafe4592946c59bca0c8c74e8000a82a95f.svg) | ![after](/.assets/57b72de9d7e221ba5473abb5a49edee511b12fa5.svg) |

#### wstETH ([0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |
| interestRate | ![before](/.assets/8fa1be0a18750a60d1bf8c471ee14d962f51656a.svg) | ![after](/.assets/956d5d162477b53a9b2180aa2ee41b626fde60e1.svg) |

## Emodes changes

### EMode: ETH correlated(id: 1)

| eMode.borrowableBitmap | - | WETH, wstETH, weETH |
| eMode.collateralBitmap | - | WETH, wstETH, weETH |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.priceSource | 0x0000000000000000000000000000000000000000 | - |


## Raw diff

```json
{
  "eModes": {
    "1": {
      "priceSource": {
        "from": "0x0000000000000000000000000000000000000000",
        "to": null
      },
      "borrowableBitmap": {
        "from": null,
        "to": "13"
      },
      "collateralBitmap": {
        "from": null,
        "to": "13"
      }
    }
  },
  "poolConfig": {
    "poolConfiguratorImpl": {
      "from": "0x419226e0Ad27f3B2019123f7246a364622b018e5",
      "to": "0x4816b2C2895f97fB918f1aE7Da403750a0eE372e"
    },
    "poolImpl": {
      "from": "0x8281ae342fb95E5dA59878b316eB2045B1D67FE0",
      "to": "0xE8Ba6eD06F0c00885754704108a72A54a5E5b764"
    },
    "protocolDataProvider": {
      "from": "0xD9b61AC3a94584E7B5253F37Fe7500259D688a63",
      "to": "0xe2108b60623C6Dcf7bBd535bD15a451fd0811f7b"
    }
  },
  "reserves": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "interestRateStrategy": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "interestRateStrategy": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0x5300000000000000000000000000000000000004": {
      "interestRateStrategy": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32": {
      "interestRateStrategy": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    }
  },
  "strategies": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "address": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4": {
      "address": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0x5300000000000000000000000000000000000004": {
      "address": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    },
    "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32": {
      "address": {
        "from": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "to": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc"
      }
    }
  }
}
```