## Reserve changes

### Reserve altered

#### WMATIC ([0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270](https://polygonscan.com/address/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.045 | 1.045 |
| variableBorrowIndex | 1.117 | 1.117 |
| currentLiquidityRate | 1.233 % | 1.252 % |
| currentVariableBorrowRate | 3.206 % | 3.231 % |


#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.088 | 1.088 |
| variableBorrowIndex | 1.128 | 1.128 |
| currentLiquidityRate | 5.868 % | 5.951 % |
| currentVariableBorrowRate | 9.23 % | 9.298 % |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.081 | 1.081 |
| variableBorrowIndex | 1.119 | 1.119 |
| currentLiquidityRate | 4.625 % | 4.658 % |
| currentVariableBorrowRate | 7.873 % | 7.901 % |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.105 | 1.105 |
| variableBorrowIndex | 1.14 | 1.14 |
| currentLiquidityRate | 5.225 % | 5.12 % |
| currentVariableBorrowRate | 7.658 % | 7.58 % |


## Raw diff

```json
{
  "reserves": {
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
      "currentLiquidityRate": {
        "from": "12334178573626604858222878",
        "to": "12524752227367682196469951"
      },
      "currentVariableBorrowRate": {
        "from": "32060071966059024088175004",
        "to": "32306800403021036138107257"
      },
      "liquidityIndex": {
        "from": "1044608374243481143246351173",
        "to": "1044608426539315653342208643"
      },
      "variableBorrowIndex": {
        "from": "1116535645496044354825118072",
        "to": "1116535790787634240597475179"
      }
    },
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "currentLiquidityRate": {
        "from": "58678117872486008550410209",
        "to": "59510300021391937904689332"
      },
      "currentVariableBorrowRate": {
        "from": "92304744126850953137129353",
        "to": "92975401261978595762172090"
      },
      "liquidityIndex": {
        "from": "1088049738569088254514746650",
        "to": "1088049997705408136339390750"
      },
      "variableBorrowIndex": {
        "from": "1128176515270852863745001680",
        "to": "1128176937943867280622363882"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "currentLiquidityRate": {
        "from": "46254020237504923787616020",
        "to": "46579094736892640003125267"
      },
      "currentVariableBorrowRate": {
        "from": "78731044647247076121183604",
        "to": "79009060729115283644836373"
      },
      "liquidityIndex": {
        "from": "1081107525773826780754269203",
        "to": "1081107766795089628336140908"
      },
      "variableBorrowIndex": {
        "from": "1119026038009737279582891492",
        "to": "1119026462652052286956098913"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "currentLiquidityRate": {
        "from": "52249299525736182117155820",
        "to": "51197909821722478884913365"
      },
      "currentVariableBorrowRate": {
        "from": "76583511692046345072845464",
        "to": "75797739329998761494439027"
      },
      "liquidityIndex": {
        "from": "1105310775757072538864683603",
        "to": "1105310805057789835442614474"
      },
      "variableBorrowIndex": {
        "from": "1139940210052463512539659978",
        "to": "1139940254345018558112372641"
      }
    }
  }
}
```