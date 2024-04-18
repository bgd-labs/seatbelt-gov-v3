## Reserve changes

### Reserve altered

#### CRV ([0x172370d5Cd63279eFa6d502DAB29171933a610AF](https://polygonscan.com/address/0x172370d5Cd63279eFa6d502DAB29171933a610AF))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.061 | 1.061 |
| variableBorrowIndex | 1.227 | 1.227 |
| currentLiquidityRate | 0.731 % | 0.776 % |
| currentVariableBorrowRate | 6.47 % | 6.608 % |


#### WETH ([0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619](https://polygonscan.com/address/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619))

| description | value before | value after |
| --- | --- | --- |
| currentLiquidityRate | 0.424 % | 0.43 % |
| currentVariableBorrowRate | 2.018 % | 2.028 % |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.066 | 1.066 |
| variableBorrowIndex | 1.096 | 1.096 |
| currentLiquidityRate | 12.886 % | 33.122 % |
| currentVariableBorrowRate | 15.871 % | 39.589 % |


#### BAL ([0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3](https://polygonscan.com/address/0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.116 | 1.116 |
| variableBorrowIndex | 1.348 | 1.348 |
| currentLiquidityRate | 2.976 % | 3.121 % |
| currentVariableBorrowRate | 12.919 % | 13.155 % |


## Raw diff

```json
{
  "reserves": {
    "0x172370d5Cd63279eFa6d502DAB29171933a610AF": {
      "currentLiquidityRate": {
        "from": "7306578232090367649318650",
        "to": "7757333461580519563828560"
      },
      "currentVariableBorrowRate": {
        "from": "64699838651683976177830214",
        "to": "66075483513551684109142924"
      },
      "liquidityIndex": {
        "from": "1061304888756206804613592341",
        "to": "1061308939364941879230155296"
      },
      "variableBorrowIndex": {
        "from": "1226530176529849725088638661",
        "to": "1226571629424737436973050792"
      }
    },
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": {
      "currentLiquidityRate": {
        "from": "4235578380739972770875593",
        "to": "4297522393336277461662604"
      },
      "currentVariableBorrowRate": {
        "from": "20183877215672429351569313",
        "to": "20282546705122825302688573"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "currentLiquidityRate": {
        "from": "128860731225129972869929646",
        "to": "331218431930471770125254586"
      },
      "currentVariableBorrowRate": {
        "from": "158708937533426262126418110",
        "to": "395885355913759172865662520"
      },
      "liquidityIndex": {
        "from": "1065578859328740597258050149",
        "to": "1065579042201437883785819658"
      },
      "variableBorrowIndex": {
        "from": "1096303402889331259074479116",
        "to": "1096303634615389794586708616"
      }
    },
    "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3": {
      "currentLiquidityRate": {
        "from": "29762745905354826498635356",
        "to": "31206808954547226129959343"
      },
      "currentVariableBorrowRate": {
        "from": "129191861030340184671360160",
        "to": "131547363074482556535096383"
      },
      "liquidityIndex": {
        "from": "1115682499578459449312981851",
        "to": "1115699830053045461918528151"
      },
      "variableBorrowIndex": {
        "from": "1348322080157344407305118659",
        "to": "1348412996148971601472057332"
      }
    }
  }
}
```