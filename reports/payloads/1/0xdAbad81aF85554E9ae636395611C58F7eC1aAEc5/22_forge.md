## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27](https://etherscan.io/address/0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27) | [0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7](https://etherscan.io/address/0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7) |
| baseVariableBorrowRate | 4.72 % | 5.22 % |
| interestRate | ![before](/.assets/ee8e098e68bd79f8c4762d91554a457f23035689.svg) | ![after](/.assets/a27451cce679e0bdd0be1359d9616cbef1b73a22.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "interestRateStrategy": {
        "from": "0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27",
        "to": "0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7"
      }
    }
  },
  "strategies": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "address": {
        "from": "0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27",
        "to": "0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7"
      },
      "baseVariableBorrowRate": {
        "from": "47200000000000000000000000",
        "to": "52200000000000000000000000"
      }
    }
  }
}
```