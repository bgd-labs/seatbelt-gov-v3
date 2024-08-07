## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 11,028,979.8613 USDC [11028979861343] | 10,883,502.7019 USDC [10883502701941] |
| virtualBalance | 11,028,801.6379 USDC [11028801637924] | 10,883,324.4785 USDC [10883324478522] |


#### WETH ([0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619](https://polygonscan.com/address/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 17,823.9661 WETH [17823966136588432061289] | 17,850.6776 WETH [17850677637667371607845] |
| virtualBalance | 17,823.9661 WETH [17823966136588432061289] | 17,850.6776 WETH [17850677637667371607845] |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 4,882,957.8212 DAI [4882957821294246423023018] | 5,168,780.7887 DAI [5168780788755948802068716] |
| virtualBalance | 4,882,801.1354 DAI [4882801135430455678306560] | 5,168,624.1028 DAI [5168624102892158057352258] |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 7,392,646.9928 USDT [7392646992861] | 7,710,452.7369 USDT [7710452736930] |
| virtualBalance | 7,392,591.2562 USDT [7392591256286] | 7,710,397.0003 USDT [7710397000355] |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "aTokenUnderlyingBalance": {
        "from": 11028979861343,
        "to": 10883502701941
      },
      "virtualBalance": {
        "from": 11028801637924,
        "to": 10883324478522
      }
    },
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": {
      "aTokenUnderlyingBalance": {
        "from": "17823966136588432061289",
        "to": "17850677637667371607845"
      },
      "virtualBalance": {
        "from": "17823966136588432061289",
        "to": "17850677637667371607845"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "aTokenUnderlyingBalance": {
        "from": "4882957821294246423023018",
        "to": "5168780788755948802068716"
      },
      "virtualBalance": {
        "from": "4882801135430455678306560",
        "to": "5168624102892158057352258"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "aTokenUnderlyingBalance": {
        "from": 7392646992861,
        "to": 7710452736930
      },
      "virtualBalance": {
        "from": 7392591256286,
        "to": 7710397000355
      }
    }
  }
}
```