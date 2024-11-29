## Reserve changes

### Reserve altered

#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 11,020,707.7543 DAI [11020707754347161840870744] | 10,520,707.7543 DAI [10520707754347161840870744] |
| virtualBalance | 11,020,666.5360 DAI [11020666536067824377414190] | 10,520,666.5360 DAI [10520666536067824377414190] |


#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 130,077,975.9873 USDC [130077975987326] | 128,827,975.9873 USDC [128827975987327] |
| virtualBalance | 130,071,638.0620 USDC [130071638062052] | 128,821,638.0620 USDC [128821638062053] |


#### USDT ([0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 177,615,363.1293 USDT [177615363129309] | 176,365,363.1293 USDT [176365363129309] |
| virtualBalance | 177,614,208.9150 USDT [177614208915097] | 176,364,208.9150 USDT [176364208915097] |


## Raw diff

```json
{
  "reserves": {
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "aTokenUnderlyingBalance": {
        "from": "11020707754347161840870744",
        "to": "10520707754347161840870744"
      },
      "virtualBalance": {
        "from": "11020666536067824377414190",
        "to": "10520666536067824377414190"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "aTokenUnderlyingBalance": {
        "from": "130077975987326",
        "to": "128827975987327"
      },
      "virtualBalance": {
        "from": "130071638062052",
        "to": "128821638062053"
      }
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "aTokenUnderlyingBalance": {
        "from": "177615363129309",
        "to": "176365363129309"
      },
      "virtualBalance": {
        "from": "177614208915097",
        "to": "176364208915097"
      }
    }
  }
}
```