## Reserve changes

### Reserves altered

#### GHO ([0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f))

| description | value before | value after |
| --- | --- | --- |
| supplyCap | 0 GHO | 1 GHO |
| isFlashloanable | false | true |
| reserveFactor | 0 % [0] | 100 % [10000] |
| aTokenUnderlyingBalance | 196,124.3016 GHO [196124301654921447902003] | 76,417,500.8217 GHO [76417500821767339436703825] |
| virtualAccountingActive | false | true |
| virtualBalance | 0 GHO [0] | 76,417,500.8217 GHO [76417500821767339436703825] |


## Raw diff

```json
{
  "poolConfig": {
    "protocolDataProvider": {
      "from": "0x497a1994c46d4f6C864904A9f1fac6328Cb7C8a6",
      "to": "0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD"
    }
  },
  "reserves": {
    "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f": {
      "aTokenUnderlyingBalance": {
        "from": "196124301654921447902003",
        "to": "76417500821767339436703825"
      },
      "isFlashloanable": {
        "from": false,
        "to": true
      },
      "reserveFactor": {
        "from": 0,
        "to": 10000
      },
      "supplyCap": {
        "from": 0,
        "to": 1
      },
      "virtualAccountingActive": {
        "from": false,
        "to": true
      },
      "virtualBalance": {
        "from": "0",
        "to": "76417500821767339436703825"
      }
    }
  }
}
```