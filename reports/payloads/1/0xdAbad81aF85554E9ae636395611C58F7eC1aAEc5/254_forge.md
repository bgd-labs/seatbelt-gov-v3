## Reserve changes

### Reserve altered

#### USDe ([0x4c9EDD5852cd905f086C759E8383e09bff1E68B3](https://etherscan.io/address/0x4c9EDD5852cd905f086C759E8383e09bff1E68B3))

| description | value before | value after |
| --- | --- | --- |
| oracle | [0x55B6C4D3E8A27b8A1F5a263321b602e0fdEEcC17](https://etherscan.io/address/0x55B6C4D3E8A27b8A1F5a263321b602e0fdEEcC17) | [0xC26D4a1c46d884cfF6dE9800B6aE7A8Cf48B4Ff8](https://etherscan.io/address/0xC26D4a1c46d884cfF6dE9800B6aE7A8Cf48B4Ff8) |
| oracleDescription | Capped USDe / USD | Capped USDT/USD |
| oracleLatestAnswer | 0.99911504 | 0.99958 |


#### sUSDe ([0x9D39A5DE30e57443BfF2A8307A4256c8797A3497](https://etherscan.io/address/0x9D39A5DE30e57443BfF2A8307A4256c8797A3497))

| description | value before | value after |
| --- | --- | --- |
| oracle | [0xb37aE8aBa6C0C1Bf2c509fc06E11aa4AF29B665A](https://etherscan.io/address/0xb37aE8aBa6C0C1Bf2c509fc06E11aa4AF29B665A) | [0x42bc86f2f08419280a99d8fbEa4672e7c30a86ec](https://etherscan.io/address/0x42bc86f2f08419280a99d8fbEa4672e7c30a86ec) |
| oracleDescription | Capped sUSDe / USDe / USD | Capped sUSDe / USDT / USD |
| oracleLatestAnswer | 1.15937159 | 1.15991113 |


## Raw diff

```json
{
  "reserves": {
    "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3": {
      "oracle": {
        "from": "0x55B6C4D3E8A27b8A1F5a263321b602e0fdEEcC17",
        "to": "0xC26D4a1c46d884cfF6dE9800B6aE7A8Cf48B4Ff8"
      },
      "oracleDescription": {
        "from": "Capped USDe / USD",
        "to": "Capped USDT/USD"
      },
      "oracleLatestAnswer": {
        "from": "99911504",
        "to": "99958000"
      }
    },
    "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497": {
      "oracle": {
        "from": "0xb37aE8aBa6C0C1Bf2c509fc06E11aa4AF29B665A",
        "to": "0x42bc86f2f08419280a99d8fbEa4672e7c30a86ec"
      },
      "oracleDescription": {
        "from": "Capped sUSDe / USDe / USD",
        "to": "Capped sUSDe / USDT / USD"
      },
      "oracleLatestAnswer": {
        "from": "115937159",
        "to": "115991113"
      }
    }
  }
}
```