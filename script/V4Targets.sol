// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ISpoke, IHub} from "aave-address-book/AaveV4.sol";
import {AaveV4EthereumGetters} from "aave-address-book/AaveV4Ethereum.sol";
import {ChainIds} from "solidity-utils/contracts/utils/ChainHelpers.sol";

library V4Targets {
    function hasV4() internal view returns (bool) {
        return block.chainid == ChainIds.MAINNET;
    }

    function getSpokes() internal view returns (ISpoke[] memory) {
        if (block.chainid == ChainIds.MAINNET) return AaveV4EthereumGetters.getAllSpokes();
        return new ISpoke[](0);
    }

    function getHubs() internal view returns (IHub[] memory) {
        if (block.chainid == ChainIds.MAINNET) return AaveV4EthereumGetters.getAllHubs();
        return new IHub[](0);
    }
}
