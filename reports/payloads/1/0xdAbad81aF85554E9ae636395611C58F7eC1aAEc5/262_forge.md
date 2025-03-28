## Reserve changes

### Reserves added

#### eBTC ([0x657e8C867D8B37dCC18fA4Caead9C45EB088C642](https://etherscan.io/address/0x657e8C867D8B37dCC18fA4Caead9C45EB088C642))

| description | value |
| --- | --- |
| decimals | 8 |
| isActive | true |
| isFrozen | false |
| supplyCap | 750 eBTC |
| borrowCap | 1 eBTC |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x95a85D0d2f3115702d813549a80040387738A430](https://etherscan.io/address/0x95a85D0d2f3115702d813549a80040387738A430) |
| oracleDecimals | 8 |
| oracleDescription | Capped eBTC / BTC / USD |
| oracleLatestAnswer | 85168.2506755 |
| usageAsCollateralEnabled | true |
| ltv | 67 % [6700] |
| liquidationThreshold | 72 % [7200] |
| liquidationBonus | 10 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 50 % [5000] |
| aToken | [0x5fefd7069a7D91d01f269DADE14526CCF3487810](https://etherscan.io/address/0x5fefd7069a7D91d01f269DADE14526CCF3487810) |
| variableDebtToken | [0x47eD0509e64615c0d5C6d39AF1B38D02Bc9fE58f](https://etherscan.io/address/0x47eD0509e64615c0d5C6d39AF1B38D02Bc9fE58f) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB](https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB) |
| aTokenName | Aave Ethereum eBTC |
| aTokenSymbol | aEtheBTC |
| aTokenUnderlyingBalance | 0.002 eBTC [200000] |
| id | 38 |
| isPaused | false |
| variableDebtTokenName | Aave Ethereum Variable Debt eBTC |
| variableDebtTokenSymbol | variableDebtEtheBTC |
| virtualAccountingActive | true |
| virtualBalance | 0.002 eBTC [200000] |
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

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | eBTC/WBTC |
| eMode.ltv | - | 83 % |
| eMode.liquidationThreshold | - | 85 % |
| eMode.liquidationBonus | - | 3 % |
| eMode.borrowableBitmap | - | WBTC |
| eMode.collateralBitmap | - | eBTC |


## Raw diff

```json
{
  "eModes": {
    "7": {
      "from": null,
      "to": {
        "borrowableBitmap": "4",
        "collateralBitmap": "274877906944",
        "eModeCategory": 7,
        "label": "eBTC/WBTC",
        "liquidationBonus": 10300,
        "liquidationThreshold": 8500,
        "ltv": 8300
      }
    }
  },
  "reserves": {
    "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642": {
      "from": null,
      "to": {
        "aToken": "0x5fefd7069a7D91d01f269DADE14526CCF3487810",
        "aTokenName": "Aave Ethereum eBTC",
        "aTokenSymbol": "aEtheBTC",
        "aTokenUnderlyingBalance": "200000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 8,
        "id": 38,
        "interestRateStrategy": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 11000,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7200,
        "ltv": 6700,
        "oracle": "0x95a85D0d2f3115702d813549a80040387738A430",
        "oracleDecimals": 8,
        "oracleDescription": "Capped eBTC / BTC / USD",
        "oracleLatestAnswer": "8516825067550",
        "reserveFactor": 5000,
        "supplyCap": 750,
        "symbol": "eBTC",
        "underlying": "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x47eD0509e64615c0d5C6d39AF1B38D02Bc9fE58f",
        "variableDebtTokenName": "Aave Ethereum Variable Debt eBTC",
        "variableDebtTokenSymbol": "variableDebtEtheBTC",
        "virtualAccountingActive": true,
        "virtualBalance": "200000"
      }
    }
  },
  "strategies": {
    "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642": {
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