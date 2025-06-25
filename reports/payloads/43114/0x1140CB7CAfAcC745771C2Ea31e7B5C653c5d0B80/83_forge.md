## Reserve changes

### Reserves added

#### GHO ([0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73](https://snowtrace.io/address/0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 10,000,000 GHO |
| borrowCap | 9,000,000 GHO |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x360d8aa8F6b09B7BC57aF34db2Eb84dD87bf4d12](https://snowtrace.io/address/0x360d8aa8F6b09B7BC57aF34db2Eb84dD87bf4d12) |
| oracleDecimals | 8 |
| oracleLatestAnswer | 1 |
| usageAsCollateralEnabled | false |
| ltv | 0 % [0] |
| liquidationThreshold | 0 % [0] |
| liquidationBonus | 0 % |
| liquidationProtocolFee | 0 % [0] |
| reserveFactor | 10 % [1000] |
| aToken | [0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6](https://snowtrace.io/address/0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6) |
| variableDebtToken | [0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5](https://snowtrace.io/address/0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0xCe1C5509f2f4d755aA64B8D135B15ec6F12a93da](https://snowtrace.io/address/0xCe1C5509f2f4d755aA64B8D135B15ec6F12a93da) |
| aTokenName | Aave Avalanche GHO |
| aTokenSymbol | aAvaGHO |
| aTokenUnderlyingBalance | 100 GHO [100000000000000000000] |
| id | 13 |
| isPaused | false |
| variableDebtTokenName | Aave Avalanche Variable Debt GHO |
| variableDebtTokenSymbol | variableDebtAvaGHO |
| virtualAccountingActive | true |
| virtualBalance | 100 GHO [100000000000000000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 55.5 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 5.5 % |
| variableRateSlope2 | 50 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=55000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=555000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73": {
      "from": null,
      "to": {
        "aToken": "0xf611aEb5013fD2c0511c9CD55c7dc5C1140741A6",
        "aTokenName": "Aave Avalanche GHO",
        "aTokenSymbol": "aAvaGHO",
        "aTokenUnderlyingBalance": "100000000000000000000",
        "borrowCap": 9000000,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 13,
        "interestRateStrategy": "0xCe1C5509f2f4d755aA64B8D135B15ec6F12a93da",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 0,
        "liquidationProtocolFee": 0,
        "liquidationThreshold": 0,
        "ltv": 0,
        "oracle": "0x360d8aa8F6b09B7BC57aF34db2Eb84dD87bf4d12",
        "oracleDecimals": 8,
        "oracleLatestAnswer": "100000000",
        "reserveFactor": 1000,
        "supplyCap": 10000000,
        "symbol": "GHO",
        "underlying": "0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73",
        "usageAsCollateralEnabled": false,
        "variableDebtToken": "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5",
        "variableDebtTokenName": "Aave Avalanche Variable Debt GHO",
        "variableDebtTokenSymbol": "variableDebtAvaGHO",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000000000000000"
      }
    }
  },
  "strategies": {
    "0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73": {
      "from": null,
      "to": {
        "address": "0xCe1C5509f2f4d755aA64B8D135B15ec6F12a93da",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "555000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "variableRateSlope1": "55000000000000000000000000",
        "variableRateSlope2": "500000000000000000000000000"
      }
    }
  }
}
```