## Reserve changes

### Reserve altered

#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.056 | 1.056 |
| variableBorrowIndex | 1.076 | 1.076 |
| currentLiquidityRate | 7.16 % | 5.305 % |
| currentVariableBorrowRate | 10.536 % | 7.837 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.023 | 1.023 |
| variableBorrowIndex | 1.04 | 1.04 |
| currentLiquidityRate | 1.621 % | 1.62 % |
| currentVariableBorrowRate | 2.436 % | 2.435 % |


## Raw diff

```json
{
  "reserves": {
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "71596183917769013548368122",
        "to": "53045962329846070601635017"
      },
      "currentVariableBorrowRate": {
        "from": "105360392651424193467168653",
        "to": "78373281326250683398657785"
      },
      "liquidityIndex": {
        "from": "1056380120528454270930686366",
        "to": "1056389704134822996676453533"
      },
      "variableBorrowIndex": {
        "from": "1076211557130427969023059159",
        "to": "1076225925146425569811840795"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "16208883531588441458072290",
        "to": "16196467957874178003016604"
      },
      "currentVariableBorrowRate": {
        "from": "24357059045360644389289928",
        "to": "24347728828614274258292997"
      },
      "liquidityIndex": {
        "from": "1022691796520700657990328910",
        "to": "1022691872213359190022211320"
      },
      "variableBorrowIndex": {
        "from": "1039843662295812634092945818",
        "to": "1039843777946656831167612243"
      }
    }
  }
}
```