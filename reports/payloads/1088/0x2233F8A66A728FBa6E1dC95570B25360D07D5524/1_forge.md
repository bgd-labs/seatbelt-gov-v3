## Reserve changes

### Reserve altered

#### m.USDC ([0xEA32A96608495e54156Ae48931A7c20f0dcc1a21](https://andromeda-explorer.metis.io/address/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x463F3F7F0eD356703A9bF2Da3FB95AECBEfe60ce](https://andromeda-explorer.metis.io/address/0x463F3F7F0eD356703A9bF2Da3FB95AECBEfe60ce) | [0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0](https://andromeda-explorer.metis.io/address/0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0) |
| variableRateSlope1 | 6 % | 5 % |
| baseStableBorrowRate | 7 % | 6 % |
| interestRate | ![before](/.assets/523a434a2e52b9c3f17fb1ecb160ce80decc5883.svg) | ![after](/.assets/6f4dbde307d23214174bb25f9b1542ac4a70582c.svg) |

#### m.USDT ([0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC](https://andromeda-explorer.metis.io/address/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xEDeA87920826abfE28C2D57AC7665B7031f64EfF](https://andromeda-explorer.metis.io/address/0xEDeA87920826abfE28C2D57AC7665B7031f64EfF) | [0x082612269926F85741E6c2B0447D000469880c1C](https://andromeda-explorer.metis.io/address/0x082612269926F85741E6c2B0447D000469880c1C) |
| variableRateSlope1 | 6 % | 5 % |
| baseStableBorrowRate | 7 % | 6 % |
| interestRate | ![before](/.assets/828c0e1697d4b7add216986b9bc4fa9ffb936a91.svg) | ![after](/.assets/c9254568a928d38bcce14457f1f5cc052c486348.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "interestRateStrategy": {
        "from": "0x463F3F7F0eD356703A9bF2Da3FB95AECBEfe60ce",
        "to": "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "interestRateStrategy": {
        "from": "0xEDeA87920826abfE28C2D57AC7665B7031f64EfF",
        "to": "0x082612269926F85741E6c2B0447D000469880c1C"
      }
    }
  },
  "strategies": {
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "address": {
        "from": "0x463F3F7F0eD356703A9bF2Da3FB95AECBEfe60ce",
        "to": "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0"
      },
      "baseStableBorrowRate": {
        "from": "70000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "60000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "address": {
        "from": "0xEDeA87920826abfE28C2D57AC7665B7031f64EfF",
        "to": "0x082612269926F85741E6c2B0447D000469880c1C"
      },
      "baseStableBorrowRate": {
        "from": "70000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "60000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    }
  }
}
```