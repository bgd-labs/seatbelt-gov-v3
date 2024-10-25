## Reserve changes

### Reserves altered

#### USDS ([0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F))

| description | value before | value after |
| --- | --- | --- |
| maxVariableBorrowRate | 87.5 % | 82 % |
| variableRateSlope1 | 6.25 % | 0.75 % |
| interestRate | ![before](/.assets/59f72276d32ba1eeba45953b23c84ea37048e299.svg) | ![after](/.assets/237c21391c0b67eb1236e3875c882cd6115a3758.svg) |

## Emodes changed

### EMode: ETH correlated(id: 1)

| description | value before | value after |
| --- | --- | --- |
| eMode.label (unchanged) | ETH correlated | ETH correlated |
| eMode.ltv (unchanged) | 93 % | 93 % |
| eMode.liquidationThreshold (unchanged) | 95 % | 95 % |
| eMode.liquidationBonus (unchanged) | 1 % | 1 % |
| eMode.borrowableBitmap (unchanged) | WETH, wstETH, cbETH, rETH, weETH, osETH, ETHx | WETH, wstETH, cbETH, rETH, weETH, osETH, ETHx |
| eMode.collateralBitmap (unchanged) | WETH, wstETH, cbETH, rETH, weETH, osETH, ETHx | WETH, wstETH, cbETH, rETH, weETH, osETH, ETHx |


## Raw diff

```json
{
  "strategies": {
    "0xdC035D45d973E3EC169d2276DDab16f1e407384F": {
      "maxVariableBorrowRate": {
        "from": "875000000000000000000000000",
        "to": "820000000000000000000000000"
      },
      "variableRateSlope1": {
        "from": "62500000000000000000000000",
        "to": "7500000000000000000000000"
      }
    }
  }
}
```