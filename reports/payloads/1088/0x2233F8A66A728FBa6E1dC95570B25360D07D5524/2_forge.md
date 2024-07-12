## Reserve changes

### Reserve altered

#### m.USDC ([0xEA32A96608495e54156Ae48931A7c20f0dcc1a21](https://andromeda-explorer.metis.io/address/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x3B88f83B2b0444F14B6fc904040F648206F551fc](https://andromeda-explorer.metis.io/address/0x3B88f83B2b0444F14B6fc904040F648206F551fc) | [0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0](https://andromeda-explorer.metis.io/address/0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0) |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| interestRate | ![before](/.assets/a432b23cd830825458fad4c565518ada95f4365d.svg) | ![after](/.assets/e6b0adc0190ad1d948dd3ddcf43d2ff388ea22d8.svg) |

#### m.USDT ([0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC](https://andromeda-explorer.metis.io/address/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454](https://andromeda-explorer.metis.io/address/0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454) | [0x082612269926F85741E6c2B0447D000469880c1C](https://andromeda-explorer.metis.io/address/0x082612269926F85741E6c2B0447D000469880c1C) |
| optimalUsageRatio | 80 % | 90 % |
| variableRateSlope1 | 4 % | 5 % |
| baseStableBorrowRate | 5 % | 6 % |
| maxExcessUsageRatio | 20 % | 10 % |
| interestRate | ![before](/.assets/7c0642cf7cfaf655f2beeaa8151790d5bcf12f13.svg) | ![after](/.assets/249be9476b0ac19f331825500c870d32d33b1b39.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "interestRateStrategy": {
        "from": "0x3B88f83B2b0444F14B6fc904040F648206F551fc",
        "to": "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "interestRateStrategy": {
        "from": "0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454",
        "to": "0x082612269926F85741E6c2B0447D000469880c1C"
      }
    }
  },
  "strategies": {
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "address": {
        "from": "0x3B88f83B2b0444F14B6fc904040F648206F551fc",
        "to": "0x3c8DF161A59F2a3ed4D40F073395d6a0f14290C0"
      },
      "baseStableBorrowRate": {
        "from": "50000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "40000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "address": {
        "from": "0x5A1bdAc4eBa2A70D465ef4aDd2f68dBBae183454",
        "to": "0x082612269926F85741E6c2B0447D000469880c1C"
      },
      "baseStableBorrowRate": {
        "from": "50000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "900000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "40000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    }
  }
}
```