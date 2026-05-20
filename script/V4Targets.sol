// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ISpoke, IHub} from "aave-address-book/AaveV4.sol";
import {AaveV4EthereumGetters} from "aave-address-book/AaveV4Ethereum.sol";
import {ChainIds} from "solidity-utils/contracts/utils/ChainHelpers.sol";

library V4Targets {
    function hasV4(uint256 chainId) internal pure returns (bool) {
        return chainId == ChainIds.MAINNET;
    }

    function getSpokes(uint256 chainId) internal pure returns (ISpoke[] memory) {
        if (chainId == ChainIds.MAINNET) return AaveV4EthereumGetters.getAllSpokes();
        return new ISpoke[](0);
    }

    function getHubs(uint256 chainId) internal pure returns (IHub[] memory) {
        if (chainId == ChainIds.MAINNET) return AaveV4EthereumGetters.getAllHubs();
        return new IHub[](0);
    }
}
