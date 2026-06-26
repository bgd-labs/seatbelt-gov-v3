## Reserve changes

### Reserves altered

#### FRAX ([0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F](https://arbiscan.io/address/0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F))

| description | value before | value after |
| --- | --- | --- |
| debtCeiling | 1,000,000 $ [100000000] | 0 $ [0] |


#### MAI ([0x3F56e0c36d275367b8C502090EDF38289b3dEa0d](https://arbiscan.io/address/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d))

| description | value before | value after |
| --- | --- | --- |
| debtCeiling | 100,000 $ [10000000] | 0 $ [0] |


#### EURS ([0xD22a58f79e9481D1a88e00c343885A588b34b68B](https://arbiscan.io/address/0xD22a58f79e9481D1a88e00c343885A588b34b68B))

| description | value before | value after |
| --- | --- | --- |
| debtCeiling | 25,000 $ [2500000] | 0 $ [0] |


#### DAI ([0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1](https://arbiscan.io/address/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1))

| description | value before | value after |
| --- | --- | --- |
| isBorrowableInIsolation | :white_check_mark: | :x: |


#### USDC ([0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8](https://arbiscan.io/address/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8))

| description | value before | value after |
| --- | --- | --- |
| isBorrowableInIsolation | :white_check_mark: | :x: |


#### USD₮0 ([0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9](https://arbiscan.io/address/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9))

| description | value before | value after |
| --- | --- | --- |
| isBorrowableInIsolation | :white_check_mark: | :x: |


#### USDC ([0xaf88d065e77c8cC2239327C5EDb3A432268e5831](https://arbiscan.io/address/0xaf88d065e77c8cC2239327C5EDb3A432268e5831))

| description | value before | value after |
| --- | --- | --- |
| isBorrowableInIsolation | :white_check_mark: | :x: |


## Pool config changes

| description | value before | value after |
| --- | --- | --- |
| priceOracleSentinel | [0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b](https://arbiscan.io/address/0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b) | [0x0000000000000000000000000000000000000000](https://arbiscan.io/address/0x0000000000000000000000000000000000000000) |


## Raw diff

```json
{
  "poolConfig": {
    "priceOracleSentinel": {
      "from": "0x7A9ff54A6eE4a21223036890bB8c4ea2D62c686b",
      "to": "0x0000000000000000000000000000000000000000"
    }
  },
  "reserves": {
    "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F": {
      "debtCeiling": {
        "from": 100000000,
        "to": 0
      }
    },
    "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d": {
      "debtCeiling": {
        "from": 10000000,
        "to": 0
      }
    },
    "0xD22a58f79e9481D1a88e00c343885A588b34b68B": {
      "debtCeiling": {
        "from": 2500000,
        "to": 0
      }
    },
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1": {
      "isBorrowableInIsolation": {
        "from": true,
        "to": false
      }
    },
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": {
      "isBorrowableInIsolation": {
        "from": true,
        "to": false
      }
    },
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9": {
      "isBorrowableInIsolation": {
        "from": true,
        "to": false
      }
    },
    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831": {
      "isBorrowableInIsolation": {
        "from": true,
        "to": false
      }
    }
  }
}
```
