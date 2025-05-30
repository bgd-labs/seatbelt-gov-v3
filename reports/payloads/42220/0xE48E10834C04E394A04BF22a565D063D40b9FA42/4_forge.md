## Reserve changes

### Reserves added

#### WETH ([0xD221812de1BD094f35587EE8E174B07B6167D9Af](https://celoscan.io/address/0xD221812de1BD094f35587EE8E174B07B6167D9Af))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 500 WETH |
| borrowCap | 450 WETH |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x1FcD30A73D67639c1cD89ff5746E7585731c083B](https://celoscan.io/address/0x1FcD30A73D67639c1cD89ff5746E7585731c083B) |
| oracleDecimals | 8 |
| oracleDescription | ETH / USD |
| oracleLatestAnswer | 2551.69 |
| usageAsCollateralEnabled | true |
| ltv | 78 % [7800] |
| liquidationThreshold | 80 % [8000] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 15 % [1500] |
| aToken | [0xf385280F36e009C157697D25E0B802EfaBfd789c](https://celoscan.io/address/0xf385280F36e009C157697D25E0B802EfaBfd789c) |
| variableDebtToken | [0x6508cff7c5FbA053Af00a4E894500e6fA00274B7](https://celoscan.io/address/0x6508cff7c5FbA053Af00a4E894500e6fA00274B7) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x8B62D241Bf59f40991DCd18531683156d7013355](https://celoscan.io/address/0x8B62D241Bf59f40991DCd18531683156d7013355) |
| aTokenName | Aave Celo WETH |
| aTokenSymbol | aCelWETH |
| aTokenUnderlyingBalance | 0.05 WETH [50000000000000000] |
| id | 5 |
| isPaused | false |
| variableDebtTokenName | Aave Celo Variable Debt WETH |
| variableDebtTokenSymbol | variableDebtCelWETH |
| virtualAccountingActive | true |
| virtualBalance | 0.05 WETH [50000000000000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 82.7 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 2.7 % |
| variableRateSlope2 | 80 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=27000000000000000000000000&variableRateSlope2=800000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=827000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0xD221812de1BD094f35587EE8E174B07B6167D9Af": {
      "from": null,
      "to": {
        "aToken": "0xf385280F36e009C157697D25E0B802EfaBfd789c",
        "aTokenName": "Aave Celo WETH",
        "aTokenSymbol": "aCelWETH",
        "aTokenUnderlyingBalance": "50000000000000000",
        "borrowCap": 450,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 5,
        "interestRateStrategy": "0x8B62D241Bf59f40991DCd18531683156d7013355",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10750,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 8000,
        "ltv": 7800,
        "oracle": "0x1FcD30A73D67639c1cD89ff5746E7585731c083B",
        "oracleDecimals": 8,
        "oracleDescription": "ETH / USD",
        "oracleLatestAnswer": "255169000000",
        "reserveFactor": 1500,
        "supplyCap": 500,
        "symbol": "WETH",
        "underlying": "0xD221812de1BD094f35587EE8E174B07B6167D9Af",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x6508cff7c5FbA053Af00a4E894500e6fA00274B7",
        "variableDebtTokenName": "Aave Celo Variable Debt WETH",
        "variableDebtTokenSymbol": "variableDebtCelWETH",
        "virtualAccountingActive": true,
        "virtualBalance": "50000000000000000"
      }
    }
  },
  "strategies": {
    "0xD221812de1BD094f35587EE8E174B07B6167D9Af": {
      "from": null,
      "to": {
        "address": "0x8B62D241Bf59f40991DCd18531683156d7013355",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "827000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "variableRateSlope1": "27000000000000000000000000",
        "variableRateSlope2": "800000000000000000000000000"
      }
    }
  }
}
```