## Reserve changes

### Reserves altered

#### USDbC ([0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA](https://basescan.org/address/0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA))

| description | value before | value after |
| --- | --- | --- |
| reserveFactor | 45 % [4500] | 50 % [5000] |


## Emodes changed

### EMode: ETH correlated(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 2 % | 2 % |
| eMode.borrowableBitmap (unchanged) | WETH, cbETH, wstETH, weETH | WETH, cbETH, wstETH, weETH |
| eMode.collateralBitmap (unchanged) | WETH, cbETH, wstETH, weETH | WETH, cbETH, wstETH, weETH |


## Raw diff

```json
{
  "reserves": {
    "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA": {
      "reserveFactor": {
        "from": 4500,
        "to": 5000
      }
    }
  }
}
```