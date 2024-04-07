## Reserve changes

### Reserve altered

#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.056 | 1.056 |
| variableBorrowIndex | 1.076 | 1.076 |
| currentLiquidityRate | 7.383 % | 5.524 % |
| currentVariableBorrowRate | 10.859 % | 8.157 % |


#### WETH ([0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2))

| description | value before | value after |
| --- | --- | --- |
| liquidityIndex | 1.023 | 1.023 |
| variableBorrowIndex | 1.04 | 1.04 |
| currentLiquidityRate | 1.674 % | 1.673 % |
| currentVariableBorrowRate | 2.475 % | 2.474 % |


## Raw diff

```json
{
  "reserves": {
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "currentLiquidityRate": {
        "from": "73826838949953948862357270",
        "to": "55236571544213740981742661"
      },
      "currentVariableBorrowRate": {
        "from": "108591375582748279431867810",
        "to": "81571276865861053968006128"
      },
      "liquidityIndex": {
        "from": "1056183939238228451541357973",
        "to": "1056196786671426978375730774"
      },
      "variableBorrowIndex": {
        "from": "1075917452876445711218500325",
        "to": "1075936703318505779336474314"
      }
    },
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "currentLiquidityRate": {
        "from": "16741898105082248227878226",
        "to": "16729034420251786166462161"
      },
      "currentVariableBorrowRate": {
        "from": "24754299737220089168500439",
        "to": "24744787891595785025030309"
      },
      "liquidityIndex": {
        "from": "1022646942123681172406388171",
        "to": "1022648023590366795096579767"
      },
      "variableBorrowIndex": {
        "from": "1039776311937951500543388627",
        "to": "1039777937762328716061125993"
      }
    }
  }
}
```