## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 11,306,228.1089 USDC [11306228108927] | 11,155,691.8503 USDC [11155691850308] |
| virtualBalance | 11,306,049.8855 USDC [11306049885508] | 11,155,513.6268 USDC [11155513626889] |


#### WETH ([0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619](https://polygonscan.com/address/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 18,401.3348 WETH [18401334835616183300587] | 18,428.2660 WETH [18428266028717878450329] |
| virtualBalance | 18,401.3348 WETH [18401334835616183300587] | 18,428.2660 WETH [18428266028717878450329] |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,653,388.1654 DAI [5653388165487301071560371] | 5,943,067.6743 DAI [5943067674343565169378472] |
| virtualBalance | 5,653,231.4795 DAI [5653231479569510326843913] | 5,942,910.9884 DAI [5942910988425774424662014] |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 7,487,699.0863 USDT [7487699086328] | 7,829,879.5705 USDT [7829879570592] |
| virtualBalance | 7,487,643.3497 USDT [7487643349753] | 7,829,823.8340 USDT [7829823834017] |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "aTokenUnderlyingBalance": {
        "from": 11306228108927,
        "to": 11155691850308
      },
      "virtualBalance": {
        "from": 11306049885508,
        "to": 11155513626889
      }
    },
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": {
      "aTokenUnderlyingBalance": {
        "from": "18401334835616183300587",
        "to": "18428266028717878450329"
      },
      "virtualBalance": {
        "from": "18401334835616183300587",
        "to": "18428266028717878450329"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "aTokenUnderlyingBalance": {
        "from": "5653388165487301071560371",
        "to": "5943067674343565169378472"
      },
      "virtualBalance": {
        "from": "5653231479569510326843913",
        "to": "5942910988425774424662014"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "aTokenUnderlyingBalance": {
        "from": 7487699086328,
        "to": 7829879570592
      },
      "virtualBalance": {
        "from": 7487643349753,
        "to": 7829823834017
      }
    }
  }
}
```