## Reserve changes

### Reserves altered

#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 45 % [4500] | 50 % [5000] |


## Emodes changed

### EMode: Stablecoins(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | Stablecoins | Stablecoins |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | DAI, USDC, USDT, sUSD, USDC | DAI, USDC, USDT, sUSD, USDC |
| eMode.collateralBitmap (unchanged) | DAI, USDC, USDT, sUSD, USDC | DAI, USDC, USDT, sUSD, USDC |


### EMode: ETH correlated(id: 2)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | WETH, wstETH, rETH | WETH, wstETH, rETH |
| eMode.collateralBitmap (unchanged) | WETH, wstETH, rETH | WETH, wstETH, rETH |


## Raw diff

```json
{
  "reserves": {
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "reserveFactor": {
        "from": 4500,
        "to": 5000
      }
    }
  }
}
```