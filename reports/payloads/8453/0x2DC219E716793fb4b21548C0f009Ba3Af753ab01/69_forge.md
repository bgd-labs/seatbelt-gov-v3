## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: ezETH wstETH(id: 2)



### EMode: ezETH Stablecoins(id: 3)



### EMode: LBTC_cbBTC(id: 4)



### EMode: rsETH/wstETH(id: 5)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | rsETH/wstETH | rsETH/wstETH |
| eMode.ltv | 92.5 % | 93 % |
| eMode.liquidationThreshold | 94.5 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | wstETH | wstETH |
| eMode.collateralBitmap (unchanged) | wrsETH | wrsETH |


### EMode: rsETH/USDC(id: 6)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | rsETH/USDC |
| eMode.ltv | - | 72 % |
| eMode.liquidationThreshold | - | 75 % |
| eMode.liquidationBonus | - | 7.5 % |
| eMode.borrowableBitmap | - | USDC |
| eMode.collateralBitmap | - | wrsETH |


### EMode: weETH/WETH(id: 7)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | weETH/WETH |
| eMode.ltv | - | 93 % |
| eMode.liquidationThreshold | - | 95 % |
| eMode.liquidationBonus | - | 1.25 % |
| eMode.borrowableBitmap | - | WETH |
| eMode.collateralBitmap | - | weETH |


### EMode: wstETH/WETH(id: 8)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | wstETH/WETH |
| eMode.ltv | - | 93 % |
| eMode.liquidationThreshold | - | 95 % |
| eMode.liquidationBonus | - | 1 % |
| eMode.borrowableBitmap | - | WETH |
| eMode.collateralBitmap | - | wstETH |


### EMode: cbETH/WETH(id: 9)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | cbETH/WETH |
| eMode.ltv | - | 93 % |
| eMode.liquidationThreshold | - | 95 % |
| eMode.liquidationBonus | - | 2 % |
| eMode.borrowableBitmap | - | WETH |
| eMode.collateralBitmap | - | cbETH |


## Raw diff

```json
{
  "eModes": {
    "5": {
      "liquidationThreshold": {
        "from": 9450,
        "to": 9500
      },
      "ltv": {
        "from": 9250,
        "to": 9300
      }
    },
    "6": {
      "from": null,
      "to": {
        "borrowableBitmap": "16",
        "collateralBitmap": "512",
        "eModeCategory": 6,
        "label": "rsETH/USDC",
        "liquidationBonus": 10750,
        "liquidationThreshold": 7500,
        "ltv": 7200
      }
    },
    "7": {
      "from": null,
      "to": {
        "borrowableBitmap": "1",
        "collateralBitmap": "32",
        "eModeCategory": 7,
        "label": "weETH/WETH",
        "liquidationBonus": 10125,
        "liquidationThreshold": 9500,
        "ltv": 9300
      }
    },
    "8": {
      "from": null,
      "to": {
        "borrowableBitmap": "1",
        "collateralBitmap": "8",
        "eModeCategory": 8,
        "label": "wstETH/WETH",
        "liquidationBonus": 10100,
        "liquidationThreshold": 9500,
        "ltv": 9300
      }
    },
    "9": {
      "from": null,
      "to": {
        "borrowableBitmap": "1",
        "collateralBitmap": "2",
        "eModeCategory": 9,
        "label": "cbETH/WETH",
        "liquidationBonus": 10200,
        "liquidationThreshold": 9500,
        "ltv": 9300
      }
    }
  }
}
```