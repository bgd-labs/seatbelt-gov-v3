## Reserve changes

### Reserves altered

#### weETH ([0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee](https://etherscan.io/address/0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 48,000 weETH | 84,000 weETH |
| borrowCap | 3,200 weETH | 29,500 weETH |
| reserveFactor | 15 % | 45 % |
| interestRateStrategy | [0x48AF11111764E710fcDcE2750db848C63edab57B](https://etherscan.io/address/0x48AF11111764E710fcDcE2750db848C63edab57B) | [0xf1e5355cEcaA71036CE21cdF8F9d04061B1BC6E1](https://etherscan.io/address/0xf1e5355cEcaA71036CE21cdF8F9d04061B1BC6E1) |
| optimalUsageRatio | 45 % | 35 % |
| maxExcessUsageRatio | 55 % | 65 % |
| interestRate | ![before](/.assets/aa2e8a5322392ad3d4ae80453f4e281a8da627cc.svg) | ![after](/.assets/c0586f821b0abf653f66486a1ee41a98bbfcf7ab.svg) |

## Raw diff

```json
{
  "reserves": {
    "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee": {
      "borrowCap": {
        "from": 3200,
        "to": 29500
      },
      "interestRateStrategy": {
        "from": "0x48AF11111764E710fcDcE2750db848C63edab57B",
        "to": "0xf1e5355cEcaA71036CE21cdF8F9d04061B1BC6E1"
      },
      "reserveFactor": {
        "from": 1500,
        "to": 4500
      },
      "supplyCap": {
        "from": 48000,
        "to": 84000
      }
    }
  },
  "strategies": {
    "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee": {
      "address": {
        "from": "0x48AF11111764E710fcDcE2750db848C63edab57B",
        "to": "0xf1e5355cEcaA71036CE21cdF8F9d04061B1BC6E1"
      },
      "maxExcessUsageRatio": {
        "from": "550000000000000000000000000",
        "to": "650000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "350000000000000000000000000"
      }
    }
  }
}
```