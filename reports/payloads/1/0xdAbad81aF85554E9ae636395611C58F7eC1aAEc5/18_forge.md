## Reserve changes

### Reserves added

#### FXS ([0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0](https://etherscan.io/address/0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 800,000 FXS |
| borrowCap | 500,000 FXS |
| debtCeiling | 4,000,000 $ |
| isSiloed | false |
| isFlashloanable | true |
| eModeCategory | 0 |
| oracle | [0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f](https://etherscan.io/address/0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f) |
| oracleDecimals | 8 |
| oracleDescription | FXS / USD |
| oracleLatestAnswer | 6.87878615 |
| usageAsCollateralEnabled | true |
| ltv | 35 % |
| liquidationThreshold | 45 % |
| liquidationBonus | 10 % |
| liquidationProtocolFee | 10 % |
| reserveFactor | 20 % |
| aToken | [0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef](https://etherscan.io/address/0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef) |
| aTokenImpl | [0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d](https://etherscan.io/address/0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d) |
| variableDebtToken | [0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16](https://etherscan.io/address/0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16) |
| variableDebtTokenImpl | [0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6](https://etherscan.io/address/0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6) |
| stableDebtToken | [0x61dFd349140C239d3B61fEe203Efc811b518a317](https://etherscan.io/address/0x61dFd349140C239d3B61fEe203Efc811b518a317) |
| stableDebtTokenImpl | [0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57](https://etherscan.io/address/0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57) |
| borrowingEnabled | true |
| stableBorrowRateEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0xf6733B9842883BFE0e0a940eA2F572676af31bde](https://etherscan.io/address/0xf6733B9842883BFE0e0a940eA2F572676af31bde) |
| liquidityIndex | 1 |
| variableBorrowIndex | 1 |
| aTokenName | Aave Ethereum FXS |
| aTokenSymbol | aEthFXS |
| currentLiquidityRate | 0 % |
| currentVariableBorrowRate | 0 % |
| isPaused | false |
| stableDebtTokenName | Aave Ethereum Stable Debt FXS |
| stableDebtTokenSymbol | stableDebtEthFXS |
| variableDebtTokenName | Aave Ethereum Variable Debt FXS |
| variableDebtTokenSymbol | variableDebtEthFXS |
| optimalUsageRatio | 45 % |
| maxExcessStableToTotalDebtRatio | 80 % |
| maxExcessUsageRatio | 55 % |
| optimalStableToTotalDebtRatio | 20 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 9 % |
| variableRateSlope2 | 300 % |
| baseStableBorrowRate | 12 % |
| stableRateSlope1 | 13 % |
| stableRateSlope2 | 300 % |
| interestRate | ![ir](/.assets/54077f6ef867e9603661a2a66cf35da5b8c6cd85.svg) |


## Raw diff

```json
{
  "reserves": {
    "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0": {
      "from": null,
      "to": {
        "aToken": "0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef",
        "aTokenImpl": "0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d",
        "aTokenName": "Aave Ethereum FXS",
        "aTokenSymbol": "aEthFXS",
        "borrowCap": 500000,
        "borrowingEnabled": true,
        "currentLiquidityRate": 0,
        "currentVariableBorrowRate": 0,
        "debtCeiling": 400000000,
        "decimals": 18,
        "eModeCategory": 0,
        "interestRateStrategy": "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 11000,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 4500,
        "liquidityIndex": "1000000000000000000000000000",
        "ltv": 3500,
        "oracle": "0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f",
        "oracleDecimals": 8,
        "oracleDescription": "FXS / USD",
        "oracleLatestAnswer": 687878615,
        "reserveFactor": 2000,
        "stableBorrowRateEnabled": false,
        "stableDebtToken": "0x61dFd349140C239d3B61fEe203Efc811b518a317",
        "stableDebtTokenImpl": "0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57",
        "stableDebtTokenName": "Aave Ethereum Stable Debt FXS",
        "stableDebtTokenSymbol": "stableDebtEthFXS",
        "supplyCap": 800000,
        "symbol": "FXS",
        "underlying": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        "usageAsCollateralEnabled": true,
        "variableBorrowIndex": "1000000000000000000000000000",
        "variableDebtToken": "0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16",
        "variableDebtTokenImpl": "0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6",
        "variableDebtTokenName": "Aave Ethereum Variable Debt FXS",
        "variableDebtTokenSymbol": "variableDebtEthFXS"
      }
    }
  },
  "strategies": {
    "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0": {
      "from": null,
      "to": {
        "address": "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
        "baseStableBorrowRate": "120000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "550000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "450000000000000000000000000",
        "stableRateSlope1": "130000000000000000000000000",
        "stableRateSlope2": "3000000000000000000000000000",
        "variableRateSlope1": "90000000000000000000000000",
        "variableRateSlope2": "3000000000000000000000000000"
      }
    }
  }
}
```