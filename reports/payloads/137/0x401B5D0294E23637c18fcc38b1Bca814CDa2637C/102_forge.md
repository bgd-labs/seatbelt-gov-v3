## Reserve changes

### Reserve altered

#### USDC ([0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359](https://polygonscan.com/address/0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359))

| description | value before | value after |
| --- | --- | --- |
| ltv | 0 % [0] | 70 % [7000] |


#### USDT ([0xc2132D05D31c914a87C6611C10748AEb04B58e8F](https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F))

| description | value before | value after |
| --- | --- | --- |
| ltv | 0 % [0] | 70 % [7000] |


## Emodes changed

### EMode: Stablecoins(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | Stablecoins | Stablecoins |
| eMode.ltv | 93 % | 91.25 % |
| eMode.liquidationThreshold | 95 % | 94.25 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC |  |
| eMode.collateralBitmap (unchanged) | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC | DAI, USDC, USDT, EURS, jEUR, EURA, miMATIC, USDC |


### EMode: MATIC correlated(id: 2)



### EMode: ETH correlated(id: 3)



## Raw diff

```json
{
  "eModes": {
    "1": {
      "borrowableBitmap": {
        "from": "1171493",
        "to": "0"
      },
      "liquidationThreshold": {
        "from": 9500,
        "to": 9425
      },
      "ltv": {
        "from": 9300,
        "to": 9125
      }
    }
  },
  "reserves": {
    "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359": {
      "ltv": {
        "from": 0,
        "to": 7000
      }
    },
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      "ltv": {
        "from": 0,
        "to": 7000
      }
    }
  }
}
```