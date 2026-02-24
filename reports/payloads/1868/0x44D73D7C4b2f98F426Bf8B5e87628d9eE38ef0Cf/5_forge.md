## Reserve changes

### Reserves altered

#### USDT ([0x3A337a6adA9d885b6Ad95ec48F9b75f197b5AE35](https://soneium.blockscout.com/address/0x3A337a6adA9d885b6Ad95ec48F9b75f197b5AE35))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | :x: | :white_check_mark: |
| ltv | 75 % [7500] | 0 % [0] |


#### WETH ([0x4200000000000000000000000000000000000006](https://soneium.blockscout.com/address/0x4200000000000000000000000000000000000006))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | :x: | :white_check_mark: |
| ltv | 80 % [8000] | 0 % [0] |


#### USDC.e ([0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369](https://soneium.blockscout.com/address/0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369))

| description | value before | value after |
| --- | --- | --- |
| isFrozen | :x: | :white_check_mark: |
| ltv | 75 % [7500] | 0 % [0] |


## Raw diff

```json
{
  "reserves": {
    "0x3A337a6adA9d885b6Ad95ec48F9b75f197b5AE35": {
      "isFrozen": {
        "from": false,
        "to": true
      },
      "ltv": {
        "from": 7500,
        "to": 0
      }
    },
    "0x4200000000000000000000000000000000000006": {
      "isFrozen": {
        "from": false,
        "to": true
      },
      "ltv": {
        "from": 8000,
        "to": 0
      }
    },
    "0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369": {
      "isFrozen": {
        "from": false,
        "to": true
      },
      "ltv": {
        "from": 7500,
        "to": 0
      }
    }
  }
}
```
