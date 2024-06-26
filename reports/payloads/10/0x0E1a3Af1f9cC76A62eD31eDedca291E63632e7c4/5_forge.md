## Reserve changes

### Reserves added

#### USDC ([0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85](https://optimistic.etherscan.io/address/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85))

| description | value |
| --- | --- |
| decimals | 6 |
| isActive | true |
| isFrozen | false |
| supplyCap | 25,000,000 USDC |
| borrowCap | 20,000,000 USDC |
| debtCeiling | 0 $ |
| isSiloed | false |
| isFlashloanable | true |
| eModeCategory | 1 |
| oracle | [0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3](https://optimistic.etherscan.io/address/0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3) |
| oracleDecimals | 8 |
| oracleDescription | USDC / USD |
| oracleLatestAnswer | 1.00002195 |
| usageAsCollateralEnabled | true |
| ltv | 80 % |
| liquidationThreshold | 85 % |
| liquidationBonus | 5 % |
| liquidationProtocolFee | 10 % |
| reserveFactor | 10 % |
| aToken | [0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5](https://optimistic.etherscan.io/address/0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5) |
| aTokenImpl | [0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B](https://optimistic.etherscan.io/address/0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B) |
| variableDebtToken | [0x5D557B07776D12967914379C71a1310e917C7555](https://optimistic.etherscan.io/address/0x5D557B07776D12967914379C71a1310e917C7555) |
| variableDebtTokenImpl | [0x04a8D477eE202aDCE1682F5902e1160455205b12](https://optimistic.etherscan.io/address/0x04a8D477eE202aDCE1682F5902e1160455205b12) |
| stableDebtToken | [0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB](https://optimistic.etherscan.io/address/0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB) |
| stableDebtTokenImpl | [0x6b4E260b765B3cA1514e618C0215A6B7839fF93e](https://optimistic.etherscan.io/address/0x6b4E260b765B3cA1514e618C0215A6B7839fF93e) |
| borrowingEnabled | true |
| stableBorrowRateEnabled | false |
| isBorrowableInIsolation | true |
| interestRateStrategy | [0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4](https://optimistic.etherscan.io/address/0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4) |
| liquidityIndex | 1 |
| variableBorrowIndex | 1 |
| aTokenName | Aave Optimism USDCn |
| aTokenSymbol | aOptUSDCn |
| currentLiquidityRate | 0 % |
| currentVariableBorrowRate | 0 % |
| isPaused | false |
| stableDebtTokenName | Aave Optimism Stable Debt USDCn |
| stableDebtTokenSymbol | stableDebtOptUSDCn |
| variableDebtTokenName | Aave Optimism Variable Debt USDCn |
| variableDebtTokenSymbol | variableDebtOptUSDCn |
| optimalUsageRatio | 90 % |
| maxExcessStableToTotalDebtRatio | 80 % |
| maxExcessUsageRatio | 10 % |
| optimalStableToTotalDebtRatio | 20 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 3.5 % |
| variableRateSlope2 | 60 % |
| baseStableBorrowRate | 4.5 % |
| stableRateSlope1 | 3.5 % |
| stableRateSlope2 | 60 % |
| interestRate | ![ir](/.assets/a2869b3619b2202bec0a784d699d25ba40b9a69d.svg) |
| eMode.label | Stablecoins |
| eMode.ltv | 93 % |
| eMode.liquidationThreshold | 95 % |
| eMode.liquidationBonus | 1 % |
| eMode.priceSource | 0x0000000000000000000000000000000000000000 |


### Reserves altered

#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 150,000,000 USDC | 25,000,000 USDC |
| borrowCap | 100,000,000 USDC | 20,000,000 USDC |
| reserveFactor | 10 % | 20 % |


## Raw diff

```json
{
  "reserves": {
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "borrowCap": {
        "from": 100000000,
        "to": 20000000
      },
      "reserveFactor": {
        "from": 1000,
        "to": 2000
      },
      "supplyCap": {
        "from": 150000000,
        "to": 25000000
      }
    },
    "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85": {
      "from": null,
      "to": {
        "aToken": "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5",
        "aTokenImpl": "0xbCb167bDCF14a8F791d6f4A6EDd964aed2F8813B",
        "aTokenName": "Aave Optimism USDCn",
        "aTokenSymbol": "aOptUSDCn",
        "borrowCap": 20000000,
        "borrowingEnabled": true,
        "currentLiquidityRate": 0,
        "currentVariableBorrowRate": 0,
        "debtCeiling": 0,
        "decimals": 6,
        "eModeCategory": 1,
        "interestRateStrategy": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "isActive": true,
        "isBorrowableInIsolation": true,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10500,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 8500,
        "liquidityIndex": "1000000000000000000000000000",
        "ltv": 8000,
        "oracle": "0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3",
        "oracleDecimals": 8,
        "oracleDescription": "USDC / USD",
        "oracleLatestAnswer": 100002195,
        "reserveFactor": 1000,
        "stableBorrowRateEnabled": false,
        "stableDebtToken": "0x8a9FdE6925a839F6B1932d16B36aC026F8d3FbdB",
        "stableDebtTokenImpl": "0x6b4E260b765B3cA1514e618C0215A6B7839fF93e",
        "stableDebtTokenName": "Aave Optimism Stable Debt USDCn",
        "stableDebtTokenSymbol": "stableDebtOptUSDCn",
        "supplyCap": 25000000,
        "symbol": "USDC",
        "underlying": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        "usageAsCollateralEnabled": true,
        "variableBorrowIndex": "1000000000000000000000000000",
        "variableDebtToken": "0x5D557B07776D12967914379C71a1310e917C7555",
        "variableDebtTokenImpl": "0x04a8D477eE202aDCE1682F5902e1160455205b12",
        "variableDebtTokenName": "Aave Optimism Variable Debt USDCn",
        "variableDebtTokenSymbol": "variableDebtOptUSDCn"
      }
    }
  },
  "strategies": {
    "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85": {
      "from": null,
      "to": {
        "address": "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
        "baseStableBorrowRate": "45000000000000000000000000",
        "baseVariableBorrowRate": 0,
        "maxExcessStableToTotalDebtRatio": "800000000000000000000000000",
        "maxExcessUsageRatio": "100000000000000000000000000",
        "optimalStableToTotalDebtRatio": "200000000000000000000000000",
        "optimalUsageRatio": "900000000000000000000000000",
        "stableRateSlope1": "35000000000000000000000000",
        "stableRateSlope2": "600000000000000000000000000",
        "variableRateSlope1": "35000000000000000000000000",
        "variableRateSlope2": "600000000000000000000000000"
      }
    }
  }
}
```