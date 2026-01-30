## Reserve changes

### Reserve altered

#### MKR ([0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2](https://etherscan.io/address/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2))

| description | value before | value after |
| --- | --- | --- |
| oracle | [0xec1D1B3b0443256cc3860e24a46F108e699484Aa](https://etherscan.io/address/0xec1D1B3b0443256cc3860e24a46F108e699484Aa) | [0x44Bb2a64bAf94210B583338D3D97b1e8288Bd478](https://etherscan.io/address/0x44Bb2a64bAf94210B583338D3D97b1e8288Bd478) |
| oracleDescription | MKR / USD | MKR/USD (calculated) |
| oracleLatestAnswer | 1499.87797542 | 1524.210072 |


#### USDtb ([0xC139190F447e929f090Edeb554D95AbB8b18aC1C](https://etherscan.io/address/0xC139190F447e929f090Edeb554D95AbB8b18aC1C))

| description | value before | value after |
| --- | --- | --- |
| oracle | [0x2FA6A78E3d617c1013a22938411602dc9Da98dBa](https://etherscan.io/address/0x2FA6A78E3d617c1013a22938411602dc9Da98dBa) | [0x88025072A7dB6Db5e54E46d43850bb44CA93D6C0](https://etherscan.io/address/0x88025072A7dB6Db5e54E46d43850bb44CA93D6C0) |
| oracleDescription | Capped USDtb / USD | ONE USD |
| oracleLatestAnswer | 0.99932902 | 1 |


## Raw diff

```json
{
  "reserves": {
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
      "oracle": {
        "from": "0xec1D1B3b0443256cc3860e24a46F108e699484Aa",
        "to": "0x44Bb2a64bAf94210B583338D3D97b1e8288Bd478"
      },
      "oracleDescription": {
        "from": "MKR / USD",
        "to": "MKR/USD (calculated)"
      },
      "oracleLatestAnswer": {
        "from": "149987797542",
        "to": "152421007200"
      }
    },
    "0xC139190F447e929f090Edeb554D95AbB8b18aC1C": {
      "oracle": {
        "from": "0x2FA6A78E3d617c1013a22938411602dc9Da98dBa",
        "to": "0x88025072A7dB6Db5e54E46d43850bb44CA93D6C0"
      },
      "oracleDescription": {
        "from": "Capped USDtb / USD",
        "to": "ONE USD"
      },
      "oracleLatestAnswer": {
        "from": "99932902",
        "to": "100000000"
      }
    }
  }
}
```