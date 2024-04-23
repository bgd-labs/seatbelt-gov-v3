## Reserve changes

### Reserves added

#### crvUSD ([0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E](https://etherscan.io/address/0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 60,000,000 crvUSD |
| borrowCap | 50,000,000 crvUSD |
| debtCeiling | 0 $ |
| isSiloed | false |
| isFlashloanable | true |
| eModeCategory | 0 |
| oracle | [0xEEf0C605546958c1f899b6fB336C20671f9cD49F](https://etherscan.io/address/0xEEf0C605546958c1f899b6fB336C20671f9cD49F) |
| oracleDecimals | 8 |
| oracleDescription | CRVUSD / USD |
| oracleLatestAnswer | 0.99614719 |
| usageAsCollateralEnabled | false |
| ltv | 0 % |
| liquidationThreshold | 0 % |
| liquidationBonus | 0 % |
| liquidationProtocolFee | 0 % |
| reserveFactor | 10 % |
| aToken | [0xb82fa9f31612989525992FCfBB09AB22Eff5c85A](https://etherscan.io/address/0xb82fa9f31612989525992FCfBB09AB22Eff5c85A) |
| aTokenImpl | [0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d](https://etherscan.io/address/0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d) |
| variableDebtToken | [0x028f7886F3e937f8479efaD64f31B3fE1119857a](https://etherscan.io/address/0x028f7886F3e937f8479efaD64f31B3fE1119857a) |
| variableDebtTokenImpl | [0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6](https://etherscan.io/address/0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6) |
| stableDebtToken | [0xb55C604075D79486b8A329c396Fc711Be54B5330](https://etherscan.io/address/0xb55C604075D79486b8A329c396Fc711Be54B5330) |
| stableDebtTokenImpl | [0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57](https://etherscan.io/address/0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57) |
| borrowingEnabled | true |
| stableBorrowRateEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4](https://etherscan.io/address/0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4) |
| liquidityIndex | 1 |
| variableBorrowIndex | 1 |
| aTokenName | Aave Ethereum crvUSD |
| aTokenSymbol | aEthcrvUSD |
| currentLiquidityRate | 0 % |
| currentVariableBorrowRate | 0 % |
| isPaused | false |
| stableDebtTokenName | Aave Ethereum Stable Debt crvUSD |
| stableDebtTokenSymbol | stableDebtEthcrvUSD |
| variableDebtTokenName | Aave Ethereum Variable Debt crvUSD |
| variableDebtTokenSymbol | variableDebtEthcrvUSD |
| optimalUsageRatio | 80 % |
| maxExcessStableToTotalDebtRatio | 80 % |
| maxExcessUsageRatio | 20 % |
| optimalStableToTotalDebtRatio | 20 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 5 % |
| variableRateSlope2 | 80 % |
| baseStableBorrowRate | 8 % |
| stableRateSlope1 | 13 % |
| stableRateSlope2 | 300 % |
| interestRate | ![ir](/.assets/964205bd85f6f4e4de171c694a4116a90a534cac.svg) |


## Raw diff

```json
{
  "reserves": {
    "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E": {
      "from": null,
      "to": {
        "aToken": "0xb82fa9f31612989525992FCfBB09AB22Eff5c85A",
        "aTokenImpl": "0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d",
        "aTokenName": "Aave Ethereum crvUSD",
        "aTokenSymbol": "aEthcrvUSD",
        "borrowCap": 50000000,
        "borrowingEnabled": true,
        "currentLiquidityRate": 0,
        "currentVariableBorrowRate": 0,
        "debtCeiling": 0,
        "decimals": 18,
        "eModeCategory": 0,
        "interestRateStrategy": "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 0,
        "liquidationProtocolFee": 0,
        "liquidationThreshold": 0,
        "liquidityIndex": "1000000000000000000000000000",
        "ltv": 0,
        "oracle": "0xEEf0C605546958c1f899b6fB336C20671f9cD49F",
        "oracleDecimals": 8,
        "oracleDescription": "CRVUSD / USD",
        "oracleLatestAnswer": 99614719,
        "reserveFactor": 1000,
        "stableBorrowRateEnabled": false,
        "stableDebtToken": "0xb55C604075D79486b8A329c396Fc711Be54B5330",
        "stableDebtTokenImpl": "0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57",
        "stableDebtTokenName": "Aave Ethereum Stable Debt crvUSD",
        "stableDebtTokenSymbol": "stableDebtEthcrvUSD",
        "supplyCap": 60000000,
        "symbol": "crvUSD",
        "underlying": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
        "usageAsCollateralEnabled": false,
        "variableBorrowIndex": "1000000000000000000000000000",
        "variableDebtToken": "0x028f7886F3e937f8479efaD64f31B3fE1119857a",
        "variableDebtTokenImpl": "0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6",
        "variableDebtTokenName": "Aave Ethereum Variable Debt crvUSD",
        "variableDebtTokenSymbol": "variableDebtEthcrvUSD"
      }
    }
  },
  "strategies": {
    "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E": {
      "from": null,
      "to": {
        "address": "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4",
        "baseStableBorrowRate": "80000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "200000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "800000000000000000000000000",
        "stableRateSlope1": "130000000000000000000000000",
        "stableRateSlope2": "3000000000000000000000000000",
        "variableRateSlope1": "50000000000000000000000000",
        "variableRateSlope2": "800000000000000000000000000"
      }
    }
  }
}
```