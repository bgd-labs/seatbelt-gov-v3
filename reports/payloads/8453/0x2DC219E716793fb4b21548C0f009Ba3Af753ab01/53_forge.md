## Reserve changes

### Reserves added

#### GHO ([0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee](https://basescan.org/address/0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 2,500,000 GHO |
| borrowCap | 2,250,000 GHO |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73](https://basescan.org/address/0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73) |
| oracleDecimals | 8 |
| oracleLatestAnswer | 1 |
| usageAsCollateralEnabled | false |
| ltv | 0 % [0] |
| liquidationThreshold | 0 % [0] |
| liquidationBonus | 0 % |
| liquidationProtocolFee | 0 % [0] |
| reserveFactor | 10 % [1000] |
| aToken | [0x067ae75628177FD257c2B1e500993e1a0baBcBd1](https://basescan.org/address/0x067ae75628177FD257c2B1e500993e1a0baBcBd1) |
| variableDebtToken | [0x38e59ADE183BbEb94583d44213c8f3297e9933e9](https://basescan.org/address/0x38e59ADE183BbEb94583d44213c8f3297e9933e9) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5](https://basescan.org/address/0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5) |
| aTokenName | Aave Base GHO |
| aTokenSymbol | aBasGHO |
| aTokenUnderlyingBalance | 1 GHO [1000000000000000000] |
| id | 8 |
| isPaused | false |
| variableDebtTokenName | Aave Base Variable Debt GHO |
| variableDebtTokenSymbol | variableDebtBasGHO |
| virtualAccountingActive | true |
| virtualBalance | 1 GHO [1000000000000000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 59.5 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 9.5 % |
| variableRateSlope2 | 50 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=95000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=595000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee": {
      "from": null,
      "to": {
        "aToken": "0x067ae75628177FD257c2B1e500993e1a0baBcBd1",
        "aTokenName": "Aave Base GHO",
        "aTokenSymbol": "aBasGHO",
        "aTokenUnderlyingBalance": "1000000000000000000",
        "borrowCap": 2250000,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 8,
        "interestRateStrategy": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
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
        "oracle": "0xfc421aD3C883Bf9E7C4f42dE845C4e4405799e73",
        "oracleDecimals": 8,
        "oracleLatestAnswer": "100000000",
        "reserveFactor": 1000,
        "supplyCap": 2500000,
        "symbol": "GHO",
        "underlying": "0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee",
        "usageAsCollateralEnabled": false,
        "variableDebtToken": "0x38e59ADE183BbEb94583d44213c8f3297e9933e9",
        "variableDebtTokenName": "Aave Base Variable Debt GHO",
        "variableDebtTokenSymbol": "variableDebtBasGHO",
        "virtualAccountingActive": true,
        "virtualBalance": "1000000000000000000"
      }
    }
  },
  "strategies": {
    "0x6Bb7a212910682DCFdbd5BCBb3e28FB4E8da10Ee": {
      "from": null,
      "to": {
        "address": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "595000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "variableRateSlope1": "95000000000000000000000000",
        "variableRateSlope2": "500000000000000000000000000"
      }
    }
  }
}
```