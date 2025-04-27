## Reserve changes

### Reserves added

#### stS ([0xE5DA20F15420aD15DE0fa650600aFc998bbE3955](https://sonicscan.org//address/0xE5DA20F15420aD15DE0fa650600aFc998bbE3955))

| description | value |
| --- | --- |
| decimals | 18 |
| isActive | true |
| isFrozen | false |
| supplyCap | 30,000,000 stS |
| borrowCap | 1 stS |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x5BA5D5213B47DFE020B1F8d6fB54Db3F74F9ea9a](https://sonicscan.org//address/0x5BA5D5213B47DFE020B1F8d6fB54Db3F74F9ea9a) |
| oracleDecimals | 8 |
| oracleDescription | Capped stS / S / USD |
| oracleLatestAnswer | 0.53514428 |
| usageAsCollateralEnabled | true |
| ltv | 66 % [6600] |
| liquidationThreshold | 68 % [6800] |
| liquidationBonus | 10 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 10 % [1000] |
| aToken | [0xeAa74D7F42267eB907092AF4Bc700f667EeD0B8B](https://sonicscan.org//address/0xeAa74D7F42267eB907092AF4Bc700f667EeD0B8B) |
| variableDebtToken | [0x333cFdCB6457C409e4f0C88F3806252bEe5fe425](https://sonicscan.org//address/0x333cFdCB6457C409e4f0C88F3806252bEe5fe425) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0xdFf435BCcf782f11187D3a4454d96702eD78e092](https://sonicscan.org//address/0xdFf435BCcf782f11187D3a4454d96702eD78e092) |
| aTokenName | Aave Sonic stS |
| aTokenSymbol | aSonstS |
| aTokenUnderlyingBalance | 200 stS [200000000000000000000] |
| id | 3 |
| isPaused | false |
| variableDebtTokenName | Aave Sonic Variable Debt stS |
| variableDebtTokenSymbol | variableDebtSonstS |
| virtualAccountingActive | true |
| virtualBalance | 200 stS [200000000000000000000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 310 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 10 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=100000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3100000000000000000000000000) |


## Emodes changed

### EMode: stS/wS(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | stS/wS |
| eMode.ltv | - | 87 % |
| eMode.liquidationThreshold | - | 90 % |
| eMode.liquidationBonus | - | 1 % |
| eMode.borrowableBitmap | - | wS |
| eMode.collateralBitmap | - | stS |


## Raw diff

```json
{
  "eModes": {
    "1": {
      "from": null,
      "to": {
        "borrowableBitmap": "4",
        "collateralBitmap": "8",
        "eModeCategory": 1,
        "label": "stS/wS",
        "liquidationBonus": 10100,
        "liquidationThreshold": 9000,
        "ltv": 8700
      }
    }
  },
  "reserves": {
    "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955": {
      "from": null,
      "to": {
        "aToken": "0xeAa74D7F42267eB907092AF4Bc700f667EeD0B8B",
        "aTokenName": "Aave Sonic stS",
        "aTokenSymbol": "aSonstS",
        "aTokenUnderlyingBalance": "200000000000000000000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 18,
        "id": 3,
        "interestRateStrategy": "0xdFf435BCcf782f11187D3a4454d96702eD78e092",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 11000,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 6800,
        "ltv": 6600,
        "oracle": "0x5BA5D5213B47DFE020B1F8d6fB54Db3F74F9ea9a",
        "oracleDecimals": 8,
        "oracleDescription": "Capped stS / S / USD",
        "oracleLatestAnswer": "53514428",
        "reserveFactor": 1000,
        "supplyCap": 30000000,
        "symbol": "stS",
        "underlying": "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0x333cFdCB6457C409e4f0C88F3806252bEe5fe425",
        "variableDebtTokenName": "Aave Sonic Variable Debt stS",
        "variableDebtTokenSymbol": "variableDebtSonstS",
        "virtualAccountingActive": true,
        "virtualBalance": "200000000000000000000"
      }
    }
  },
  "strategies": {
    "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955": {
      "from": null,
      "to": {
        "address": "0xdFf435BCcf782f11187D3a4454d96702eD78e092",
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