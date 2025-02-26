## Reserve changes

### Reserves altered

#### sUSD ([0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9](https://optimistic.etherscan.io/address/0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9))

| description | value before | value after |
| --- | --- | --- |
| ltv | 60 % [6000] | 0 % [0] |


## Emodes changed

### EMode: Stablecoins(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | Stablecoins | Stablecoins |
| eMode.ltv | 90 % | 0.01 % |
| eMode.liquidationThreshold | 93 % | 87 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | DAI, USDC, USDT, sUSD, USDC | DAI, USDC, USDT, sUSD, USDC |
| eMode.collateralBitmap (unchanged) | DAI, USDC, USDT, sUSD, USDC | DAI, USDC, USDT, sUSD, USDC |


### EMode: ETH correlated(id: 2)



## Raw diff

```json
{
  "eModes": {
    "1": {
      "liquidationThreshold": {
        "from": 9300,
        "to": 8700
      },
      "ltv": {
        "from": 9000,
        "to": 1
      }
    }
  },
  "reserves": {
    "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9": {
      "ltv": {
        "from": 6000,
        "to": 0
      }
    }
  }
}
```