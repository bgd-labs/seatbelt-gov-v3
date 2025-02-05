## Reserve changes

### Reserve altered

#### WETH ([0x4200000000000000000000000000000000000006](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,470.2516 WETH [5470251633671515531910] | 5,474.9507 WETH [5474950797948420279929] |
| virtualBalance | 5,470.2516 WETH [5470251633671515531910] | 5,474.9507 WETH [5474950797948420279929] |


#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 521,605.0627 USDC [521605062769] | 526,089.5332 USDC [526089533228] |
| virtualBalance | 521,528.0159 USDC [521528015907] | 526,012.4863 USDC [526012486366] |


#### USDT ([0x94b008aA00579c1307B0EF2c499aD98a8ce58e58](https://optimistic.etherscan.io/address/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 4,611,628.2357 USDT [4611628235734] | 4,613,898.4691 USDT [4613898469162] |
| virtualBalance | 4,611,568.9813 USDT [4611568981334] | 4,613,839.2147 USDT [4613839214762] |


## Raw diff

```json
{
  "reserves": {
    "0x4200000000000000000000000000000000000006": {
      "aTokenUnderlyingBalance": {
        "from": "5470251633671515531910",
        "to": "5474950797948420279929"
      },
      "virtualBalance": {
        "from": "5470251633671515531910",
        "to": "5474950797948420279929"
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "aTokenUnderlyingBalance": {
        "from": "521605062769",
        "to": "526089533228"
      },
      "virtualBalance": {
        "from": "521528015907",
        "to": "526012486366"
      }
    },
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
      "aTokenUnderlyingBalance": {
        "from": "4611628235734",
        "to": "4613898469162"
      },
      "virtualBalance": {
        "from": "4611568981334",
        "to": "4613839214762"
      }
    }
  }
}
```