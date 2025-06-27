## Reserve changes

### Reserves added

#### EURC ([0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c](https://etherscan.io/address/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c))

| description | value |
| --- | --- |
| decimals | 6 |
| isActive | true |
| isFrozen | false |
| supplyCap | 7,000,000 EURC |
| borrowCap | 6,500,000 EURC |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0xa6aB031A4d189B24628EC9Eb155F0a0f1A0E55a3](https://etherscan.io/address/0xa6aB031A4d189B24628EC9Eb155F0a0f1A0E55a3) |
| oracleDecimals | 8 |
| oracleDescription | Capped EURC/USD |
| oracleLatestAnswer | 1.17118416 |
| usageAsCollateralEnabled | true |
| ltv | 75 % [7500] |
| liquidationThreshold | 78 % [7800] |
| liquidationBonus | 5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 10 % [1000] |
| aToken | [0xAA6e91C82942aeAE040303Bf96c15a6dBcB82CA0](https://etherscan.io/address/0xAA6e91C82942aeAE040303Bf96c15a6dBcB82CA0) |
| variableDebtToken | [0x6c82c66622Eb360FC973D3F492f9D8E9eA538b08](https://etherscan.io/address/0x6c82c66622Eb360FC973D3F492f9D8E9eA538b08) |
| borrowingEnabled | true |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB](https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB) |
| aTokenName | Aave Ethereum EURC |
| aTokenSymbol | aEthEURC |
| aTokenUnderlyingBalance | 100 EURC [100000000] |
| id | 47 |
| isPaused | false |
| variableDebtTokenName | Aave Ethereum Variable Debt EURC |
| variableDebtTokenSymbol | variableDebtEthEURC |
| virtualAccountingActive | true |
| virtualBalance | 100 EURC [100000000] |
| optimalUsageRatio | 90 % |
| maxVariableBorrowRate | 56 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 6 % |
| variableRateSlope2 | 50 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=60000000000000000000000000&variableRateSlope2=500000000000000000000000000&optimalUsageRatio=900000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=560000000000000000000000000) |


## Raw diff

```json
{
  "reserves": {
    "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c": {
      "from": null,
      "to": {
        "aToken": "0xAA6e91C82942aeAE040303Bf96c15a6dBcB82CA0",
        "aTokenName": "Aave Ethereum EURC",
        "aTokenSymbol": "aEthEURC",
        "aTokenUnderlyingBalance": "100000000",
        "borrowCap": 6500000,
        "borrowingEnabled": true,
        "debtCeiling": 0,
        "decimals": 6,
        "id": 47,
        "interestRateStrategy": "0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10500,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7800,
        "ltv": 7500,
        "oracle": "0xa6aB031A4d189B24628EC9Eb155F0a0f1A0E55a3",
        "oracleDecimals": 8,
        "oracleDescription": "Capped EURC/USD",
        "oracleLatestAnswer": "117118416",
        "reserveFactor": 1000,
        "supplyCap": 7000000,
        "symbol": "EURC",
        "underlying": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x6c82c66622Eb360FC973D3F492f9D8E9eA538b08",
        "variableDebtTokenName": "Aave Ethereum Variable Debt EURC",
        "variableDebtTokenSymbol": "variableDebtEthEURC",
        "virtualAccountingActive": true,
        "virtualBalance": "100000000"
      }
    }
  },
  "strategies": {
    "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c": {
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