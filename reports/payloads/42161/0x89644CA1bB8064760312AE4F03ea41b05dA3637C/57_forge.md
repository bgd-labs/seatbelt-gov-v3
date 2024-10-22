## Reserve changes

### Reserves altered

#### USDC ([0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8](https://arbiscan.io/address/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8))

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
| eMode.borrowableBitmap (unchanged) | DAI, USDC, USDT, EURS, USDC | DAI, USDC, USDT, EURS, USDC |
| eMode.collateralBitmap (unchanged) | DAI, USDC, USDT, EURS, USDC | DAI, USDC, USDT, EURS, USDC |


### EMode: ETH correlated(id: 2)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | WETH, wstETH, weETH | WETH, wstETH, weETH |
| eMode.collateralBitmap (unchanged) | WETH, wstETH, weETH | WETH, wstETH, weETH |


## Raw diff

```json
{
  "reserves": {
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": {
      "reserveFactor": {
        "from": 4500,
        "to": 5000
      }
    }
  }
}
```