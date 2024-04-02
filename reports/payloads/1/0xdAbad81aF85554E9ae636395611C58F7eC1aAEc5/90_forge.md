## Reserve changes

### Reserve altered

#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.055 | 1.055 |
| variableBorrowIndex | 1.074 | 1.074 |
| currentLiquidityRate | 5.202 % | 4.039 % |
| currentVariableBorrowRate | 7.687 % | 5.992 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.022 | 1.022 |
| variableBorrowIndex | 1.039 | 1.039 |
| currentLiquidityRate | 1.727 % | 1.726 % |
| currentVariableBorrowRate | 2.514 % | 2.513 % |


## Raw diff

```json
{
  "reserves": {
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "52018709623117858743966909",
        "to": "40387502107795739083606096"
      },
      "currentVariableBorrowRate": {
        "from": "76872600818326577495902493",
        "to": "59916610279284168228780390"
      },
      "liquidityIndex": {
        "from": "1055204648187817351396555426",
        "to": "1055205546318152223158842223"
      },
      "variableBorrowIndex": {
        "from": "1074453646757430989255907681",
        "to": "1074454998215657611094972250"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "17273557342493039511047733",
        "to": "17260125418762253462665475"
      },
      "currentVariableBorrowRate": {
        "from": "25144279240987697177034500",
        "to": "25134501239971877332473827"
      },
      "liquidityIndex": {
        "from": "1022450409287882821034172542",
        "to": "1022450416008337834234218868"
      },
      "variableBorrowIndex": {
        "from": "1039479148758483361299054823",
        "to": "1039479158704051891049745418"
      }
    }
  }
}
```