## Reserve changes

### Reserve altered

#### RLUSD ([0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD](https://etherscan.io/address/0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 10 % [1000] | 20 % [2000] |
| baseVariableBorrowRate | 0 % | 4 % |
| variableRateSlope1 | 6.5 % | 2.5 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=65000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=565000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=25000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=40000000000000000000000000&maxVariableBorrowRate=565000000000000000000000000) |

#### SNX ([0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F](https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 80 % | 45 % |
| maxVariableBorrowRate | 118 % | 168 % |
| variableRateSlope2 | 100 % | 150 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1000000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=1180000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=1680000000000000000000000000) |

#### USDtb ([0xC139190F447e929f090Edeb554D95AbB8b18aC1C](https://etherscan.io/address/0xC139190F447e929f090Edeb554D95AbB8b18aC1C))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 10 % [1000] | 20 % [2000] |


#### CRV ([0xD533a949740bb3306d119CC777fa900bA034cd52](https://etherscan.io/address/0xD533a949740bb3306d119CC777fa900bA034cd52))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 70 % | 45 % |
| maxVariableBorrowRate | 317 % | 163 % |
| variableRateSlope1 | 14 % | 10 % |
| variableRateSlope2 | 300 % | 150 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=140000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=700000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=3170000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=30000000000000000000000000&maxVariableBorrowRate=1630000000000000000000000000) |

#### BAL ([0xba100000625a3754423978a60c9317c58a424e3D](https://etherscan.io/address/0xba100000625a3754423978a60c9317c58a424e3D))

| description | value before | value after |
| --- | --- | --- |
| optimalUsageRatio | 80 % | 45 % |
| maxVariableBorrowRate | 177 % | 170 % |
| variableRateSlope1 | 22 % | 15 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=220000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=50000000000000000000000000&maxVariableBorrowRate=1770000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=150000000000000000000000000&variableRateSlope2=1500000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=50000000000000000000000000&maxVariableBorrowRate=1700000000000000000000000000) |

#### crvUSD ([0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E](https://etherscan.io/address/0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 10 % [1000] | 20 % [2000] |


## Raw diff

```json
{
  "reserves": {
    "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD": {
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      }
    },
    "0xC139190F447e929f090Edeb554D95AbB8b18aC1C": {
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      }
    },
    "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E": {
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      }
    }
  },
  "strategies": {
    "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD": {
      "baseVariableBorrowRate": {
        "from": "0",
        "to": "40000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "65000000000000000000000000",
        "to": "25000000000000000000000000"
      }
    },
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "maxVariableBorrowRate": {
        "from": "1180000000000000000000000000",
        "to": "1680000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "1000000000000000000000000000",
        "to": "1500000000000000000000000000"
      }
    },
    "0xD533a949740bb3306d119CC777fa900bA034cd52": {
      "maxVariableBorrowRate": {
        "from": "3170000000000000000000000000",
        "to": "1630000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "700000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "140000000000000000000000000",
        "to": "100000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "1500000000000000000000000000"
      }
    },
    "0xba100000625a3754423978a60c9317c58a424e3D": {
      "maxVariableBorrowRate": {
        "from": "1770000000000000000000000000",
        "to": "1700000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "220000000000000000000000000",
        "to": "150000000000000000000000000"
      }
    }
  }
}
```