## Reserve changes

### Reserve altered

#### WBTC ([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599](https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.002 | 1.002 |
| variableBorrowIndex | 1.015 | 1.015 |
| currentLiquidityRate | 0.085 % | 0.085 % |
| currentVariableBorrowRate | 0.973 % | 0.973 % |


#### LINK ([0x514910771AF9Ca656af840dff83E8264EcF986CA](https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1 | 1 |
| variableBorrowIndex | 1.005 | 1.005 |
| currentLiquidityRate | 0 % | 0 % |
| currentVariableBorrowRate | 0.078 % | 0.078 % |


#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.064 | 1.064 |
| variableBorrowIndex | 1.089 | 1.089 |
| currentLiquidityRate | 5.541 % | 5.712 % |
| currentVariableBorrowRate | 8.501 % | 8.632 % |


#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.065 | 1.065 |
| variableBorrowIndex | 1.084 | 1.084 |
| currentLiquidityRate | 5.523 % | 5.535 % |
| currentVariableBorrowRate | 7.748 % | 7.757 % |


#### SNX ([0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F](https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.021 | 1.021 |
| variableBorrowIndex | 1.086 | 1.086 |
| currentLiquidityRate | 0.01 % | 0.009 % |
| currentVariableBorrowRate | 3.091 % | 3.087 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.024 | 1.024 |
| variableBorrowIndex | 1.042 | 1.042 |
| currentLiquidityRate | 1.563 % | 1.563 % |
| currentVariableBorrowRate | 2.392 % | 2.392 % |


## Raw diff

```json
{
  "reserves": {
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
      "currentLiquidityRate": {
        "from": "851635203484458461971092",
        "to": "851580066696489511108096"
      },
      "currentVariableBorrowRate": {
        "from": "9727596502759321618933956",
        "to": "9727281604370311267727800"
      },
      "liquidityIndex": {
        "from": "1002062120009342913986155051",
        "to": "1002062265163812370898784729"
      },
      "variableBorrowIndex": {
        "from": "1015225298663268950887422499",
        "to": "1015226978435899963321740303"
      }
    },
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
      "currentLiquidityRate": {
        "from": "3162418004530447957853",
        "to": "3148415340204960245089"
      },
      "currentVariableBorrowRate": {
        "from": "784164913772627005923807",
        "to": "782426911415066325910100"
      },
      "liquidityIndex": {
        "from": "1000455255060746796223396161",
        "to": "1000455255086028764236316766"
      },
      "variableBorrowIndex": {
        "from": "1005083429642792800359789676",
        "to": "1005083435940804380037568534"
      }
    },
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "55405640603465143962651848",
        "to": "57120041110429018355017061"
      },
      "currentVariableBorrowRate": {
        "from": "85010721014519674750176168",
        "to": "86315932161093919402809168"
      },
      "liquidityIndex": {
        "from": "1064400287401173550988096944",
        "to": "1064402643659498173254136315"
      },
      "variableBorrowIndex": {
        "from": "1088550226037772348582800616",
        "to": "1088553923356129934914983273"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "currentLiquidityRate": {
        "from": "55230578737565795976506394",
        "to": "55351018531931495631394704"
      },
      "currentVariableBorrowRate": {
        "from": "77481118834348082275635405",
        "to": "77565553294092093580569574"
      },
      "liquidityIndex": {
        "from": "1064973527246668936109858009",
        "to": "1064973751063656188850806386"
      },
      "variableBorrowIndex": {
        "from": "1083789122705562907630907848",
        "to": "1083789442238310561523538564"
      }
    },
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "currentLiquidityRate": {
        "from": "97869690050618692297497",
        "to": "93448387813046997603170"
      },
      "currentVariableBorrowRate": {
        "from": "30913253638422137335027219",
        "to": "30873130306127459575564320"
      },
      "liquidityIndex": {
        "from": "1021076609449992478989098852",
        "to": "1021076790796210202446662360"
      },
      "variableBorrowIndex": {
        "from": "1085637374946732573512271279",
        "to": "1085698278642329359261448641"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "15630194870297409719803199",
        "to": "15626596983917006015209254"
      },
      "currentVariableBorrowRate": {
        "from": "23918310222090661525480787",
        "to": "23915557207297604655387302"
      },
      "liquidityIndex": {
        "from": "1024093593705602100918884341",
        "to": "1024093995702421245802806726"
      },
      "variableBorrowIndex": {
        "from": "1042077018599990030246367444",
        "to": "1042077644563500783648026745"
      }
    }
  }
}
```