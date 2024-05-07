## Reserve changes

### Reserve altered

#### WBTC ([0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599](https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.002 | 1.002 |
| variableBorrowIndex | 1.015 | 1.015 |
| currentLiquidityRate | 0.082 % | 0.082 % |
| currentVariableBorrowRate | 0.956 % | 0.956 % |


#### LINK ([0x514910771AF9Ca656af840dff83E8264EcF986CA](https://etherscan.io/address/0x514910771AF9Ca656af840dff83E8264EcF986CA))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1 | 1 |
| variableBorrowIndex | 1.005 | 1.005 |
| currentLiquidityRate | 0 % | 0 % |
| currentVariableBorrowRate | 0.076 % | 0.076 % |


#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.064 | 1.064 |
| variableBorrowIndex | 1.087 | 1.087 |
| currentLiquidityRate | 5.402 % | 5.571 % |
| currentVariableBorrowRate | 8.394 % | 8.524 % |


#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.064 | 1.064 |
| variableBorrowIndex | 1.083 | 1.083 |
| currentLiquidityRate | 5.326 % | 5.338 % |
| currentVariableBorrowRate | 7.609 % | 7.617 % |


#### SNX ([0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F](https://etherscan.io/address/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.021 | 1.021 |
| variableBorrowIndex | 1.085 | 1.085 |
| currentLiquidityRate | 0.01 % | 0.009 % |
| currentVariableBorrowRate | 3.093 % | 3.088 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.024 | 1.024 |
| variableBorrowIndex | 1.042 | 1.042 |
| currentLiquidityRate | 1.435 % | 1.435 % |
| currentVariableBorrowRate | 2.292 % | 2.292 % |


## Raw diff

```json
{
  "reserves": {
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
      "currentLiquidityRate": {
        "from": "822165017931159486139530",
        "to": "822114303702349806773205"
      },
      "currentVariableBorrowRate": {
        "from": "9557806686631495199486129",
        "to": "9557511901363530820966318"
      },
      "liquidityIndex": {
        "from": "1002052210707467828523370450",
        "to": "1002052271211078498372234657"
      },
      "variableBorrowIndex": {
        "from": "1015115287841333769782242412",
        "to": "1015116000375528698252659788"
      }
    },
    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
      "currentLiquidityRate": {
        "from": "2973219684430439173381",
        "to": "2959974588242873615950"
      },
      "currentVariableBorrowRate": {
        "from": "760346006598550613181991",
        "to": "758650521900933485844891"
      },
      "liquidityIndex": {
        "from": "1000455192889345088418292701",
        "to": "1000455193352282830736292844"
      },
      "variableBorrowIndex": {
        "from": "1005074317023079909375963359",
        "to": "1005074435957461184977821266"
      }
    },
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "54019762687082983099094609",
        "to": "55706632718693740673835077"
      },
      "currentVariableBorrowRate": {
        "from": "83940788670723113450308475",
        "to": "85241319373442774760528016"
      },
      "liquidityIndex": {
        "from": "1063712533128830305141709863",
        "to": "1063713954360721267164188886"
      },
      "variableBorrowIndex": {
        "from": "1087486865407849661109008288",
        "to": "1087489123208072793109312875"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "currentLiquidityRate": {
        "from": "53264329934671767371732321",
        "to": "53381451017276151088964187"
      },
      "currentVariableBorrowRate": {
        "from": "76089428174061256301824395",
        "to": "76173037436566917554928075"
      },
      "liquidityIndex": {
        "from": "1064302200822355684962763943",
        "to": "1064303344100593685099700554"
      },
      "variableBorrowIndex": {
        "from": "1082833467459911752942968320",
        "to": "1082835129099504823480549941"
      }
    },
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F": {
      "currentLiquidityRate": {
        "from": "99196579095093732665567",
        "to": "94651845588015037384280"
      },
      "currentVariableBorrowRate": {
        "from": "30925275439247272965337534",
        "to": "30884061728554910121952076"
      },
      "liquidityIndex": {
        "from": "1021075610768583723343792304",
        "to": "1021075646226814689410306998"
      },
      "variableBorrowIndex": {
        "from": "1085305038829486627847494861",
        "to": "1085316788622413802705860946"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "14354320090749036843067507",
        "to": "14351202814443979446386251"
      },
      "currentVariableBorrowRate": {
        "from": "22921319314963675072503320",
        "to": "22918830309396043673541174"
      },
      "liquidityIndex": {
        "from": "1023908900564648615380607914",
        "to": "1023908906157310754829578025"
      },
      "variableBorrowIndex": {
        "from": "1041792440033804525662795774",
        "to": "1041792449120279896054309324"
      }
    }
  }
}
```