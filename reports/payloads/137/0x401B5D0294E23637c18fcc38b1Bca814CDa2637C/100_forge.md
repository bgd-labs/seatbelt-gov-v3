## Reserve changes

### Reserve altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| ltv | 75 % [7500] | 0 % [0] |
| reserveFactor | 50 % [5000] | 60 % [6000] |


#### USDC ([0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359](https://polygonscan.com/address/0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359))

| description | value before | value after |
| --- | --- | --- |
| ltv | 75 % [7500] | 0 % [0] |
| reserveFactor | 10 % [1000] | 20 % [2000] |


#### DAI ([0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063](https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063))

| description | value before | value after |
| --- | --- | --- |
| ltv | 63 % [6300] | 0 % [0] |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| ltv | 75 % [7500] | 0 % [0] |
| reserveFactor | 10 % [1000] | 25 % [2500] |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "ltv": {
        "from": 7500,
        "to": 0
      },
      "reserveFactor": {
        "from": 5000,
        "to": 6000
      }
    },
    "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": {
      "ltv": {
        "from": 7500,
        "to": 0
      },
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      }
    },
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      "ltv": {
        "from": 6300,
        "to": 0
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "ltv": {
        "from": 7500,
        "to": 0
      },
      "reserveFactor": {
        "from": 1000,
        "to": 2500
      }
    }
  }
}
```