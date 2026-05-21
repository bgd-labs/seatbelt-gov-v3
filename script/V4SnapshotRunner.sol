// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {SnapshotV4} from "aave-helpers/src/dependencies/v4/SnapshotV4.sol";
import {ISpoke, IHub} from "aave-address-book/AaveV4.sol";

contract V4SnapshotRunner is SnapshotV4 {
    function snapshotAndWrite(
        string memory name,
        ISpoke[] memory spokes,
        IHub[] memory hubs
    ) external {
        writeV4SnapshotJson(name, createV4Snapshot(spokes, hubs));
    }
}
