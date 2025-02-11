## Reserve changes

### Reserve altered

#### WETH ([0x4200000000000000000000000000000000000006](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 4,468.3756 WETH [4468375692094265499950] | 4,473.1027 WETH [4473102738842083296118] |
| virtualBalance | 4,468.3756 WETH [4468375692094265499950] | 4,473.1027 WETH [4473102738842083296118] |


#### USDC ([0x7F5c764cBc14f9669B88837ca1490cCa17c31607](https://optimistic.etherscan.io/address/0x7F5c764cBc14f9669B88837ca1490cCa17c31607))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 747,752.2970 USDC [747752297035] | 752,236.7715 USDC [752236771573] |
| virtualBalance | 747,675.2501 USDC [747675250173] | 752,159.7247 USDC [752159724711] |


#### USDT ([0x94b008aA00579c1307B0EF2c499aD98a8ce58e58](https://optimistic.etherscan.io/address/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 5,341,459.5293 USDT [5341459529344] | 5,343,732.0023 USDT [5343732002354] |
| virtualBalance | 5,341,400.2749 USDT [5341400274944] | 5,343,672.7479 USDT [5343672747954] |


## Raw diff

```json
{
  "reserves": {
    "0x4200000000000000000000000000000000000006": {
      "aTokenUnderlyingBalance": {
        "from": "4468375692094265499950",
        "to": "4473102738842083296118"
      },
      "virtualBalance": {
        "from": "4468375692094265499950",
        "to": "4473102738842083296118"
      }
    },
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": {
      "aTokenUnderlyingBalance": {
        "from": "747752297035",
        "to": "752236771573"
      },
      "virtualBalance": {
        "from": "747675250173",
        "to": "752159724711"
      }
    },
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": {
      "aTokenUnderlyingBalance": {
        "from": "5341459529344",
        "to": "5343732002354"
      },
      "virtualBalance": {
        "from": "5341400274944",
        "to": "5343672747954"
      }
    }
  }
}
```