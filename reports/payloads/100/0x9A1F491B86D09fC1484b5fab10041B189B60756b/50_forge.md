## Reserve changes

### Reserves altered

#### USDC ([0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://gnosisscan.io/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 11,000,000 USDC | 2,500,000 USDC |
| borrowCap | 11,000,000 USDC | 2,000,000 USDC |
| ltv | 75 % [7500] | 65 % [6500] |
| reserveFactor | 25 % [2500] | 40 % [4000] |


## Emodes changed

### EMode: ETH correlated(id: 1)



### EMode: sDAI / EURe(id: 2)



### EMode: sDAI/USDCe(id: 3)

| description | value before | value after |
| --- | --- | --- |
| eMode.label | - | sDAI/USDCe |
| eMode.ltv | - | 90 % |
| eMode.liquidationThreshold | - | 92 % |
| eMode.liquidationBonus | - | 4 % |
| eMode.borrowableBitmap | - | USDC.e |
| eMode.collateralBitmap | - | sDAI |


## Raw diff

```json
{
  "eModes": {
    "3": {
      "from": null,
      "to": {
        "borrowableBitmap": "128",
        "collateralBitmap": "64",
        "eModeCategory": 3,
        "label": "sDAI/USDCe",
        "liquidationBonus": 10400,
        "liquidationThreshold": 9200,
        "ltv": 9000
      }
    }
  },
  "reserves": {
    "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83": {
      "borrowCap": {
        "from": 11000000,
        "to": 2000000
      },
      "ltv": {
        "from": 7500,
        "to": 6500
      },
      "reserveFactor": {
        "from": 2500,
        "to": 4000
      },
      "supplyCap": {
        "from": 11000000,
        "to": 2500000
      }
    }
  }
}
```