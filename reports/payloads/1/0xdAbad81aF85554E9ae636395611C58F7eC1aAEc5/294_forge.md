## Reserve changes

### Reserves added

#### FBTC ([0xC96dE26018A54D51c097160568752c4E3BD6C364](https://etherscan.io/address/0xC96dE26018A54D51c097160568752c4E3BD6C364))

| description | value |
| --- | --- |
| decimals | 8 |
| isActive | true |
| isFrozen | false |
| supplyCap | 200 FBTC |
| borrowCap | 100 FBTC |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A](https://etherscan.io/address/0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A) |
| oracleDecimals | 8 |
| oracleDescription | BTC / USD |
| oracleLatestAnswer | 104292.7591338 |
| usageAsCollateralEnabled | true |
| ltv | 73 % [7300] |
| liquidationThreshold | 78 % [7800] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 50 % [5000] |
| aToken | [0xcCA43ceF272c30415866914351fdfc3E881bb7c2](https://etherscan.io/address/0xcCA43ceF272c30415866914351fdfc3E881bb7c2) |
| variableDebtToken | [0x4A35FD7F93324Cc48bc12190D3F37493437b1Eff](https://etherscan.io/address/0x4A35FD7F93324Cc48bc12190D3F37493437b1Eff) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB](https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB) |
| aTokenName | Aave Ethereum FBTC |
| aTokenSymbol | aEthFBTC |
| aTokenUnderlyingBalance | 0.001 FBTC [100000] |
| id | 46 |
| isPaused | false |
| variableDebtTokenName | Aave Ethereum Variable Debt FBTC |
| variableDebtTokenSymbol | variableDebtEthFBTC |
| virtualAccountingActive | true |
| virtualBalance | 0.001 FBTC [100000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 304 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 4 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3040000000000000000000000000) |


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

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | FBTC/WBTC |
| eMode.ltv | - | 84 % |
| eMode.liquidationThreshold | - | 86 % |
| eMode.liquidationBonus | - | 3 % |
| eMode.borrowableBitmap | - | WBTC |
| eMode.collateralBitmap | - | FBTC |


## Raw diff

```json
{
  "eModes": {
    "16": {
      "from": null,
      "to": {
        "borrowableBitmap": "4",
        "collateralBitmap": "70368744177664",
        "eModeCategory": 16,
        "label": "FBTC/WBTC",
        "liquidationBonus": 10300,
        "liquidationThreshold": 8600,
        "ltv": 8400
      }
    }
  },
  "reserves": {
    "0xC96dE26018A54D51c097160568752c4E3BD6C364": {
      "from": null,
      "to": {
        "aToken": "0xcCA43ceF272c30415866914351fdfc3E881bb7c2",
        "aTokenName": "Aave Ethereum FBTC",
        "aTokenSymbol": "aEthFBTC",
        "aTokenUnderlyingBalance": "100000",
        "borrowCap": 100,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 8,
        "id": 46,
        "interestRateStrategy": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10750,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7800,
        "ltv": 7300,
        "oracle": "0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A",
        "oracleDecimals": 8,
        "oracleDescription": "BTC / USD",
        "oracleLatestAnswer": "10429275913380",
        "reserveFactor": 5000,
        "supplyCap": 200,
        "symbol": "FBTC",
        "underlying": "0xC96dE26018A54D51c097160568752c4E3BD6C364",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x4A35FD7F93324Cc48bc12190D3F37493437b1Eff",
        "variableDebtTokenName": "Aave Ethereum Variable Debt FBTC",
        "variableDebtTokenSymbol": "variableDebtEthFBTC",
        "virtualAccountingActive": true,
        "virtualBalance": "100000"
      }
    }
  },
  "strategies": {
    "0xC96dE26018A54D51c097160568752c4E3BD6C364": {
      "from": null,
      "to": {
        "address": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
        "baseVariableBorrowRate": "0",
        "maxVariableBorrowRate": "3040000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "variableRateSlope1": "40000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```