## Reserve changes

### Reserve altered

#### USDT ([0x55d398326f99059fF775485246999027B3197955](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xD161Cd855089c33c00F7D30C56452e5B4B8a8599](https://bscscan.com/address/0xD161Cd855089c33c00F7D30C56452e5B4B8a8599) | [0xbD77cb6a17cCCca5D8fB634f664E4e4950c9fF89](https://bscscan.com/address/0xbD77cb6a17cCCca5D8fB634f664E4e4950c9fF89) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/37873366b6243351ce639fbe7aae4c7dc493837c.svg) | ![after](/.assets/04c1c99dbabc18d6bebd2f07db6d4538b83aa15a.svg) |

#### USDC ([0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d](https://bscscan.com/address/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x4e4B860383B9C35615f2dc0C3b78F83009A46720](https://bscscan.com/address/0x4e4B860383B9C35615f2dc0C3b78F83009A46720) | [0x77498A4A946e0303E92B78676851f861906e6eF4](https://bscscan.com/address/0x77498A4A946e0303E92B78676851f861906e6eF4) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 10 % | 7.5 % |
| interestRate | ![before](/.assets/dec94b431a4b31d8491ca55f34689472a1db5363.svg) | ![after](/.assets/ea66d0c728436b8a800d3d24e9258dcfab20b3e6.svg) |

#### FDUSD ([0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409](https://bscscan.com/address/0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x6415754564745A50adB508D3B94d10870FE220eb](https://bscscan.com/address/0x6415754564745A50adB508D3B94d10870FE220eb) | [0xcA8a1DC160f6EAF4A9CBf7f94D07895c593A3ee4](https://bscscan.com/address/0xcA8a1DC160f6EAF4A9CBf7f94D07895c593A3ee4) |
| variableRateSlope1 | 9 % | 6.5 % |
| baseStableBorrowRate | 12 % | 9.5 % |
| interestRate | ![before](/.assets/812f44501a2ebb0504e8c593df89bfbd88d04510.svg) | ![after](/.assets/d6f802d118e4eb8431b9995c835897f66d3abf7f.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x55d398326f99059fF775485246999027B3197955": {
      "interestRateStrategy": {
        "from": "0xD161Cd855089c33c00F7D30C56452e5B4B8a8599",
        "to": "0xbD77cb6a17cCCca5D8fB634f664E4e4950c9fF89"
      }
    },
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": {
      "interestRateStrategy": {
        "from": "0x4e4B860383B9C35615f2dc0C3b78F83009A46720",
        "to": "0x77498A4A946e0303E92B78676851f861906e6eF4"
      }
    },
    "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409": {
      "interestRateStrategy": {
        "from": "0x6415754564745A50adB508D3B94d10870FE220eb",
        "to": "0xcA8a1DC160f6EAF4A9CBf7f94D07895c593A3ee4"
      }
    }
  },
  "strategies": {
    "0x55d398326f99059fF775485246999027B3197955": {
      "address": {
        "from": "0xD161Cd855089c33c00F7D30C56452e5B4B8a8599",
        "to": "0xbD77cb6a17cCCca5D8fB634f664E4e4950c9fF89"
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
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d": {
      "address": {
        "from": "0x4e4B860383B9C35615f2dc0C3b78F83009A46720",
        "to": "0x77498A4A946e0303E92B78676851f861906e6eF4"
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
    "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409": {
      "address": {
        "from": "0x6415754564745A50adB508D3B94d10870FE220eb",
        "to": "0xcA8a1DC160f6EAF4A9CBf7f94D07895c593A3ee4"
      },
      "baseStableBorrowRate": {
        "from": "120000000000000000000000000",
        "to": "95000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "90000000000000000000000000",
        "to": "65000000000000000000000000"
      }
    }
  }
}
```