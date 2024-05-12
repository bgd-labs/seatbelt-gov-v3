## Reserve changes

### Reserve altered

#### WMATIC ([0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270](https://polygonscan.com/address/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.045 | 1.045 |
| variableBorrowIndex | 1.117 | 1.117 |
| currentLiquidityRate | 1.357 % | 1.378 % |
| currentVariableBorrowRate | 3.362 % | 3.388 % |


#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.089 | 1.089 |
| variableBorrowIndex | 1.13 | 1.13 |
| currentLiquidityRate | 6.348 % | 6.443 % |
| currentVariableBorrowRate | 9.605 % | 9.678 % |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.082 | 1.082 |
| variableBorrowIndex | 1.12 | 1.12 |
| currentLiquidityRate | 4.382 % | 4.414 % |
| currentVariableBorrowRate | 7.662 % | 7.69 % |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.106 | 1.106 |
| variableBorrowIndex | 1.141 | 1.141 |
| currentLiquidityRate | 5.395 % | 5.281 % |
| currentVariableBorrowRate | 7.784 % | 7.7 % |


## Raw diff

```json
{
  "reserves": {
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
      "currentLiquidityRate": {
        "from": "13566910628502113645858590",
        "to": "13775771136141708302056891"
      },
      "currentVariableBorrowRate": {
        "from": "33624037320174825645955256",
        "to": "33881867245059104404096784"
      },
      "liquidityIndex": {
        "from": "1044800785042521678290618658",
        "to": "1044800890220230227599758935"
      },
      "variableBorrowIndex": {
        "from": "1117050786447030878473173379",
        "to": "1117051065143895014869148891"
      }
    },
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "currentLiquidityRate": {
        "from": "63483986263427418592969823",
        "to": "64425930973730894014166713"
      },
      "currentVariableBorrowRate": {
        "from": "96050579037187833886876324",
        "to": "96779251375881054824813987"
      },
      "liquidityIndex": {
        "from": "1088977101142653138942658672",
        "to": "1088979755873356994347347647"
      },
      "variableBorrowIndex": {
        "from": "1129661938375415402298411794",
        "to": "1129666105023487422067376579"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "currentLiquidityRate": {
        "from": "43823403335219845409300816",
        "to": "44137612708802508039134990"
      },
      "currentVariableBorrowRate": {
        "from": "76621206288550861416244480",
        "to": "76897280992676977307096823"
      },
      "liquidityIndex": {
        "from": "1081799037985229622385057095",
        "to": "1081799080077671147620562481"
      },
      "variableBorrowIndex": {
        "from": "1120247059816263126916068406",
        "to": "1120247136026662309820557189"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "currentLiquidityRate": {
        "from": "53951152259922979360945582",
        "to": "52811352579359365419337518"
      },
      "currentVariableBorrowRate": {
        "from": "77837793598539209219948397",
        "to": "76999314857790072378163353"
      },
      "liquidityIndex": {
        "from": "1106144263254735252876862608",
        "to": "1106144494123787235759249734"
      },
      "variableBorrowIndex": {
        "from": "1141181519147553059855891260",
        "to": "1141181862783458274283711417"
      }
    }
  }
}
```