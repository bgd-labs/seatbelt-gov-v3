## Reserve changes

### Reserve altered

#### wrsETH ([0xEDfa23602D0EC14714057867A78d01e94176BEA0](https://basescan.org/address/0xEDfa23602D0EC14714057867A78d01e94176BEA0))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | true | false |
| ltv | 0 % [0] | 0.05 % [5] |


#### LBTC ([0xecAc9C5F704e954931349Da37F60E39f515c11c1](https://basescan.org/address/0xecAc9C5F704e954931349Da37F60E39f515c11c1))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | true | false |
| ltv | 0 % [0] | 68 % [6800] |


## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: ezETH wstETH(id: 2)



### EMode: ezETH Stablecoins(id: 3)



### EMode: LBTC_cbBTC(id: 4)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | LBTC_cbBTC | LBTC_cbBTC |
| eMode.ltv (unchanged) | 82 % | 82 % |
| eMode.liquidationThreshold (unchanged) | 84 % | 84 % |
| eMode.liquidationBonus (unchanged) | 3 % | 3 % |
| eMode.borrowableBitmap | wstETH, cbBTC | cbBTC |
| eMode.collateralBitmap | wrsETH, LBTC | LBTC |


### EMode: rsETH/wstETH(id: 5)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | rsETH/wstETH |
| eMode.ltv | - | 92.5 % |
| eMode.liquidationThreshold | - | 94.5 % |
| eMode.liquidationBonus | - | 1 % |
| eMode.borrowableBitmap | - | wstETH |
| eMode.collateralBitmap | - | wrsETH |


## Raw diff

```json
{
  "eModes": {
    "4": {
      "borrowableBitmap": {
        "from": "72",
        "to": "64"
      },
      "collateralBitmap": {
        "from": "1536",
        "to": "1024"
      }
    },
    "5": {
      "from": null,
      "to": {
        "borrowableBitmap": "8",
        "collateralBitmap": "512",
        "eModeCategory": 5,
        "label": "rsETH/wstETH",
        "liquidationBonus": 10100,
        "liquidationThreshold": 9450,
        "ltv": 9250
      }
    }
  },
  "reserves": {
    "0xEDfa23602D0EC14714057867A78d01e94176BEA0": {
      "isFrozen": {
        "from": true,
        "to": false
      },
      "ltv": {
        "from": 0,
        "to": 5
      }
    },
    "0xecAc9C5F704e954931349Da37F60E39f515c11c1": {
      "isFrozen": {
        "from": true,
        "to": false
      },
      "ltv": {
        "from": 0,
        "to": 6800
      }
    }
  }
}
```