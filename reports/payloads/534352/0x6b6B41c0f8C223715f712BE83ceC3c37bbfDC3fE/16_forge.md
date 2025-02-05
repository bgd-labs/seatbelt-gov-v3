## Reserve changes

### Reserves added

#### weETH ([0x01f0a31698C4d065659b9bdC21B3610292a1c506](https://scrollscan.com/address/0x01f0a31698C4d065659b9bdC21B3610292a1c506))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 2,000 weETH |
| borrowCap | 400 weETH |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x32f924C0e0F1Abf5D1ff35B05eBc5E844dEdD2A9](https://scrollscan.com/address/0x32f924C0e0F1Abf5D1ff35B05eBc5E844dEdD2A9) |
| oracleDecimals | 8 |
| oracleDescription | Capped weETH / eETH(ETH) / USD |
| oracleLatestAnswer | 2639.18342932 |
| usageAsCollateralEnabled | true |
| ltv | 72.5 % [7250] |
| liquidationThreshold | 75 % [7500] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 15 % [1500] |
| aToken | [0xd80A5e16DBDC52Bd1C947CEDfA22c562Be9129C8](https://scrollscan.com/address/0xd80A5e16DBDC52Bd1C947CEDfA22c562Be9129C8) |
| variableDebtToken | [0x009D88C6a6B4CaA240b71C98BA93732e26F2A55A](https://scrollscan.com/address/0x009D88C6a6B4CaA240b71C98BA93732e26F2A55A) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0](https://scrollscan.com/address/0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0) |
| aTokenName | Aave Scroll weETH |
| aTokenSymbol | aScrweETH |
| aTokenUnderlyingBalance | 0.005 weETH [5000000000000000] |
| id | 3 |
| isPaused | false |
| variableDebtTokenName | Aave Scroll Variable Debt weETH |
| variableDebtTokenSymbol | variableDebtScrweETH |
| virtualAccountingActive | true |
| virtualBalance | 0.005 weETH [5000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 307 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 7 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3070000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "from": null,
      "to": {
        "aToken": "0xd80A5e16DBDC52Bd1C947CEDfA22c562Be9129C8",
        "aTokenName": "Aave Scroll weETH",
        "aTokenSymbol": "aScrweETH",
        "aTokenUnderlyingBalance": "5000000000000000",
        "borrowCap": 400,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 3,
        "interestRateStrategy": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10750,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7500,
        "ltv": 7250,
        "oracle": "0x32f924C0e0F1Abf5D1ff35B05eBc5E844dEdD2A9",
        "oracleDecimals": 8,
        "oracleDescription": "Capped weETH / eETH(ETH) / USD",
        "oracleLatestAnswer": "263918342932",
        "reserveFactor": 1500,
        "supplyCap": 2000,
        "symbol": "weETH",
        "underlying": "0x01f0a31698C4d065659b9bdC21B3610292a1c506",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x009D88C6a6B4CaA240b71C98BA93732e26F2A55A",
        "variableDebtTokenName": "Aave Scroll Variable Debt weETH",
        "variableDebtTokenSymbol": "variableDebtScrweETH",
        "virtualAccountingActive": true,
        "virtualBalance": "5000000000000000"
      }
    }
  },
  "strategies": {
    "0x01f0a31698C4d065659b9bdC21B3610292a1c506": {
      "from": null,
      "to": {
        "address": "0xEC93d0BBA1b1e635ba0Fff4786dB323db49D99F0",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "3070000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "variableRateSlope1": "70000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```