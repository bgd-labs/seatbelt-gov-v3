## Reserve changes

### Reserves altered

#### USDC ([0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174](https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 45 % [4500] | 50 % [5000] |


## Emodes changed

### EMode: Stablecoins(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | Stablecoins | Stablecoins |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC |
| eMode.collateralBitmap (unchanged) | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC |


### EMode: MATIC correlated(id: 2)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | MATIC correlated | MATIC correlated |
| eMode.ltv (unchanged) | 92.5 % | 92.5 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | WPOL, stMATIC, MaticX | WPOL, stMATIC, MaticX |
| eMode.collateralBitmap (unchanged) | WPOL, stMATIC, MaticX | WPOL, stMATIC, MaticX |


### EMode: ETH correlated(id: 3)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | WETH, wstETH | WETH, wstETH |
| eMode.collateralBitmap (unchanged) | WETH, wstETH | WETH, wstETH |


## Raw diff

```json
{
  "reserves": {
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      "reserveFactor": {
        "from": 4500,
        "to": 5000
      }
    }
  }
}
```