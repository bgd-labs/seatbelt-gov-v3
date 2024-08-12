## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 11,330,118.0111 USDC [11330118011162] | 11,176,944.6958 USDC [11176944695812] |
| virtualBalance | 11,329,939.7877 USDC [11329939787743] | 11,176,766.4723 USDC [11176766472393] |


#### WETH ([0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619](https://polygonscan.com/address/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 18,453.9575 WETH [18453957573240441340345] | 18,480.9394 WETH [18480939472241303268720] |
| virtualBalance | 18,453.9575 WETH [18453957573240441340345] | 18,480.9394 WETH [18480939472241303268720] |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,189,973.3823 DAI [5189973382396075563008151] | 5,480,576.5665 DAI [5480576566512815983053523] |
| virtualBalance | 5,189,816.6964 DAI [5189816696442284818291693] | 5,480,419.8805 DAI [5480419880559025238337065] |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 8,028,966.8072 USDT [8028966807271] | 8,376,615.5717 USDT [8376615571708] |
| virtualBalance | 8,028,911.0706 USDT [8028911070696] | 8,376,559.8351 USDT [8376559835133] |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "aTokenUnderlyingBalance": {
        "from": 11330118011162,
        "to": 11176944695812
      },
      "virtualBalance": {
        "from": 11329939787743,
        "to": 11176766472393
      }
    },
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": {
      "aTokenUnderlyingBalance": {
        "from": "18453957573240441340345",
        "to": "18480939472241303268720"
      },
      "virtualBalance": {
        "from": "18453957573240441340345",
        "to": "18480939472241303268720"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "aTokenUnderlyingBalance": {
        "from": "5189973382396075563008151",
        "to": "5480576566512815983053523"
      },
      "virtualBalance": {
        "from": "5189816696442284818291693",
        "to": "5480419880559025238337065"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "aTokenUnderlyingBalance": {
        "from": 8028966807271,
        "to": 8376615571708
      },
      "virtualBalance": {
        "from": 8028911070696,
        "to": 8376559835133
      }
    }
  }
}
```