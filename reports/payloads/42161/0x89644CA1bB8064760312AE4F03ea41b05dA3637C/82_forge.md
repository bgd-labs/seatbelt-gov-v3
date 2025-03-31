## Reserve changes

### Reserves added

#### rsETH ([0x4186BFC76E2E237523CBC30FD220FE055156b41F](https://arbiscan.io/address/0x4186BFC76E2E237523CBC30FD220FE055156b41F))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 900 rsETH |
| borrowCap | 1 rsETH |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0xb4B0cbcA864c2Eb0C0342608D92490C034aC1089](https://arbiscan.io/address/0xb4B0cbcA864c2Eb0C0342608D92490C034aC1089) |
| oracleDecimals | 8 |
| oracleDescription | Capped rsETH / ETH / USD |
| oracleLatestAnswer | 1894.47267842 |
| usageAsCollateralEnabled | true |
| ltv | 0.05 % [5] |
| liquidationThreshold | 0.1 % [10] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 20 % [2000] |
| aToken | [0x6b030Ff3FB9956B1B69f475B77aE0d3Cf2CC5aFa](https://arbiscan.io/address/0x6b030Ff3FB9956B1B69f475B77aE0d3Cf2CC5aFa) |
| variableDebtToken | [0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE](https://arbiscan.io/address/0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x429F16dBA3B9e1900087Cbaa7b50D38Bc60fB73F](https://arbiscan.io/address/0x429F16dBA3B9e1900087Cbaa7b50D38Bc60fB73F) |
| aTokenName | Aave Arbitrum rsETH |
| aTokenSymbol | aArbrsETH |
| aTokenUnderlyingBalance | 0.035 rsETH [35000000000000000] |
| id | 18 |
| isPaused | false |
| variableDebtTokenName | Aave Arbitrum Variable Debt rsETH |
| variableDebtTokenSymbol | variableDebtArbrsETH |
| virtualAccountingActive | true |
| virtualBalance | 0.035 rsETH [35000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 310 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 10 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3100000000000000000000000000) |


## Emodes changed

### EMode: Stablecoins(id: 1)



### EMode: ETH correlated(id: 2)



### EMode: ezETH wstETH(id: 3)



### EMode: ezETH Stablecoins(id: 4)



### EMode: rsETH wstETH(id: 5)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | rsETH wstETH |
| eMode.ltv | - | 92.5 % |
| eMode.liquidationThreshold | - | 94.5 % |
| eMode.liquidationBonus | - | 1 % |
| eMode.borrowableBitmap | - | wstETH |
| eMode.collateralBitmap | - | rsETH |


## Raw diff

```json
{
  "eModes": {
    "5": {
      "from": null,
      "to": {
        "borrowableBitmap": "256",
        "collateralBitmap": "262144",
        "eModeCategory": 5,
        "label": "rsETH wstETH",
        "liquidationBonus": 10100,
        "liquidationThreshold": 9450,
        "ltv": 9250
      }
    }
  },
  "reserves": {
    "0x4186BFC76E2E237523CBC30FD220FE055156b41F": {
      "from": null,
      "to": {
        "aToken": "0x6b030Ff3FB9956B1B69f475B77aE0d3Cf2CC5aFa",
        "aTokenName": "Aave Arbitrum rsETH",
        "aTokenSymbol": "aArbrsETH",
        "aTokenUnderlyingBalance": "35000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 18,
        "interestRateStrategy": "0x429F16dBA3B9e1900087Cbaa7b50D38Bc60fB73F",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10750,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 10,
        "ltv": 5,
        "oracle": "0xb4B0cbcA864c2Eb0C0342608D92490C034aC1089",
        "oracleDecimals": 8,
        "oracleDescription": "Capped rsETH / ETH / USD",
        "oracleLatestAnswer": "189447267842",
        "reserveFactor": 2000,
        "supplyCap": 900,
        "symbol": "rsETH",
        "underlying": "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE",
        "variableDebtTokenName": "Aave Arbitrum Variable Debt rsETH",
        "variableDebtTokenSymbol": "variableDebtArbrsETH",
        "virtualAccountingActive": true,
        "virtualBalance": "35000000000000000"
      }
    }
  },
  "strategies": {
    "0x4186BFC76E2E237523CBC30FD220FE055156b41F": {
      "from": null,
      "to": {
        "address": "0x429F16dBA3B9e1900087Cbaa7b50D38Bc60fB73F",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "3100000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "variableRateSlope1": "100000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```