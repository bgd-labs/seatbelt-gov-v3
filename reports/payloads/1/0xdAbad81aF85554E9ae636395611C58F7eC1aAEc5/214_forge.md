## Reserve changes

### Reserve altered

#### DAI ([0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 22,531,982.9402 DAI [22531982940294546037305310] | 22,031,982.9402 DAI [22031982940294546037305310] |
| virtualBalance | 22,531,941.7220 DAI [22531941722015208573848756] | 22,031,941.7220 DAI [22031941722015208573848756] |


#### USDC ([0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 137,590,529.5313 USDC [137590529531349] | 136,340,529.5313 USDC [136340529531349] |
| virtualBalance | 137,584,191.6060 USDC [137584191606075] | 136,334,191.6060 USDC [136334191606075] |


#### USDT ([0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7))

| description | value before | value after |
| --- | --- | --- |
| aTokenUnderlyingBalance | 158,785,712.0062 USDT [158785712006234] | 157,535,712.0062 USDT [157535712006234] |
| virtualBalance | 158,784,557.7920 USDT [158784557792022] | 157,534,557.7920 USDT [157534557792022] |


## Raw diff

```json
{
  "reserves": {
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "aTokenUnderlyingBalance": {
        "from": "22531982940294546037305310",
        "to": "22031982940294546037305310"
      },
      "virtualBalance": {
        "from": "22531941722015208573848756",
        "to": "22031941722015208573848756"
      }
    },
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "aTokenUnderlyingBalance": {
        "from": "137590529531349",
        "to": "136340529531349"
      },
      "virtualBalance": {
        "from": "137584191606075",
        "to": "136334191606075"
      }
    },
    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "aTokenUnderlyingBalance": {
        "from": "158785712006234",
        "to": "157535712006234"
      },
      "virtualBalance": {
        "from": "158784557792022",
        "to": "157534557792022"
      }
    }
  }
}
```