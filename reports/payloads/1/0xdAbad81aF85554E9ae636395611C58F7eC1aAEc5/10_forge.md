## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0x1255fC8DC8E76761995aCF544eea54f1B7fB0459](https://etherscan.io/address/0x1255fC8DC8E76761995aCF544eea54f1B7fB0459) | [0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27](https://etherscan.io/address/0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27) |
| baseVariableBorrowRate | 3 % | 4.72 % |
| interestRate | ![before](/.assets/989189510484c481793d4b65f6deb41704666aa3.svg) | ![after](/.assets/ee8e098e68bd79f8c4762d91554a457f23035689.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "interestRateStrategy": {
        "from": "0x1255fC8DC8E76761995aCF544eea54f1B7fB0459",
        "to": "0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27"
      }
    }
  },
  "strategies": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "address": {
        "from": "0x1255fC8DC8E76761995aCF544eea54f1B7fB0459",
        "to": "0xE7C0AE65f7D52E121654eEa0A57b4af0894F6D27"
      },
      "baseVariableBorrowRate": {
        "from": "30000000000000000000000000",
        "to": "47200000000000000000000000"
      }
    }
  }
}
```