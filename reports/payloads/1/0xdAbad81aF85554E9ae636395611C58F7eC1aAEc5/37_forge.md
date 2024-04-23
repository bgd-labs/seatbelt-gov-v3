## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7](https://etherscan.io/address/0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7) | [0x00524e8E4C5FD2b8D8aa1226fA16b39Cad69B8A0](https://etherscan.io/address/0x00524e8E4C5FD2b8D8aa1226fA16b39Cad69B8A0) |
| baseVariableBorrowRate | 5.22 % | 6.22 % |
| interestRate | ![before](/.assets/a27451cce679e0bdd0be1359d9616cbef1b73a22.svg) | ![after](/.assets/898272e7a6d337ab122e44c7b0607c88bdd551ea.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "interestRateStrategy": {
        "from": "0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7",
        "to": "0x00524e8E4C5FD2b8D8aa1226fA16b39Cad69B8A0"
      }
    }
  },
  "strategies": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "address": {
        "from": "0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7",
        "to": "0x00524e8E4C5FD2b8D8aa1226fA16b39Cad69B8A0"
      },
      "baseVariableBorrowRate": {
        "from": "52200000000000000000000000",
        "to": "62200000000000000000000000"
      }
    }
  }
}
```