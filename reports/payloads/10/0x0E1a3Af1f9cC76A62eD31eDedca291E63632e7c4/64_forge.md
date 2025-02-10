## Reserve changes

### Reserve altered

#### WETH ([0x4200000000000000000000000000000000000006](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 4,722.9089 WETH [4722908976599080046713] | 4,727.6352 WETH [4727635221493534259786] |
| virtualBalance | 4,722.9089 WETH [4722908976599080046713] | 4,727.6352 WETH [4727635221493534259786] |


#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 757,954.8955 USDC [757954895537] | 762,439.3700 USDC [762439370075] |
| virtualBalance | 757,877.8486 USDC [757877848675] | 762,362.3232 USDC [762362323213] |


#### USDT ([0x94b008aA00579c1307B0EF2c499aD98a8ce58e58](https://optimistic.etherscan.io/address/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,466,363.1803 USDT [5466363180356] | 5,468,635.6513 USDT [5468635651391] |
| virtualBalance | 5,466,303.9259 USDT [5466303925956] | 5,468,576.3969 USDT [5468576396991] |


## Raw diff

```json
{
  "reserves": {
    "0x4200000000000000000000000000000000000006": {
      "aTokenUnderlyingBalance": {
        "from": "4722908976599080046713",
        "to": "4727635221493534259786"
      },
      "virtualBalance": {
        "from": "4722908976599080046713",
        "to": "4727635221493534259786"
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "aTokenUnderlyingBalance": {
        "from": "757954895537",
        "to": "762439370075"
      },
      "virtualBalance": {
        "from": "757877848675",
        "to": "762362323213"
      }
    },
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
      "aTokenUnderlyingBalance": {
        "from": "5466363180356",
        "to": "5468635651391"
      },
      "virtualBalance": {
        "from": "5466303925956",
        "to": "5468576396991"
      }
    }
  }
}
```