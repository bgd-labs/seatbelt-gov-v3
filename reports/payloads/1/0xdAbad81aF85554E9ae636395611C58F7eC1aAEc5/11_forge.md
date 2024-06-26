## Reserve changes

### Reserves altered

#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xb02381b1d27aA9845e5012083CA288c1818884f0](https://etherscan.io/address/0xb02381b1d27aA9845e5012083CA288c1818884f0) | [0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276](https://etherscan.io/address/0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276) |
| optimalUsageRatio | 90 % | 80 % |
| variableRateSlope1 | 3.8 % | 2.8 % |
| baseStableBorrowRate | 6.8 % | 5.8 % |
| maxExcessUsageRatio | 10 % | 20 % |
| interestRate | ![before](/.assets/87f704d7464a880c7c343aab70abb937991ff717.svg) | ![after](/.assets/fb9a10bdacab14a10bdb79ed7c595485bd4216d5.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "interestRateStrategy": {
        "from": "0xb02381b1d27aA9845e5012083CA288c1818884f0",
        "to": "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276"
      }
    }
  },
  "strategies": {
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "address": {
        "from": "0xb02381b1d27aA9845e5012083CA288c1818884f0",
        "to": "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276"
      },
      "baseStableBorrowRate": {
        "from": "68000000000000000000000000",
        "to": "58000000000000000000000000"
      },
      "maxExcessUsageRatio": {
        "from": "100000000000000000000000000",
        "to": "200000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "900000000000000000000000000",
        "to": "800000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "38000000000000000000000000",
        "to": "28000000000000000000000000"
      }
    }
  }
}
```