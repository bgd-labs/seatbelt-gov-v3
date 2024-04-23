## Reserve changes

### Reserves altered

#### WMATIC ([0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270](https://polygonscan.com/address/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xFB0898dCFb69DF9E01DBE625A5988D6542e5BdC5](https://polygonscan.com/address/0xFB0898dCFb69DF9E01DBE625A5988D6542e5BdC5) | [0xD87974E8ED49AB16d5053ba793F4e17078Be0426](https://polygonscan.com/address/0xD87974E8ED49AB16d5053ba793F4e17078Be0426) |
| variableRateSlope1 | 6.1 % | 5 % |
| baseStableBorrowRate | 8.1 % | 7 % |
| interestRate | ![before](/.assets/b9af35941b9f433a2ddde49d45d5216531deb3d3.svg) | ![after](/.assets/b6142a82e071d0b28884f5f19cf0ab249d831b52.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
      "interestRateStrategy": {
        "from": "0xFB0898dCFb69DF9E01DBE625A5988D6542e5BdC5",
        "to": "0xD87974E8ED49AB16d5053ba793F4e17078Be0426"
      }
    }
  },
  "strategies": {
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
      "address": {
        "from": "0xFB0898dCFb69DF9E01DBE625A5988D6542e5BdC5",
        "to": "0xD87974E8ED49AB16d5053ba793F4e17078Be0426"
      },
      "baseStableBorrowRate": {
        "from": "81000000000000000000000000",
        "to": "70000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "61000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    }
  }
}
```