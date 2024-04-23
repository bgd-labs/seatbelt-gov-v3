## Reserve changes

### Reserves altered

#### MAI ([0x3F56e0c36d275367b8C502090EDF38289b3dEa0d](https://arbiscan.io/address/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d))

| description | value before | value after |
| --- | --- | --- |
| liquidationThreshold | 80 % | 1 % |
| reserveFactor | 20 % | 95 % |
| interestRateStrategy | [0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E](https://arbiscan.io/address/0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E) | [0xb02381b1d27aA9845e5012083CA288c1818884f0](https://arbiscan.io/address/0xb02381b1d27aA9845e5012083CA288c1818884f0) |
| optimalUsageRatio | 80 % | 45 % |
| variableRateSlope2 | 75 % | 300 % |
| maxExcessUsageRatio | 20 % | 55 % |
| interestRate | ![before](/.assets/b6633dd2f4f5c6838cae0fccff4b863c502f9e81.svg) | ![after](/.assets/bc265e79c62696f792b8b143c1721f21634bf282.svg) |

## Raw diff

```json
{
  "reserves": {
    "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d": {
      "interestRateStrategy": {
        "from": "0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E",
        "to": "0xb02381b1d27aA9845e5012083CA288c1818884f0"
      },
      "liquidationThreshold": {
        "from": 8000,
        "to": 100
      },
      "reserveFactor": {
        "from": 2000,
        "to": 9500
      }
    }
  },
  "strategies": {
    "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d": {
      "address": {
        "from": "0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E",
        "to": "0xb02381b1d27aA9845e5012083CA288c1818884f0"
      },
      "maxExcessUsageRatio": {
        "from": "200000000000000000000000000",
        "to": "550000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "800000000000000000000000000",
        "to": "450000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "750000000000000000000000000",
        "to": "3000000000000000000000000000"
      }
    }
  }
}
```