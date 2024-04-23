## Reserve changes

### Reserve altered

#### USDC ([0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85](https://optimistic.etherscan.io/address/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85))

| description | value before | value after |
| --- | --- | --- |
| ltv | 80 % | 77 % |
| liquidationThreshold | 85 % | 80 % |
| interestRateStrategy | [0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4](https://optimistic.etherscan.io/address/0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4) | [0xB57Ff919A953424d6B143ABfD6740A225eab953e](https://optimistic.etherscan.io/address/0xB57Ff919A953424d6B143ABfD6740A225eab953e) |
| variableRateSlope1 | 3.5 % | 5 % |
| baseStableBorrowRate | 4.5 % | 6 % |
| interestRate | ![before](/.assets/a2869b3619b2202bec0a784d699d25ba40b9a69d.svg) | ![after](/.assets/b48581312bd06728cd9d8bb3dd633f5c9074262c.svg) |

#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 25,000,000 USDC | 18,000,000 USDC |
| borrowCap | 20,000,000 USDC | 15,500,000 USDC |
| interestRateStrategy | [0x3832311560d3B457E9cC35e5b8e06EB167D8c17D](https://optimistic.etherscan.io/address/0x3832311560d3B457E9cC35e5b8e06EB167D8c17D) | [0x769EbC5106bF09D9A665CCb691e1907612b57F16](https://optimistic.etherscan.io/address/0x769EbC5106bF09D9A665CCb691e1907612b57F16) |
| variableRateSlope1 | 5 % | 7 % |
| variableRateSlope2 | 60 % | 80 % |
| baseStableBorrowRate | 6 % | 8 % |
| interestRate | ![before](/.assets/423a65de6b833dbe263dbf86bf7999c668378b41.svg) | ![after](/.assets/30004f8456edabc18f0ed307b8a79983ab437388.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85": {
      "interestRateStrategy": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0xB57Ff919A953424d6B143ABfD6740A225eab953e"
      },
      "liquidationThreshold": {
        "from": 8500,
        "to": 8000
      },
      "ltv": {
        "from": 8000,
        "to": 7700
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "borrowCap": {
        "from": 20000000,
        "to": 15500000
      },
      "interestRateStrategy": {
        "from": "0x3832311560d3B457E9cC35e5b8e06EB167D8c17D",
        "to": "0x769EbC5106bF09D9A665CCb691e1907612b57F16"
      },
      "supplyCap": {
        "from": 25000000,
        "to": 18000000
      }
    }
  },
  "strategies": {
    "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85": {
      "address": {
        "from": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "to": "0xB57Ff919A953424d6B143ABfD6740A225eab953e"
      },
      "baseStableBorrowRate": {
        "from": "45000000000000000000000000",
        "to": "60000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "35000000000000000000000000",
        "to": "50000000000000000000000000"
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "address": {
        "from": "0x3832311560d3B457E9cC35e5b8e06EB167D8c17D",
        "to": "0x769EbC5106bF09D9A665CCb691e1907612b57F16"
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