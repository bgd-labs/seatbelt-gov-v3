## Reserve changes

### Reserves added

#### AAVE ([0x63706e401c06ac8513145b7687A14804d17f814b](https://basescan.org/address/0x63706e401c06ac8513145b7687A14804d17f814b))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 30,000 AAVE |
| borrowCap | 1 AAVE |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x3d6774EF702A10b20FCa8Ed40FC022f7E4938e07](https://basescan.org/address/0x3d6774EF702A10b20FCa8Ed40FC022f7E4938e07) |
| oracleDecimals | 8 |
| oracleDescription | AAVE / USD |
| oracleLatestAnswer | 230.6951 |
| usageAsCollateralEnabled | true |
| ltv | 60 % [6000] |
| liquidationThreshold | 65 % [6500] |
| liquidationBonus | 10 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 20 % [2000] |
| aToken | [0x67EAF2BeE4384a2f84Da9Eb8105C661C123736BA](https://basescan.org/address/0x67EAF2BeE4384a2f84Da9Eb8105C661C123736BA) |
| variableDebtToken | [0xcEC1Ea95dDEF7CFC27D3D9615E05b035af460978](https://basescan.org/address/0xcEC1Ea95dDEF7CFC27D3D9615E05b035af460978) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5](https://basescan.org/address/0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5) |
| aTokenName | Aave Base AAVE |
| aTokenSymbol | aBasAAVE |
| aTokenUnderlyingBalance | 0.65 AAVE [650000000000000000] |
| id | 12 |
| isPaused | false |
| variableDebtTokenName | Aave Base Variable Debt AAVE |
| variableDebtTokenSymbol | variableDebtBasAAVE |
| virtualAccountingActive | true |
| virtualBalance | 0.65 AAVE [650000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 310 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 10 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3100000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0x63706e401c06ac8513145b7687A14804d17f814b": {
      "from": null,
      "to": {
        "aToken": "0x67EAF2BeE4384a2f84Da9Eb8105C661C123736BA",
        "aTokenName": "Aave Base AAVE",
        "aTokenSymbol": "aBasAAVE",
        "aTokenUnderlyingBalance": "650000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 12,
        "interestRateStrategy": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 11000,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 6500,
        "ltv": 6000,
        "oracle": "0x3d6774EF702A10b20FCa8Ed40FC022f7E4938e07",
        "oracleDecimals": 8,
        "oracleDescription": "AAVE / USD",
        "oracleLatestAnswer": "23069510000",
        "reserveFactor": 2000,
        "supplyCap": 30000,
        "symbol": "AAVE",
        "underlying": "0x63706e401c06ac8513145b7687A14804d17f814b",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0xcEC1Ea95dDEF7CFC27D3D9615E05b035af460978",
        "variableDebtTokenName": "Aave Base Variable Debt AAVE",
        "variableDebtTokenSymbol": "variableDebtBasAAVE",
        "virtualAccountingActive": true,
        "virtualBalance": "650000000000000000"
      }
    }
  },
  "strategies": {
    "0x63706e401c06ac8513145b7687A14804d17f814b": {
      "from": null,
      "to": {
        "address": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
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