## Reserve changes

### Reserve altered

#### USDC ([0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://gnosisscan.io/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x7b846F0bE2A2c3434b353130B312Dd978514D04d](https://gnosisscan.io/address/0x7b846F0bE2A2c3434b353130B312Dd978514D04d) | [0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B](https://gnosisscan.io/address/0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/543dace5ab86891e42b5a6d57a11e7f8f269b3e8.svg) | ![after](/.assets/3cf05d1664ec3dc166fe08dae2bca5936aa6410c.svg) |

#### EURe ([0xcB444e90D8198415266c6a2724b7900fb12FC56E](https://gnosisscan.io/address/0xcB444e90D8198415266c6a2724b7900fb12FC56E))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x83506d1B6DC58390Ca52baF0314779c2525BB814](https://gnosisscan.io/address/0x83506d1B6DC58390Ca52baF0314779c2525BB814) | [0x79CAeAcaCed9ECAccE9d36C24094C605469212C6](https://gnosisscan.io/address/0x79CAeAcaCed9ECAccE9d36C24094C605469212C6) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/c6b230503b2de3bc966e0ba8b5ff3dfd2f42fdb8.svg) | ![after](/.assets/2e10802516e9aec16be97884b35638e185709c22.svg) |

#### WXDAI ([0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://gnosisscan.io/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x7b846F0bE2A2c3434b353130B312Dd978514D04d](https://gnosisscan.io/address/0x7b846F0bE2A2c3434b353130B312Dd978514D04d) | [0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B](https://gnosisscan.io/address/0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/543dace5ab86891e42b5a6d57a11e7f8f269b3e8.svg) | ![after](/.assets/3cf05d1664ec3dc166fe08dae2bca5936aa6410c.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83": {
      "interestRateStrategy": {
        "from": "0x7b846F0bE2A2c3434b353130B312Dd978514D04d",
        "to": "0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B"
      }
    },
    "0xcB444e90D8198415266c6a2724b7900fb12FC56E": {
      "interestRateStrategy": {
        "from": "0x83506d1B6DC58390Ca52baF0314779c2525BB814",
        "to": "0x79CAeAcaCed9ECAccE9d36C24094C605469212C6"
      }
    },
    "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d": {
      "interestRateStrategy": {
        "from": "0x7b846F0bE2A2c3434b353130B312Dd978514D04d",
        "to": "0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B"
      }
    }
  },
  "strategies": {
    "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83": {
      "address": {
        "from": "0x7b846F0bE2A2c3434b353130B312Dd978514D04d",
        "to": "0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B"
      },
      "baseStableBorrowRate": {
        "from": "100000000000000000000000000",
        "to": "75000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "90000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    },
    "0xcB444e90D8198415266c6a2724b7900fb12FC56E": {
      "address": {
        "from": "0x83506d1B6DC58390Ca52baF0314779c2525BB814",
        "to": "0x79CAeAcaCed9ECAccE9d36C24094C605469212C6"
      },
      "baseStableBorrowRate": {
        "from": "100000000000000000000000000",
        "to": "75000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "90000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    },
    "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d": {
      "address": {
        "from": "0x7b846F0bE2A2c3434b353130B312Dd978514D04d",
        "to": "0x4F29DA9DA689652827b7192B373B3eE71BC2Df2B"
      },
      "baseStableBorrowRate": {
        "from": "100000000000000000000000000",
        "to": "75000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "90000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    }
  }
}
```