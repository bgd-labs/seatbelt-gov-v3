## Reserve changes

### Reserves altered

#### m.DAI ([0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0](https://explorer.metis.io/address/0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0))

| description | value before | value after |
| --- | --- | --- |
| ltv | 75 % [7500] | 63 % [6300] |
| liquidationThreshold | 80 % [8000] | 77 % [7700] |


## Raw diff

```json
{
  "reserves": {
    "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0": {
      "liquidationThreshold": {
        "from": 8000,
        "to": 7700
      },
      "ltv": {
        "from": 7500,
        "to": 6300
      }
    }
  }
}
```