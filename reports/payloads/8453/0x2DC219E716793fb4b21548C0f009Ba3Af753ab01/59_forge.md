## Reserve changes

### Reserves added

#### EURC ([0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42](https://basescan.org/address/0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42))

| description | value |
| --- | --- |
| decimals | 6 |
| isActive | true |
| isFrozen | false |
| supplyCap | 4,200,000 EURC |
| borrowCap | 3,800,000 EURC |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x215f25556f91b30AFCF0a12dA51C9d4374B22570](https://basescan.org/address/0x215f25556f91b30AFCF0a12dA51C9d4374B22570) |
| oracleDecimals | 8 |
| oracleDescription | Capped EURC/USD |
| oracleLatestAnswer | 1.07876662 |
| usageAsCollateralEnabled | true |
| ltv | 75 % [7500] |
| liquidationThreshold | 78 % [7800] |
| liquidationBonus | 5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 10 % [1000] |
| aToken | [0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1](https://basescan.org/address/0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1) |
| variableDebtToken | [0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb](https://basescan.org/address/0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5](https://basescan.org/address/0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5) |
| aTokenName | Aave Base EURC |
| aTokenSymbol | aBasEURC |
| aTokenUnderlyingBalance | 100 EURC [100000000] |
| id | 9 |
| isPaused | false |
| variableDebtTokenName | Aave Base Variable Debt EURC |
| variableDebtTokenSymbol | variableDebtBasEURC |
| virtualAccountingActive | true |
| virtualBalance | 100 EURC [100000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 48.5 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 8.5 % |
| variableRateSlope2 | 40 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=85000000000000000000000000&variableRateSlope2=400000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=485000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42": {
      "from": null,
      "to": {
        "aToken": "0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1",
        "aTokenName": "Aave Base EURC",
        "aTokenSymbol": "aBasEURC",
        "aTokenUnderlyingBalance": "100000000",
        "borrowCap": 3800000,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 6,
        "id": 9,
        "interestRateStrategy": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10500,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7800,
        "ltv": 7500,
        "oracle": "0x215f25556f91b30AFCF0a12dA51C9d4374B22570",
        "oracleDecimals": 8,
        "oracleDescription": "Capped EURC/USD",
        "oracleLatestAnswer": "107876662",
        "reserveFactor": 1000,
        "supplyCap": 4200000,
        "symbol": "EURC",
        "underlying": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb",
        "variableDebtTokenName": "Aave Base Variable Debt EURC",
        "variableDebtTokenSymbol": "variableDebtBasEURC",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000"
      }
    }
  },
  "strategies": {
    "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42": {
      "from": null,
      "to": {
        "address": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "485000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "variableRateSlope1": "85000000000000000000000000",
        "variableRateSlope2": "400000000000000000000000000"
      }
    }
  }
}
```