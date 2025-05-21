## Emodes changed

### EMode: ETH correlated(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | WETH, wstETH | WETH |
| eMode.collateralBitmap (unchanged) | WETH, wstETH | WETH, wstETH |


### EMode: sDAI / EURe(id: 2)



### EMode: sDAI/USDCe(id: 3)



## Raw diff

```json
{
  "eModes": {
    "1": {
      "borrowableBitmap": {
        "from": "3",
        "to": "1"
      }
    }
  }
}
```