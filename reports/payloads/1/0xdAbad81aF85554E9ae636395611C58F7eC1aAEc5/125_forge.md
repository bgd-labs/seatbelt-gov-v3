## Reserve changes

### Reserve altered

#### WBTC ([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599](https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.002 | 1.002 |
| variableBorrowIndex | 1.015 | 1.015 |
| currentLiquidityRate | 0.084 % | 0.084 % |
| currentVariableBorrowRate | 0.965 % | 0.965 % |


#### LINK ([0x514910771AF9Ca656af840dff83E8264EcF986CA](https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1 | 1 |
| variableBorrowIndex | 1.005 | 1.005 |
| currentLiquidityRate | 0 % | 0 % |
| currentVariableBorrowRate | 0.079 % | 0.079 % |


#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.065 | 1.065 |
| variableBorrowIndex | 1.089 | 1.089 |
| currentLiquidityRate | 5.763 % | 5.946 % |
| currentVariableBorrowRate | 8.67 % | 8.806 % |


#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.065 | 1.065 |
| variableBorrowIndex | 1.084 | 1.084 |
| currentLiquidityRate | 5.479 % | 5.491 % |
| currentVariableBorrowRate | 7.717 % | 7.726 % |


#### SNX ([0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F](https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.021 | 1.021 |
| variableBorrowIndex | 1.086 | 1.086 |
| currentLiquidityRate | 0.01 % | 0.009 % |
| currentVariableBorrowRate | 3.09 % | 3.087 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.024 | 1.024 |
| variableBorrowIndex | 1.042 | 1.042 |
| currentLiquidityRate | 1.531 % | 1.53 % |
| currentVariableBorrowRate | 2.367 % | 2.367 % |


## Raw diff

```json
{
  "reserves": {
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
      "currentLiquidityRate": {
        "from": "838306981810902136670735",
        "to": "838249570854823252207392"
      },
      "currentVariableBorrowRate": {
        "from": "9651177140702130358557860",
        "to": "9650846657474745748123131"
      },
      "liquidityIndex": {
        "from": "1002064752616935762197946257",
        "to": "1002064766681496891268431629"
      },
      "variableBorrowIndex": {
        "from": "1015253279697753442808650699",
        "to": "1015253443749945812822099944"
      }
    },
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
      "currentLiquidityRate": {
        "from": "3188918782076849311532",
        "to": "3174810213956032158209"
      },
      "currentVariableBorrowRate": {
        "from": "787443674785306384666264",
        "to": "785699820713501547383676"
      },
      "liquidityIndex": {
        "from": "1000455261641386316472047957",
        "to": "1000455263635974921443045263"
      },
      "variableBorrowIndex": {
        "from": "1005085063529804215325575328",
        "to": "1005085558335428327060432735"
      }
    },
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "57630433226839582421044028",
        "to": "59455984021098719553145749"
      },
      "currentVariableBorrowRate": {
        "from": "86700709510290465789269486",
        "to": "88063206565387419208285509"
      },
      "liquidityIndex": {
        "from": "1064559724883778919958369412",
        "to": "1064560028370649479952808053"
      },
      "variableBorrowIndex": {
        "from": "1088801112624912375404729952",
        "to": "1088801579595246552945680755"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "currentLiquidityRate": {
        "from": "54794409606188799001030149",
        "to": "54913612515753872282926950"
      },
      "currentVariableBorrowRate": {
        "from": "77174568917676613626073814",
        "to": "77258468310117441133736559"
      },
      "liquidityIndex": {
        "from": "1065129550642845859972136568",
        "to": "1065130927551134542603243005"
      },
      "variableBorrowIndex": {
        "from": "1084012287020781505830563881",
        "to": "1084014260693511540719857288"
      }
    },
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "currentLiquidityRate": {
        "from": "96936326930616961562618",
        "to": "92593443735891997158163"
      },
      "currentVariableBorrowRate": {
        "from": "30904791793645600289455141",
        "to": "30865359977999468855056659"
      },
      "liquidityIndex": {
        "from": "1021077018733869343580880298",
        "to": "1021077058054475036326848793"
      },
      "variableBorrowIndex": {
        "from": "1085775005117957584272023678",
        "to": "1085788335526679116917058876"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "15306140695660134740064521",
        "to": "15302571722900738483923721"
      },
      "currentVariableBorrowRate": {
        "from": "23669067524687449798768361",
        "to": "23666307874695966409750043"
      },
      "liquidityIndex": {
        "from": "1024136287322412072963859501",
        "to": "1024136311181733389992553499"
      },
      "variableBorrowIndex": {
        "from": "1042143975361597371957918736",
        "to": "1042144012905853929556069324"
      }
    }
  }
}
```