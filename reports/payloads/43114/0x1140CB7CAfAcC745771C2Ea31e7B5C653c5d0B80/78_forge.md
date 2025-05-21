## Reserve changes

### Reserves altered

#### FRAX ([0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64](https://snowtrace.io/address/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64))

| description | value before | value after |
| --- | --- | --- |
| borrowingEnabled | true | false |


## Emodes changed

### EMode: Stablecoins(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | Stablecoins | Stablecoins |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | DAI.e, USDC, USDt, FRAX, MAI |  |
| eMode.collateralBitmap (unchanged) | DAI.e, USDC, USDt, FRAX, MAI | DAI.e, USDC, USDt, FRAX, MAI |


### EMode: AVAX correlated(id: 2)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | AVAX correlated | AVAX correlated |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | WAVAX, sAVAX | WAVAX |
| eMode.collateralBitmap (unchanged) | WAVAX, sAVAX | WAVAX, sAVAX |


## Raw diff

```json
{
  "eModes": {
    "1": {
      "borrowableBitmap": {
        "from": "1573",
        "to": "0"
      }
    },
    "2": {
      "borrowableBitmap": {
        "from": "384",
        "to": "128"
      }
    }
  },
  "reserves": {
    "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64": {
      "borrowingEnabled": {
        "from": true,
        "to": false
      }
    }
  }
}
```