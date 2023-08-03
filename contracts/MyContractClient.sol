// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface IMyContract {
    function value() external view returns(uint256);
}


contract MyContractClient{

    IMyContract iMyContract;
    constructor(address _myContractAddress){
        iMyContract = IMyContract(_myContractAddress);
    }

    function getDoubleValue() external view returns(uint256){
        return iMyContract.value() *2;
    }
}