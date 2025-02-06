## Reserve changes

### Reserve altered

#### WETH ([0x4200000000000000000000000000000000000006](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,584.0498 WETH [5584049868928753680973] | 5,588.7505 WETH [5588750531216767878084] |
| virtualBalance | 5,584.0498 WETH [5584049868928753680973] | 5,588.7505 WETH [5588750531216767878084] |


#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 717,908.1415 USDC [717908141518] | 722,392.6119 USDC [722392611977] |
| virtualBalance | 717,831.0946 USDC [717831094656] | 722,315.5651 USDC [722315565115] |


#### USDT ([0x94b008aA00579c1307B0EF2c499aD98a8ce58e58](https://optimistic.etherscan.io/address/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 4,591,173.7321 USDT [4591173732102] | 4,593,443.9668 USDT [4593443966828] |
| virtualBalance | 4,591,114.4777 USDT [4591114477702] | 4,593,384.7124 USDT [4593384712428] |


## Raw diff

```json
{
  "reserves": {
    "0x4200000000000000000000000000000000000006": {
      "aTokenUnderlyingBalance": {
        "from": "5584049868928753680973",
        "to": "5588750531216767878084"
      },
      "virtualBalance": {
        "from": "5584049868928753680973",
        "to": "5588750531216767878084"
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "aTokenUnderlyingBalance": {
        "from": "717908141518",
        "to": "722392611977"
      },
      "virtualBalance": {
        "from": "717831094656",
        "to": "722315565115"
      }
    },
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
      "aTokenUnderlyingBalance": {
        "from": "4591173732102",
        "to": "4593443966828"
      },
      "virtualBalance": {
        "from": "4591114477702",
        "to": "4593384712428"
      }
    }
  }
}
```