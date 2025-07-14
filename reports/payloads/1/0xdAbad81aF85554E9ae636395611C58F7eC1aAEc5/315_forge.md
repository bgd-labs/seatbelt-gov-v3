## Reserve changes

### Reserves added

#### PT-sUSDE-25SEP2025 ([0x9F56094C450763769BA0EA9Fe2876070c0fD5F77](https://etherscan.io/address/0x9F56094C450763769BA0EA9Fe2876070c0fD5F77))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 200,000,000 PT-sUSDE-25SEP2025 |
| borrowCap | 1 PT-sUSDE-25SEP2025 |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x7585693910f39df4959912B27D09EAEef06C1a93](https://etherscan.io/address/0x7585693910f39df4959912B27D09EAEef06C1a93) |
| oracleDecimals | 8 |
| oracleDescription | PT Capped sUSDe USDT/USD linear discount 25SEP2025 |
| oracleLatestAnswer | 0.98490584 |
| usageAsCollateralEnabled | true |
| ltv | 0.05 % [5] |
| liquidationThreshold | 0.1 % [10] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 10 % [1000] |
| aToken | [0x5f4a0873a3A02f7C0CB0e13a1d4362a1AD90e751](https://etherscan.io/address/0x5f4a0873a3A02f7C0CB0e13a1d4362a1AD90e751) |
| variableDebtToken | [0xc9AD8Dd111e6384128146467aAf92B81EC422848](https://etherscan.io/address/0xc9AD8Dd111e6384128146467aAf92B81EC422848) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB](https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB) |
| aTokenName | Aave Ethereum PT_sUSDE_25SEP2025 |
| aTokenSymbol | aEthPT_sUSDE_25SEP2025 |
| aTokenUnderlyingBalance | 100 PT-sUSDE-25SEP2025 [100000000000000000000] |
| id | 48 |
| isPaused | false |
| variableDebtTokenName | Aave Ethereum Variable Debt PT_sUSDE_25SEP2025 |
| variableDebtTokenSymbol | variableDebtEthPT_sUSDE_25SEP2025 |
| virtualAccountingActive | true |
| virtualBalance | 100 PT-sUSDE-25SEP2025 [100000000000000000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 56 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 6 % |
| variableRateSlope2 | 50 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=60000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=560000000000000000000000000) |


## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: sUSDe Stablecoins(id: 2)



### EMode: rsETH LST main(id: 3)



### EMode: LBTC_WBTC(id: 4)



### EMode: LBTC_cbBTC(id: 5)



### EMode: LBTC_tBTC(id: 6)



### EMode: eBTC/WBTC(id: 7)



### EMode: PT-sUSDe Stablecoins Jul 2025(id: 8)



### EMode: PT-eUSDe Stablecoins May 2025(id: 9)



### EMode: PT-USDe Stablecoins July 2025(id: 10)



### EMode: USDe Stablecoin(id: 11)



### EMode: PT-USDe USDe July 2025(id: 12)



### EMode: PT-eUSDe Stablecoins August 2025(id: 13)



### EMode: PT-eUSDe USDe August 2025(id: 14)



### EMode: eUSDe_Stablecoin(id: 15)



### EMode: FBTC/WBTC(id: 16)



### EMode: PT-sUSDe Stablecoins September 2025(id: 17)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | PT-sUSDe Stablecoins September 2025 |
| eMode.ltv | - | 87.7 % |
| eMode.liquidationThreshold | - | 89.7 % |
| eMode.liquidationBonus | - | 5 % |
| eMode.borrowableBitmap | - | USDC, USDT, USDe, USDS |
| eMode.collateralBitmap | - | PT-sUSDE-25SEP2025 |


### EMode: PT-sUSDe USDe September 2025(id: 18)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | PT-sUSDe USDe September 2025 |
| eMode.ltv | - | 89.1 % |
| eMode.liquidationThreshold | - | 91.1 % |
| eMode.liquidationBonus | - | 3 % |
| eMode.borrowableBitmap | - | USDe |
| eMode.collateralBitmap | - | PT-sUSDE-25SEP2025 |


## Raw diff

```json
{
  "eModes": {
    "17": {
      "from": null,
      "to": {
        "borrowableBitmap": "35433480456",
        "collateralBitmap": "281474976710656",
        "eModeCategory": 17,
        "label": "PT-sUSDe Stablecoins September 2025",
        "liquidationBonus": 10500,
        "liquidationThreshold": 8970,
        "ltv": 8770
      }
    },
    "18": {
      "from": null,
      "to": {
        "borrowableBitmap": "1073741824",
        "collateralBitmap": "281474976710656",
        "eModeCategory": 18,
        "label": "PT-sUSDe USDe September 2025",
        "liquidationBonus": 10300,
        "liquidationThreshold": 9110,
        "ltv": 8910
      }
    }
  },
  "reserves": {
    "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77": {
      "from": null,
      "to": {
        "aToken": "0x5f4a0873a3A02f7C0CB0e13a1d4362a1AD90e751",
        "aTokenName": "Aave Ethereum PT_sUSDE_25SEP2025",
        "aTokenSymbol": "aEthPT_sUSDE_25SEP2025",
        "aTokenUnderlyingBalance": "100000000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 48,
        "interestRateStrategy": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
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
        "oracle": "0x7585693910f39df4959912B27D09EAEef06C1a93",
        "oracleDecimals": 8,
        "oracleDescription": "PT Capped sUSDe USDT/USD linear discount 25SEP2025",
        "oracleLatestAnswer": "98490584",
        "reserveFactor": 1000,
        "supplyCap": 200000000,
        "symbol": "PT-sUSDE-25SEP2025",
        "underlying": "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0xc9AD8Dd111e6384128146467aAf92B81EC422848",
        "variableDebtTokenName": "Aave Ethereum Variable Debt PT_sUSDE_25SEP2025",
        "variableDebtTokenSymbol": "variableDebtEthPT_sUSDE_25SEP2025",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000000000000000"
      }
    }
  },
  "strategies": {
    "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77": {
      "from": null,
      "to": {
        "address": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "560000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "variableRateSlope1": "60000000000000000000000000",
        "variableRateSlope2": "500000000000000000000000000"
      }
    }
  }
}
```