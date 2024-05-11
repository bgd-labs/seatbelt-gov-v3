## Reserve changes

### Reserve altered

#### WMATIC ([0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270](https://polygonscan.com/address/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.045 | 1.045 |
| variableBorrowIndex | 1.117 | 1.117 |
| currentLiquidityRate | 1.371 % | 1.392 % |
| currentVariableBorrowRate | 3.38 % | 3.406 % |


#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.089 | 1.089 |
| variableBorrowIndex | 1.129 | 1.129 |
| currentLiquidityRate | 6.212 % | 6.303 % |
| currentVariableBorrowRate | 9.498 % | 9.569 % |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.082 | 1.082 |
| variableBorrowIndex | 1.12 | 1.12 |
| currentLiquidityRate | 4.425 % | 4.457 % |
| currentVariableBorrowRate | 7.7 % | 7.728 % |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.106 | 1.106 |
| variableBorrowIndex | 1.141 | 1.141 |
| currentLiquidityRate | 5.402 % | 5.289 % |
| currentVariableBorrowRate | 7.789 % | 7.705 % |


## Raw diff

```json
{
  "reserves": {
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
      "currentLiquidityRate": {
        "from": "13708196626884086956385029",
        "to": "13919259827547084681840246"
      },
      "currentVariableBorrowRate": {
        "from": "33798664454487062562693736",
        "to": "34057867211002174802933237"
      },
      "liquidityIndex": {
        "from": "1044761674645683445219916619",
        "to": "1044761681911943447389235603"
      },
      "variableBorrowIndex": {
        "from": "1116949029282476628025061252",
        "to": "1116949048435894059244461187"
      }
    },
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "currentLiquidityRate": {
        "from": "62116139445569682332108627",
        "to": "63026801569649260841499032"
      },
      "currentVariableBorrowRate": {
        "from": "94982153697522998576163146",
        "to": "95694360348697201679053214"
      },
      "liquidityIndex": {
        "from": "1088793301576741777748755576",
        "to": "1088793327311763295307011642"
      },
      "variableBorrowIndex": {
        "from": "1129372619811474648066984897",
        "to": "1129372660629680711105998601"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "currentLiquidityRate": {
        "from": "44251064327853097668762185",
        "to": "44569676173217273236744871"
      },
      "currentVariableBorrowRate": {
        "from": "76996577441888789193280513",
        "to": "77275160248847366856871004"
      },
      "liquidityIndex": {
        "from": "1081667293164023751606850174",
        "to": "1081667308341893161530730894"
      },
      "variableBorrowIndex": {
        "from": "1120013484886018516534779631",
        "to": "1120013512231657143015728724"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "currentLiquidityRate": {
        "from": "54021701753771310614551560",
        "to": "52886232937621619662533592"
      },
      "currentVariableBorrowRate": {
        "from": "77888988887594842677428664",
        "to": "77054280488890897935309594"
      },
      "liquidityIndex": {
        "from": "1105980587146655635908300174",
        "to": "1105981045631014104959465996"
      },
      "variableBorrowIndex": {
        "from": "1140939758931275820631910935",
        "to": "1140940440873636868900109114"
      }
    }
  }
}
```