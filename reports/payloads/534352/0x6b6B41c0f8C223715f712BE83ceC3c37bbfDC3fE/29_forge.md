## Reserve changes

### Reserves added

#### SCR ([0xd29687c813D741E2F938F4aC377128810E217b1b](https://scrollscan.com/address/0xd29687c813D741E2F938F4aC377128810E217b1b))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 360,000 SCR |
| borrowCap | 180,000 SCR |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x26f6F7C468EE309115d19Aa2055db5A74F8cE7A5](https://scrollscan.com/address/0x26f6F7C468EE309115d19Aa2055db5A74F8cE7A5) |
| oracleDecimals | 8 |
| oracleDescription | SCR / USD |
| oracleLatestAnswer | 1.05733497 |
| usageAsCollateralEnabled | false |
| ltv | 0 % [0] |
| liquidationThreshold | 0 % [0] |
| liquidationBonus | 0 % |
| liquidationProtocolFee | 0 % [0] |
| reserveFactor | 20 % [2000] |
| aToken | [0x25718130C2a8eb94e2e1FAFB5f1cDd4b459aCf64](https://scrollscan.com/address/0x25718130C2a8eb94e2e1FAFB5f1cDd4b459aCf64) |
| variableDebtToken | [0xFFbA405BBF25B2e6C454d18165F2fd8786858c6B](https://scrollscan.com/address/0xFFbA405BBF25B2e6C454d18165F2fd8786858c6B) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc](https://scrollscan.com/address/0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc) |
| aTokenName | Aave Scroll SCR |
| aTokenSymbol | aScrSCR |
| aTokenUnderlyingBalance | 100 SCR [100000000000000000000] |
| id | 4 |
| isPaused | false |
| variableDebtTokenName | Aave Scroll Variable Debt SCR |
| variableDebtTokenSymbol | variableDebtScrSCR |
| virtualAccountingActive | true |
| virtualBalance | 100 SCR [100000000000000000000] |
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
    "0xd29687c813D741E2F938F4aC377128810E217b1b": {
      "from": null,
      "to": {
        "aToken": "0x25718130C2a8eb94e2e1FAFB5f1cDd4b459aCf64",
        "aTokenName": "Aave Scroll SCR",
        "aTokenSymbol": "aScrSCR",
        "aTokenUnderlyingBalance": "100000000000000000000",
        "borrowCap": 180000,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 4,
        "interestRateStrategy": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc",
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
        "oracle": "0x26f6F7C468EE309115d19Aa2055db5A74F8cE7A5",
        "oracleDecimals": 8,
        "oracleDescription": "SCR / USD",
        "oracleLatestAnswer": "105733497",
        "reserveFactor": 2000,
        "supplyCap": 360000,
        "symbol": "SCR",
        "underlying": "0xd29687c813D741E2F938F4aC377128810E217b1b",
        "usageAsCollateralEnabled": false,
        "variableDebtToken": "0xFFbA405BBF25B2e6C454d18165F2fd8786858c6B",
        "variableDebtTokenName": "Aave Scroll Variable Debt SCR",
        "variableDebtTokenSymbol": "variableDebtScrSCR",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000000000000000"
      }
    }
  },
  "strategies": {
    "0xd29687c813D741E2F938F4aC377128810E217b1b": {
      "from": null,
      "to": {
        "address": "0xC37353E5766164D8654D3CB395acfDcA4c2E7Ddc",
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