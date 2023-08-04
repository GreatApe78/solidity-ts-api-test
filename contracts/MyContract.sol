// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MyContract is Ownable,ERC20 {
    uint256 public value;

    event ValueChanged(uint256 indexed newValue);

    constructor(uint256 _initialValue)ERC20("Generic Token","GNTK"){
        value = _initialValue;
        emit ValueChanged(_initialValue);
    }

    function setValue(uint256 _newValue) external {
        value = _newValue;
        emit ValueChanged(_newValue);
    }
}
