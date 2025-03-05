## Reserve changes

### Reserves added

#### wrsETH ([0xEDfa23602D0EC14714057867A78d01e94176BEA0](https://basescan.org/address/0xEDfa23602D0EC14714057867A78d01e94176BEA0))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 400 wrsETH |
| borrowCap | 1 wrsETH |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x567E7f3DB2CD4C81872F829C8ab6556616818580](https://basescan.org/address/0x567E7f3DB2CD4C81872F829C8ab6556616818580) |
| oracleDecimals | 8 |
| oracleDescription | Capped rsETH / ETH / USD |
| oracleLatestAnswer | 2280.04176159 |
| usageAsCollateralEnabled | true |
| ltv | 0.05 % [5] |
| liquidationThreshold | 0.1 % [10] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 20 % [2000] |
| aToken | [0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1](https://basescan.org/address/0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1) |
| variableDebtToken | [0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb](https://basescan.org/address/0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5](https://basescan.org/address/0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5) |
| aTokenName | Aave Base wrsETH |
| aTokenSymbol | aBaswrsETH |
| aTokenUnderlyingBalance | 0.05 wrsETH [50000000000000000] |
| id | 9 |
| isPaused | false |
| variableDebtTokenName | Aave Base Variable Debt wrsETH |
| variableDebtTokenSymbol | variableDebtBaswrsETH |
| virtualAccountingActive | true |
| virtualBalance | 0.05 wrsETH [50000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 308 % |
| baseVariableBorrowRate | 1 % |
| variableRateSlope1 | 7 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=70000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=10000000000000000000000000&maxVariableBorrowRate=3080000000000000000000000000) |


## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: ezETH wstETH(id: 2)



### EMode: ezETH Stablecoins(id: 3)



### EMode: rsETH/wstETH emode(id: 4)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | rsETH/wstETH emode |
| eMode.ltv | - | 92.5 % |
| eMode.liquidationThreshold | - | 94.5 % |
| eMode.liquidationBonus | - | 1 % |
| eMode.borrowableBitmap | - | wstETH |
| eMode.collateralBitmap | - | wrsETH |


## Raw diff

```json
{
  "eModes": {
    "4": {
      "from": null,
      "to": {
        "borrowableBitmap": "8",
        "collateralBitmap": "512",
        "eModeCategory": 4,
        "label": "rsETH/wstETH emode",
        "liquidationBonus": 10100,
        "liquidationThreshold": 9450,
        "ltv": 9250
      }
    }
  },
  "reserves": {
    "0xEDfa23602D0EC14714057867A78d01e94176BEA0": {
      "from": null,
      "to": {
        "aToken": "0x80a94C36747CF51b2FbabDfF045f6D22c1930eD1",
        "aTokenName": "Aave Base wrsETH",
        "aTokenSymbol": "aBaswrsETH",
        "aTokenUnderlyingBalance": "50000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 9,
        "interestRateStrategy": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
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
        "oracle": "0x567E7f3DB2CD4C81872F829C8ab6556616818580",
        "oracleDecimals": 8,
        "oracleDescription": "Capped rsETH / ETH / USD",
        "oracleLatestAnswer": "228004176159",
        "reserveFactor": 2000,
        "supplyCap": 400,
        "symbol": "wrsETH",
        "underlying": "0xEDfa23602D0EC14714057867A78d01e94176BEA0",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0xe9541C77a111bCAa5dF56839bbC50894eba7aFcb",
        "variableDebtTokenName": "Aave Base Variable Debt wrsETH",
        "variableDebtTokenSymbol": "variableDebtBaswrsETH",
        "virtualAccountingActive": true,
        "virtualBalance": "50000000000000000"
      }
    }
  },
  "strategies": {
    "0xEDfa23602D0EC14714057867A78d01e94176BEA0": {
      "from": null,
      "to": {
        "address": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "baseVariableBorrowRate": "10000000000000000000000000",
        "maxVariableBorrowRate": "3080000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "variableRateSlope1": "70000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```