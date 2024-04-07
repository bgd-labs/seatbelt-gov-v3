## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x0273800eB1f291AB0F21A3ceE9fB33fe500f8c18](https://etherscan.io/address/0x0273800eB1f291AB0F21A3ceE9fB33fe500f8c18) | [0x7123138CB4891E9dA927492ce29c8a2eC4aB433A](https://etherscan.io/address/0x7123138CB4891E9dA927492ce29c8a2eC4aB433A) |
| baseVariableBorrowRate | 10 % | 13 % |
| interestRate | ![before](/.assets/ec203c9d226a9862712674fc73fe22157313f448.svg) | ![after](/.assets/233ba99310cd56d74318156592f9f533d1e81dde.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "interestRateStrategy": {
        "from": "0x0273800eB1f291AB0F21A3ceE9fB33fe500f8c18",
        "to": "0x7123138CB4891E9dA927492ce29c8a2eC4aB433A"
      }
    }
  },
  "strategies": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "address": {
        "from": "0x0273800eB1f291AB0F21A3ceE9fB33fe500f8c18",
        "to": "0x7123138CB4891E9dA927492ce29c8a2eC4aB433A"
      },
      "baseVariableBorrowRate": {
        "from": "100000000000000000000000000",
        "to": "130000000000000000000000000"
      }
    }
  }
}
```