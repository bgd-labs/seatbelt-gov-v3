## Reserve changes

### Reserves added

#### LBTC ([0xecAc9C5F704e954931349Da37F60E39f515c11c1](https://basescan.org/address/0xecAc9C5F704e954931349Da37F60E39f515c11c1))

| description | value |
| --- | --- |
| decimals | 8 |
| isActive | true |
| isFrozen | false |
| supplyCap | 400 LBTC |
| borrowCap | 1 LBTC |
| debtCeiling | 0 $ [0] |
| isSiloed | false |
| isFlashloanable | true |
| oracle | [0x64c911996D3c6aC71f9b455B1E8E7266BcbD848F](https://basescan.org/address/0x64c911996D3c6aC71f9b455B1E8E7266BcbD848F) |
| oracleDecimals | 8 |
| oracleDescription | BTC / USD |
| oracleLatestAnswer | 81556.955 |
| usageAsCollateralEnabled | true |
| ltv | 68 % [6800] |
| liquidationThreshold | 73 % [7300] |
| liquidationBonus | 8.5 % |
| liquidationProtocolFee | 10 % [1000] |
| reserveFactor | 50 % [5000] |
| aToken | [0x90072A4aA69B5Eb74984Ab823EFC5f91e90b3a72](https://basescan.org/address/0x90072A4aA69B5Eb74984Ab823EFC5f91e90b3a72) |
| variableDebtToken | [0xa2525b3f058846075506903d792d58C5a0D834c9](https://basescan.org/address/0xa2525b3f058846075506903d792d58C5a0D834c9) |
| borrowingEnabled | false |
| isBorrowableInIsolation | false |
| interestRateStrategy | [0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5](https://basescan.org/address/0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5) |
| aTokenName | Aave Base LBTC |
| aTokenSymbol | aBasLBTC |
| aTokenUnderlyingBalance | 0.001 LBTC [100000] |
| id | 10 |
| isPaused | false |
| variableDebtTokenName | Aave Base Variable Debt LBTC |
| variableDebtTokenSymbol | variableDebtBasLBTC |
| virtualAccountingActive | true |
| virtualBalance | 0.001 LBTC [100000] |
| optimalUsageRatio | 45 % |
| maxVariableBorrowRate | 304 % |
| baseVariableBorrowRate | 0 % |
| variableRateSlope1 | 4 % |
| variableRateSlope2 | 300 % |
| interestRate | ![ir](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3040000000000000000000000000) |


### Reserves altered

#### cbBTC ([0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf](https://basescan.org/address/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 20 % [2000] | 50 % [5000] |
| optimalUsageRatio | 45 % | 80 % |
| maxVariableBorrowRate | 304 % | 64 % |
| variableRateSlope2 | 300 % | 60 % |
| interestRate | ![before](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=3000000000000000000000000000&optimalUsageRatio=450000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=3040000000000000000000000000) | ![after](https://dash.onaave.com/api/static?variableRateSlope1=40000000000000000000000000&variableRateSlope2=600000000000000000000000000&optimalUsageRatio=800000000000000000000000000&baseVariableBorrowRate=0&maxVariableBorrowRate=640000000000000000000000000) |

## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: ezETH wstETH(id: 2)



### EMode: ezETH Stablecoins(id: 3)



### EMode: LBTC_cbBTC(id: 4)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | rsETH/wstETH emode | LBTC_cbBTC |
| eMode.ltv | 92.5 % | 82 % |
| eMode.liquidationThreshold | 94.5 % | 84 % |
| eMode.liquidationBonus | 1 % | 3 % |
| eMode.borrowableBitmap | wstETH | wstETH, cbBTC |
| eMode.collateralBitmap | wrsETH | wrsETH, LBTC |


## Raw diff

```json
{
  "eModes": {
    "4": {
      "borrowableBitmap": {
        "from": "8",
        "to": "72"
      },
      "collateralBitmap": {
        "from": "512",
        "to": "1536"
      },
      "label": {
        "from": "rsETH/wstETH emode",
        "to": "LBTC_cbBTC"
      },
      "liquidationBonus": {
        "from": 10100,
        "to": 10300
      },
      "liquidationThreshold": {
        "from": 9450,
        "to": 8400
      },
      "ltv": {
        "from": 9250,
        "to": 8200
      }
    }
  },
  "reserves": {
    "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf": {
      "reserveFactor": {
        "from": 2000,
        "to": 5000
      }
    },
    "0xecAc9C5F704e954931349Da37F60E39f515c11c1": {
      "from": null,
      "to": {
        "aToken": "0x90072A4aA69B5Eb74984Ab823EFC5f91e90b3a72",
        "aTokenName": "Aave Base LBTC",
        "aTokenSymbol": "aBasLBTC",
        "aTokenUnderlyingBalance": "100000",
        "borrowCap": 1,
        "borrowingEnabled": false,
        "debtCeiling": 0,
        "decimals": 8,
        "id": 10,
        "interestRateStrategy": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
        "isActive": true,
        "isBorrowableInIsolation": false,
        "isFlashloanable": true,
        "isFrozen": false,
        "isPaused": false,
        "isSiloed": false,
        "liquidationBonus": 10850,
        "liquidationProtocolFee": 1000,
        "liquidationThreshold": 7300,
        "ltv": 6800,
        "oracle": "0x64c911996D3c6aC71f9b455B1E8E7266BcbD848F",
        "oracleDecimals": 8,
        "oracleDescription": "BTC / USD",
        "oracleLatestAnswer": "8155695500000",
        "reserveFactor": 5000,
        "supplyCap": 400,
        "symbol": "LBTC",
        "underlying": "0xecAc9C5F704e954931349Da37F60E39f515c11c1",
        "usageAsCollateralEnabled": true,
        "variableDebtToken": "0xa2525b3f058846075506903d792d58C5a0D834c9",
        "variableDebtTokenName": "Aave Base Variable Debt LBTC",
        "variableDebtTokenSymbol": "variableDebtBasLBTC",
        "virtualAccountingActive": true,
        "virtualBalance": "100000"
      }
    }
  },
  "strategies": {
    "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf": {
      "maxVariableBorrowRate": {
        "from": "3040000000000000000000000000",
        "to": "640000000000000000000000000"
      },
      "optimalUsageRatio": {
        "from": "450000000000000000000000000",
        "to": "800000000000000000000000000"
      },
      "variableRateSlope2": {
        "from": "3000000000000000000000000000",
        "to": "600000000000000000000000000"
      }
    },
    "0xecAc9C5F704e954931349Da37F60E39f515c11c1": {
      "from": null,
      "to": {
        "address": "0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5",
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