## Reserve changes

### Reserve altered

#### USDC ([0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8](https://arbiscan.io/address/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 150,000,000 USDC | 26,000,000 USDC |
| borrowCap | 100,000,000 USDC | 24,000,000 USDC |
| ltv | 81 % | 77 % |
| liquidationThreshold | 86 % | 80 % |
| reserveFactor | 10 % | 20 % |
| interestRateStrategy | [0x53b13a6D43F647D788411Abfd28D229C274AfBF9](https://arbiscan.io/address/0x53b13a6D43F647D788411Abfd28D229C274AfBF9) | [0x642a8DAcC59b73491Dcaa3BCeF046D660901fCc1](https://arbiscan.io/address/0x642a8DAcC59b73491Dcaa3BCeF046D660901fCc1) |
| variableRateSlope1 | 5 % | 7 % |
| variableRateSlope2 | 60 % | 80 % |
| baseStableBorrowRate | 6 % | 8 % |
| interestRate | ![before](/.assets/f026f669632b38618fe2f5e520b460247c827ccb.svg) | ![after](/.assets/7387a2f081b5c6aaea817fa3774fd472edbae392.svg) |

#### USDC ([0xaf88d065e77c8cC2239327C5EDb3A432268e5831](https://arbiscan.io/address/0xaf88d065e77c8cC2239327C5EDb3A432268e5831))

| description | value before | value after |
| --- | --- | --- |
| ltv | 81 % | 77 % |
| liquidationThreshold | 86 % | 80 % |


## Raw diff

```json
{
  "reserves": {
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": {
      "borrowCap": {
        "from": 100000000,
        "to": 24000000
      },
      "interestRateStrategy": {
        "from": "0x53b13a6D43F647D788411Abfd28D229C274AfBF9",
        "to": "0x642a8DAcC59b73491Dcaa3BCeF046D660901fCc1"
      },
      "liquidationThreshold": {
        "from": 8600,
        "to": 8000
      },
      "ltv": {
        "from": 8100,
        "to": 7700
      },
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      },
      "supplyCap": {
        "from": 150000000,
        "to": 26000000
      }
    },
    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831": {
      "liquidationThreshold": {
        "from": 8600,
        "to": 8000
      },
      "ltv": {
        "from": 8100,
        "to": 7700
      }
    }
  },
  "strategies": {
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": {
      "address": {
        "from": "0x53b13a6D43F647D788411Abfd28D229C274AfBF9",
        "to": "0x642a8DAcC59b73491Dcaa3BCeF046D660901fCc1"
      },
      "baseStableBorrowRate": {
        "from": "60000000000000000000000000",
        "to": "80000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "50000000000000000000000000",
        "to": "70000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "600000000000000000000000000",
        "to": "800000000000000000000000000"
      }
    }
  }
}
```