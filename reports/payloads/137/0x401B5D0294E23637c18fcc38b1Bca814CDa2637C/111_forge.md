## Reserve changes

### Reserves altered

#### MaticX ([0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6](https://polygonscan.com/address/0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6))

| description | value before | value after |
| --- | --- | --- |
| borrowingEnabled | true | false |


## Emodes changed

### EMode: Stablecoins(id: 1)



### EMode: MATIC correlated(id: 2)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | MATIC correlated | MATIC correlated |
| eMode.ltv (unchanged) | 92.5 % | 92.5 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | WPOL, stMATIC, MaticX | WPOL |
| eMode.collateralBitmap (unchanged) | WPOL, stMATIC, MaticX | WPOL, stMATIC, MaticX |


### EMode: ETH correlated(id: 3)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 90 % | 90 % |
| eMode.liquidationThreshold (unchanged) | 93 % | 93 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | WETH, wstETH | WETH |
| eMode.collateralBitmap (unchanged) | WETH, wstETH | WETH, wstETH |


## Raw diff

```json
{
  "eModes": {
    "2": {
      "borrowableBitmap": {
        "from": "393344",
        "to": "128"
      }
    },
    "3": {
      "borrowableBitmap": {
        "from": "524304",
        "to": "16"
      }
    }
  },
  "reserves": {
    "0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6": {
      "borrowingEnabled": {
        "from": true,
        "to": false
      }
    }
  }
}
```