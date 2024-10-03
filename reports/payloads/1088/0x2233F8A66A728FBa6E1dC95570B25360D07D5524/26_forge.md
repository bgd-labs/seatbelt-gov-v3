## Reserve changes

### Reserve altered

#### WETH ([0x420000000000000000000000000000000000000A](https://explorer.metis.io/address/0x420000000000000000000000000000000000000A))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8](https://explorer.metis.io/address/0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8) | [0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a](https://explorer.metis.io/address/0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a) |
| interestRate | ![before](/.assets/3344097cc58003c1aad8dd7147a8287f660fc210.svg) | ![after](/.assets/71895c864db840e491ca662b3cad22a4253a90cf.svg) |

#### m.DAI ([0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0](https://explorer.metis.io/address/0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8](https://explorer.metis.io/address/0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8) | [0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a](https://explorer.metis.io/address/0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a) |
| interestRate | ![before](/.assets/9e000c9b0f38fb906c182c50b60f6c846aff233c.svg) | ![after](/.assets/828b263ce2ad0bdc8907421ef3e0480eab895c14.svg) |

#### Metis ([0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000](https://explorer.metis.io/address/0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8](https://explorer.metis.io/address/0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8) | [0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a](https://explorer.metis.io/address/0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a) |
| interestRate | ![before](/.assets/d94ed5f5babdd12bc4f369c0ebc698f790544557.svg) | ![after](/.assets/3b31de5217b13c16e768907ef1b5890f5604f73d.svg) |

#### m.USDC ([0xEA32A96608495e54156Ae48931A7c20f0dcc1a21](https://explorer.metis.io/address/0xEA32A96608495e54156Ae48931A7c20f0dcc1a21))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8](https://explorer.metis.io/address/0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8) | [0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a](https://explorer.metis.io/address/0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a) |
| interestRate | ![before](/.assets/42f481f3dae577e453564d6e975b96b0eb0bf288.svg) | ![after](/.assets/70fce58b144e509a92aa9a9632955c54122accd0.svg) |

#### m.USDT ([0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC](https://explorer.metis.io/address/0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC))

| description | value before | value after |
| --- | --- | --- |
| interestRateStrategy | [0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8](https://explorer.metis.io/address/0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8) | [0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a](https://explorer.metis.io/address/0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a) |
| interestRate | ![before](/.assets/86e17dfb1f59acc822d3f9db2ed8a99de7f72a9f.svg) | ![after](/.assets/fc16dbf6b953b025b7e78e71fe1918ae54d368df.svg) |

## Raw diff

```json
{
  "poolConfig": {
    "poolConfiguratorImpl": {
      "from": "0x419226e0Ad27f3B2019123f7246a364622b018e5",
      "to": "0x4816b2C2895f97fB918f1aE7Da403750a0eE372e"
    },
    "poolImpl": {
      "from": "0x3E89ce4ECe20bCDCcDd48FFA60669242720276aD",
      "to": "0xC89fBD2a15e88A72A76428DA00dDBBE47cb4EBB0"
    },
    "protocolDataProvider": {
      "from": "0xD554B5e13F796F4a65B6f607781C2dc3C46f9fa9",
      "to": "0xC01372469A17b6716A38F00c277533917B6859c0"
    }
  },
  "reserves": {
    "0x420000000000000000000000000000000000000A": {
      "interestRateStrategy": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0": {
      "interestRateStrategy": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000": {
      "interestRateStrategy": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "interestRateStrategy": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "interestRateStrategy": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    }
  },
  "strategies": {
    "0x420000000000000000000000000000000000000A": {
      "address": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0": {
      "address": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000": {
      "address": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21": {
      "address": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    },
    "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC": {
      "address": {
        "from": "0xE263434d0c71Ff6EB089034F2aFf89e9f6F714E8",
        "to": "0x258625AfDe0073f5Bbce50C0305f4C23B16C7F3a"
      }
    }
  }
}
```