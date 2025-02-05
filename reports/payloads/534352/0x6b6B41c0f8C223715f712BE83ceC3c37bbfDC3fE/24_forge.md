## Reserve changes

### Reserve altered

#### weETH ([0x01f0a31698C4d065659b9bdC21B3610292a1c506](https://scrollscan.com/address/0x01f0a31698C4d065659b9bdC21B3610292a1c506))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |


#### USDC ([0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4](https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |


#### WETH ([0x5300000000000000000000000000000000000004](https://scrollscan.com/address/0x5300000000000000000000000000000000000004))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |


#### wstETH ([0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32](https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |


## Emodes changed

### EMode: ETH correlated(id: 1)

| description | value before | value after |
| --- | --- | --- |
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