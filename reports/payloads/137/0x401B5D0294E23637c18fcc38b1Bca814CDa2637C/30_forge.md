## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.058 | 1.058 |
| variableBorrowIndex | 1.083 | 1.083 |
| currentLiquidityRate | 9.502 % | 46.862 % |
| currentVariableBorrowRate | 13.856 % | 65.604 % |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.053 | 1.053 |
| variableBorrowIndex | 1.081 | 1.081 |
| currentLiquidityRate | 3.795 % | 4.316 % |
| currentVariableBorrowRate | 5.298 % | 5.654 % |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.075 | 1.075 |
| variableBorrowIndex | 1.1 | 1.1 |
| currentLiquidityRate | 7.53 % | 27.454 % |
| currentVariableBorrowRate | 9.506 % | 34.455 % |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "currentLiquidityRate": {
        "from": "95019145780241332417860780",
        "to": "468622438921949715334836910"
      },
      "currentVariableBorrowRate": {
        "from": "138562507113754635866298048",
        "to": "656039436423307297576827832"
      },
      "liquidityIndex": {
        "from": "1057827488037021961465517814",
        "to": "1057827526284306701243403605"
      },
      "variableBorrowIndex": {
        "from": "1082796105067588897217473098",
        "to": "1082796162158512275030793856"
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "currentLiquidityRate": {
        "from": "37946481087717341252854421",
        "to": "43161734706754816540856462"
      },
      "currentVariableBorrowRate": {
        "from": "52976532138198898174544250",
        "to": "56544254393990046625629432"
      },
      "liquidityIndex": {
        "from": "1053291378871612325746310496",
        "to": "1053291589259880668035167918"
      },
      "variableBorrowIndex": {
        "from": "1080898016645310082556041855",
        "to": "1080898318063728752585479781"
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "currentLiquidityRate": {
        "from": "75302799630726679729227671",
        "to": "274537291572535529068725605"
      },
      "currentVariableBorrowRate": {
        "from": "95059625893718505264691448",
        "to": "344553741459294634719090555"
      },
      "liquidityIndex": {
        "from": "1074674020400019621709261158",
        "to": "1074674205162490915157100992"
      },
      "variableBorrowIndex": {
        "from": "1100137350175978960023016961",
        "to": "1100137588940034051870023169"
      }
    }
  }
}
```