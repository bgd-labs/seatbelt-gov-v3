## Safe transaction batch "Activate Paxos replacement TokenizationSpokes" on Ethereum

- safe: [0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9](https://etherscan.io/address/0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9) (version: 1.4.1, threshold: 5/8)
- safeTxHash: 0xe03d1e837a809f4dfeee0a771a4fd0f304c9c9af5f7a26182eb35e16ac678972 (at nonce 22, batched via MultiSendCallOnly 0x9641d764fc13c8B624c04430C7356C1C7C8102e2)
- tx-builder checksum: 0x397fa025dd1a996b23ec2d68ce2873d09f054695e5845cb9515c0b4ab37b3f89
- transactions:
  - [0x1F0753480bB03EaA00863224602267B7E0525C3d](https://etherscan.io/address/0x1F0753480bB03EaA00863224602267B7E0525C3d), value: 0, signature: addSpoke(address,address,uint256,(uint40,uint40,uint24,bool,bool)), args: {"hub":"0x62d63197660c080236193CA60b70E49A08E90368","spoke":"0xFaB44fbD00C5056956BC1c4d681A80563E10d2fD","assetId":"1","config":"[13000000,0,0,true,false]"}, callData: 0x7cf1dbc500000000000000000000000062d63197660c080236193ca60b70e49a08e90368000000000000000000000000fab44fbd00c5056956bc1c4d681a80563e10d2fd00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000c65d400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000
  - [0x1F0753480bB03EaA00863224602267B7E0525C3d](https://etherscan.io/address/0x1F0753480bB03EaA00863224602267B7E0525C3d), value: 0, signature: addSpoke(address,address,uint256,(uint40,uint40,uint24,bool,bool)), args: {"hub":"0x62d63197660c080236193CA60b70E49A08E90368","spoke":"0xF38C21AE3b87981e954c4eF6b5C1Cbd4BfB00E27","assetId":"2","config":"[13000000,0,0,true,false]"}, callData: 0x7cf1dbc500000000000000000000000062d63197660c080236193ca60b70e49a08e90368000000000000000000000000f38c21ae3b87981e954c4ef6b5c1cbd4bfb00e2700000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000c65d400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000
  - [0x1F0753480bB03EaA00863224602267B7E0525C3d](https://etherscan.io/address/0x1F0753480bB03EaA00863224602267B7E0525C3d), value: 0, signature: addSpoke(address,address,uint256,(uint40,uint40,uint24,bool,bool)), args: {"hub":"0x62d63197660c080236193CA60b70E49A08E90368","spoke":"0xB4086ae520EA1314b3EE7f899887acfD5ccdE406","assetId":"0","config":"[0,0,0,true,false]"}, callData: 0x7cf1dbc500000000000000000000000062d63197660c080236193ca60b70e49a08e90368000000000000000000000000b4086ae520ea1314b3ee7f899887acfd5ccde406000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000
- simulatedExecutionAt: 21/07/2026, 13:13:19, timestamp: 1784639599, block: 25581323
- gasUsed: 347,418 (max tx gas limit: 16,777,216)

#### SafeProxy at `0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9`

```diff
@@ `nonce` nonce  @@
- "22"
+ "23"

```


## Aave V4 changes

#### TransparentUpgradeableProxy at `0x62d63197660c080236193CA60b70E49A08E90368` with implementation HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUBS.PAXOS_HUB")

```diff
@@ `_assetToSpokes` mapping (uint256 => tuple) key `"0"`._inner._positions.0x000000000000000000000000b4086ae520ea1314b3ee7f899887acfd5ccde406 @@
- "0"
+ "4"

@@ `_assetToSpokes` mapping (uint256 => tuple) key `"1"`._inner._positions.0x000000000000000000000000fab44fbd00c5056956bc1c4d681a80563e10d2fd @@
- "0"
+ "4"

@@ `_assetToSpokes` mapping (uint256 => tuple) key `"2"`._inner._positions.0x000000000000000000000000f38c21ae3b87981e954c4ef6b5c1cbd4bfb00e27 @@
- "0"
+ "4"

@@ `_spokes` mapping (uint256 => mapping (address => tuple)) key `"0"`.0xb4086ae520ea1314b3ee7f899887acfd5ccde406.active @@
- false
+ true

@@ `_spokes` mapping (uint256 => mapping (address => tuple)) key `"1"`.0xfab44fbd00c5056956bc1c4d681a80563e10d2fd.addCap @@
- "0"
+ "13000000"

@@ `_spokes` mapping (uint256 => mapping (address => tuple)) key `"1"`.0xfab44fbd00c5056956bc1c4d681a80563e10d2fd.active @@
- false
+ true

@@ `_spokes` mapping (uint256 => mapping (address => tuple)) key `"2"`.0xf38c21ae3b87981e954c4ef6b5c1cbd4bfb00e27.addCap @@
- "0"
+ "13000000"

@@ `_spokes` mapping (uint256 => mapping (address => tuple)) key `"2"`.0xf38c21ae3b87981e954c4ef6b5c1cbd4bfb00e27.active @@
- false
+ true

```
### Verification status for contracts touched in the proposal

| Contract | Status |
|---------|------------|
| AccessManagerEnumerable at `0x08aE3BE30958cDd1847ec58fFfd4C451a87fDF01` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.ACCESS_MANAGER") | Contract |
| SafeProxy at `0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9` | Contract |
| HubConfigurator at `0x1F0753480bB03EaA00863224602267B7E0525C3d` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUB_CONFIGURATOR") | Contract |
| Safe at `0x41675C099F32341bf84BFc5382aF534df5C7461a` | Contract |
| HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` | Contract |
| TransparentUpgradeableProxy at `0x62d63197660c080236193CA60b70E49A08E90368` with implementation HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUBS.PAXOS_HUB") | Contract |
| unknown contract name at `0x9440850335c7C2a644dc2abEBBA93463c9736F2C` | EOA |
| MultiSendCallOnly at `0x9641d764fc13c8B624c04430C7356C1C7C8102e2` | Contract |

### Selfdestruct analysis

| Address | Result |
|---------|------------|
| AccessManagerEnumerable at `0x08aE3BE30958cDd1847ec58fFfd4C451a87fDF01` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.ACCESS_MANAGER") | DelegateCall |
| SafeProxy at `0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9` | DelegateCall |
| HubConfigurator at `0x1F0753480bB03EaA00863224602267B7E0525C3d` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUB_CONFIGURATOR") | Safe |
| Safe at `0x41675C099F32341bf84BFc5382aF534df5C7461a` | DelegateCall |
| HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` | Safe |
| TransparentUpgradeableProxy at `0x62d63197660c080236193CA60b70E49A08E90368` with implementation HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUBS.PAXOS_HUB") | DelegateCall |
| unknown contract name at `0x9440850335c7C2a644dc2abEBBA93463c9736F2C` | Empty |
| MultiSendCallOnly at `0x9641d764fc13c8B624c04430C7356C1C7C8102e2` | Safe |

### Events emitted from the proposal

- SafeProxy at `0x187AAE17d4931310B3fc75743e7F16Bdc9eD77e9`
  - `ExecutionSuccess({"txHash":"0xe03d1e837a809f4dfeee0a771a4fd0f304c9c9af5f7a26182eb35e16ac678972","payment":"0"})`
- TransparentUpgradeableProxy at `0x62d63197660c080236193CA60b70E49A08E90368` with implementation HubInstance at `0x5471419839a8c1C03683e7e1BD525539180E0c18` [:ghost:](https://github.com/aave-dao/aave-address-book  "AaveV4Ethereum.HUBS.PAXOS_HUB")
  - `AddSpoke({"assetId":"1","spoke":"0xFaB44fbD00C5056956BC1c4d681A80563E10d2fD"})`
  - `UpdateSpokeConfig({"assetId":"1","spoke":"0xFaB44fbD00C5056956BC1c4d681A80563E10d2fD","config":{"addCap":13000000,"drawCap":0,"riskPremiumThreshold":0,"active":true,"halted":false}})`
  - `AddSpoke({"assetId":"2","spoke":"0xF38C21AE3b87981e954c4eF6b5C1Cbd4BfB00E27"})`
  - `UpdateSpokeConfig({"assetId":"2","spoke":"0xF38C21AE3b87981e954c4eF6b5C1Cbd4BfB00E27","config":{"addCap":13000000,"drawCap":0,"riskPremiumThreshold":0,"active":true,"halted":false}})`
  - `AddSpoke({"assetId":"0","spoke":"0xB4086ae520EA1314b3EE7f899887acfD5ccdE406"})`
  - `UpdateSpokeConfig({"assetId":"0","spoke":"0xB4086ae520EA1314b3EE7f899887acfD5ccdE406","config":{"addCap":0,"drawCap":0,"riskPremiumThreshold":0,"active":true,"halted":false}})`
