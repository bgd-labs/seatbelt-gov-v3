## Reserve changes

### Reserves added

#### PT-USDe-25SEP2025 ([0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a](https://etherscan.io/address/0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 50,000,000 PT-USDe-25SEP2025 |
| borrowCap | 1 PT-USDe-25SEP2025 |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x8B17C02d22EE7D6B8D6829ceB710A458de41E84a](https://etherscan.io/address/0x8B17C02d22EE7D6B8D6829ceB710A458de41E84a) |
| oracleDecimals | 8 |
| oracleDescription | PT Capped USDe USDT/USD linear discount 25SEP2025 |
| oracleLatestAnswer | 0.98375881 |
| usageAsCollateralEnabled | true |
| ltv | 0.05 % [5] |
| liquidationThreshold | 0.1 % [10] |
| liquidationBonus | 7.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 25 % [2500] |
| aToken | [0x38A5357Ce55c81add62aBc84Fb32981e2626ADEf](https://etherscan.io/address/0x38A5357Ce55c81add62aBc84Fb32981e2626ADEf) |
| variableDebtToken | [0x0D8486E1CAbf3C9407B3DdA0cfc4d9C3101fB683](https://etherscan.io/address/0x0D8486E1CAbf3C9407B3DdA0cfc4d9C3101fB683) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB](https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB) |
| aTokenName | Aave Ethereum PT_USDe_25SEP2025 |
| aTokenSymbol | aEthPT_USDe_25SEP2025 |
| aTokenUnderlyingBalance | 100 PT-USDe-25SEP2025 [100000000000000000000] |
| id | 49 |
| isPaused | false |
| variableDebtTokenName | Aave Ethereum Variable Debt PT_USDe_25SEP2025 |
| variableDebtTokenSymbol | variableDebtEthPT_USDe_25SEP2025 |
| virtualAccountingActive | true |
| virtualBalance | 100 PT-USDe-25SEP2025 [100000000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 310 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 10 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3100000000000000000000000000) |


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



### EMode: PT-sUSDe USDe September 2025(id: 18)



### EMode: PT-USDe Stablecoins September 2025(id: 19)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | PT-USDe Stablecoins September 2025 |
| eMode.ltv | - | 90.3 % |
| eMode.liquidationThreshold | - | 92.3 % |
| eMode.liquidationBonus | - | 3.5 % |
| eMode.borrowableBitmap | - | USDC, USDT, USDe, USDS |
| eMode.collateralBitmap | - | USDe, PT-USDe-31JUL2025, PT-eUSDE-14AUG2025, PT-USDe-25SEP2025 |


### EMode: PT-USDe USDe September 2025(id: 20)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | PT-USDe USDe September 2025 |
| eMode.ltv | - | 91.2 % |
| eMode.liquidationThreshold | - | 93.2 % |
| eMode.liquidationBonus | - | 2.5 % |
| eMode.borrowableBitmap | - | USDe |
| eMode.collateralBitmap | - | USDe, PT-USDe-31JUL2025, PT-eUSDE-14AUG2025, PT-USDe-25SEP2025 |


## Raw diff

```json
{
  "eModes": {
    "19": {
      "from": null,
      "to": {
        "borrowableBitmap": "35433480456",
        "collateralBitmap": "589339306229760",
        "eModeCategory": 19,
        "label": "PT-USDe Stablecoins September 2025",
        "liquidationBonus": 10350,
        "liquidationThreshold": 9230,
        "ltv": 9030
      }
    },
    "20": {
      "from": null,
      "to": {
        "borrowableBitmap": "1073741824",
        "collateralBitmap": "589339306229760",
        "eModeCategory": 20,
        "label": "PT-USDe USDe September 2025",
        "liquidationBonus": 10250,
        "liquidationThreshold": 9320,
        "ltv": 9120
      }
    }
  },
  "reserves": {
    "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a": {
      "from": null,
      "to": {
        "aToken": "0x38A5357Ce55c81add62aBc84Fb32981e2626ADEf",
        "aTokenName": "Aave Ethereum PT_USDe_25SEP2025",
        "aTokenSymbol": "aEthPT_USDe_25SEP2025",
        "aTokenUnderlyingBalance": "100000000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 49,
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
        "oracle": "0x8B17C02d22EE7D6B8D6829ceB710A458de41E84a",
        "oracleDecimals": 8,
        "oracleDescription": "PT Capped USDe USDT/USD linear discount 25SEP2025",
        "oracleLatestAnswer": "98375881",
        "reserveFactor": 2500,
        "supplyCap": 50000000,
        "symbol": "PT-USDe-25SEP2025",
        "underlying": "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x0D8486E1CAbf3C9407B3DdA0cfc4d9C3101fB683",
        "variableDebtTokenName": "Aave Ethereum Variable Debt PT_USDe_25SEP2025",
        "variableDebtTokenSymbol": "variableDebtEthPT_USDe_25SEP2025",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000000000000000"
      }
    }
  },
  "strategies": {
    "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a": {
      "from": null,
      "to": {
        "address": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
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