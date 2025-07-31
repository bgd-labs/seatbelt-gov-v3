// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {GovV3Helpers} from "aave-helpers/src/GovV3Helpers.sol";
import {ProtocolV3TestBase, ReserveConfig, IPool} from "aave-helpers/src/ProtocolV3TestBase.sol";
import {AaveV3Base} from "aave-address-book/AaveV3Base.sol";
import {AaveV3Gnosis} from "aave-address-book/AaveV3Gnosis.sol";
import {AaveV3Metis} from "aave-address-book/AaveV3Metis.sol";
import {AaveV3Ethereum} from "aave-address-book/AaveV3Ethereum.sol";
import {AaveV3Polygon} from "aave-address-book/AaveV3Polygon.sol";
import {AaveV3Optimism} from "aave-address-book/AaveV3Optimism.sol";
import {AaveV3Arbitrum} from "aave-address-book/AaveV3Arbitrum.sol";
import {AaveV3BNB} from "aave-address-book/AaveV3BNB.sol";
import {AaveV3Scroll} from "aave-address-book/AaveV3Scroll.sol";
import {AaveV3Avalanche} from "aave-address-book/AaveV3Avalanche.sol";
import {AaveV3Linea} from "aave-address-book/AaveV3Linea.sol";
import {AaveV3Sonic} from "aave-address-book/AaveV3Sonic.sol";
import {AaveV3Celo} from "aave-address-book/AaveV3Celo.sol";
import {AaveV3Soneium} from "aave-address-book/AaveV3Soneium.sol";
import {ChainIds} from "solidity-utils/contracts/utils/ChainHelpers.sol";

contract E2EPayload is Script, ProtocolV3TestBase {
    error UnknownPool();

    function run(uint40 payloadId) public {
        IPool pool = _getPool();
        if (address(pool) == address(0)) revert UnknownPool();
        defaultTest(
            string(
                abi.encodePacked(
                    "foundry/",
                    vm.toString(block.chainid),
                    "_",
                    vm.toString(payloadId)
                )
            ),
            pool,
            payloadId,
            false
        );
    }

    /// @dev Default test function for E2E testi.
    function defaultTest(
        string memory reportName,
        IPool pool,
        uint40 payloadId,
        bool runE2E
    ) public returns (ReserveConfig[] memory, ReserveConfig[] memory) {
        string memory beforeString = string(
            abi.encodePacked(reportName, "_before")
        );
        ReserveConfig[] memory configBefore = createConfigurationSnapshot(
            beforeString,
            pool
        );

        GovV3Helpers.executePayload(vm, payloadId);

        string memory afterString = string(
            abi.encodePacked(reportName, "_after")
        );
        ReserveConfig[] memory configAfter = createConfigurationSnapshot(
            afterString,
            pool
        );

        _diffReports(payloadId, beforeString, afterString);

        configChangePlausibilityTest(configBefore, configAfter);

        if (runE2E) e2eTest(pool);
        return (configBefore, configAfter);
    }

    function _diffReports(
        uint40 payloadId,
        string memory reportBefore,
        string memory reportAfter
    ) internal {
        string memory outPath = string(
            abi.encodePacked(
                "./reports/payloads/",
                vm.toString(block.chainid),
                "/",
                vm.toString(
                    address(GovV3Helpers.getPayloadsController(block.chainid))
                ),
                "/",
                vm.toString(payloadId),
                "_forge.md"
            )
        );
        string memory beforePath = string(
            abi.encodePacked("./reports/", reportBefore, ".json")
        );
        string memory afterPath = string(
            abi.encodePacked("./reports/", reportAfter, ".json")
        );

        string[] memory inputs = new string[](7);
        inputs[0] = "npx";
        inputs[1] = "@bgd-labs/aave-cli@1.2.3";
        inputs[2] = "diff-snapshots";
        inputs[3] = beforePath;
        inputs[4] = afterPath;
        inputs[5] = "-o";
        inputs[6] = outPath;
        vm.ffi(inputs);
    }

    function _getPool() internal view returns (IPool pool) {
        if (block.chainid == ChainIds.MAINNET) return AaveV3Ethereum.POOL;
        if (block.chainid == ChainIds.OPTIMISM) return AaveV3Optimism.POOL;
        if (block.chainid == ChainIds.ARBITRUM) return AaveV3Arbitrum.POOL;
        if (block.chainid == ChainIds.METIS) return AaveV3Metis.POOL;
        if (block.chainid == ChainIds.POLYGON) return AaveV3Polygon.POOL;
        if (block.chainid == ChainIds.AVALANCHE) return AaveV3Avalanche.POOL;
        if (block.chainid == ChainIds.BNB) return AaveV3BNB.POOL;
        if (block.chainid == ChainIds.SCROLL) return AaveV3Scroll.POOL;
        if (block.chainid == ChainIds.GNOSIS) return AaveV3Gnosis.POOL;
        if (block.chainid == ChainIds.BASE) return AaveV3Base.POOL;
        if (block.chainid == ChainIds.LINEA) return AaveV3Linea.POOL;
        if (block.chainid == ChainIds.SONIC) return AaveV3Sonic.POOL;
        if (block.chainid == ChainIds.CELO) return AaveV3Celo.POOL;
        if (block.chainid == ChainIds.SONEIUM) return AaveV3Soneium.POOL;
    }
}
