## Reserve changes

### Reserve altered

#### USDt ([0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7](https://snowscan.xyz/address/0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4](https://snowscan.xyz/address/0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4) | [0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C](https://snowscan.xyz/address/0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/e36150e52440137ed8c69d49f8f7002df1889e3d.svg) | ![after](/.assets/73a758e2afff3b8c4f243164244164416cf2b273.svg) |

#### USDC ([0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E](https://snowscan.xyz/address/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x769EbC5106bF09D9A665CCb691e1907612b57F16](https://snowscan.xyz/address/0x769EbC5106bF09D9A665CCb691e1907612b57F16) | [0x5F58C62077b667370879D6580a59f47C30f96a74](https://snowscan.xyz/address/0x5F58C62077b667370879D6580a59f47C30f96a74) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/092eee7f9fd487a7bf2aa3faa1516f84952932b6.svg) | ![after](/.assets/bfd6f87543ed786a5918b5803fe1906cf8be5866.svg) |

#### FRAX ([0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64](https://snowscan.xyz/address/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4](https://snowscan.xyz/address/0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4) | [0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C](https://snowscan.xyz/address/0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/e36150e52440137ed8c69d49f8f7002df1889e3d.svg) | ![after](/.assets/73a758e2afff3b8c4f243164244164416cf2b273.svg) |

#### DAI.e ([0xd586E7F844cEa2F87f50152665BCbc2C279D8d70](https://snowscan.xyz/address/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4](https://snowscan.xyz/address/0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4) | [0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C](https://snowscan.xyz/address/0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/e36150e52440137ed8c69d49f8f7002df1889e3d.svg) | ![after](/.assets/73a758e2afff3b8c4f243164244164416cf2b273.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7": {
      "interestRateStrategy": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
      }
    },
    "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E": {
      "interestRateStrategy": {
        "from": "0x769EbC5106bF09D9A665CCb691e1907612b57F16",
        "to": "0x5F58C62077b667370879D6580a59f47C30f96a74"
      }
    },
    "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64": {
      "interestRateStrategy": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
      }
    },
    "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70": {
      "interestRateStrategy": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
      }
    }
  },
  "strategies": {
    "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7": {
      "address": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
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
    "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E": {
      "address": {
        "from": "0x769EbC5106bF09D9A665CCb691e1907612b57F16",
        "to": "0x5F58C62077b667370879D6580a59f47C30f96a74"
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
    "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64": {
      "address": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
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
    "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70": {
      "address": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0x424883C7dD9Bd129BC346A65E8455CDe9fC0c43C"
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