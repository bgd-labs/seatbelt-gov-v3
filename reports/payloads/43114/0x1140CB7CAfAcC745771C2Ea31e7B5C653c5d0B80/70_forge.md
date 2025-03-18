## Reserve changes

### Reserves altered

#### AUSD ([0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a](https://snowtrace.io/address/0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a))

| description | value before | value after |
| --- | --- | --- |
| usageAsCollateralEnabled | false | true |
| ltv | 0 % [0] | 69 % [6900] |
| liquidationThreshold | 0 % [0] | 72 % [7200] |
| liquidationBonus | 0 % | 6 % |
| liquidationProtocolFee | 0 % [0] | 10 % [1000] |


## Raw diff

```json
{
  "reserves": {
    "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a": {
      "liquidationBonus": {
        "from": 0,
        "to": 10600
      },
      "liquidationProtocolFee": {
        "from": 0,
        "to": 1000
      },
      "liquidationThreshold": {
        "from": 0,
        "to": 7200
      },
      "ltv": {
        "from": 0,
        "to": 6900
      },
      "usageAsCollateralEnabled": {
        "from": false,
        "to": true
      }
    }
  }
}
```