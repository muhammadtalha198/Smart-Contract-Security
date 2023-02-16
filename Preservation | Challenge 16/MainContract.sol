/*
    =>  This contract utilizes a library to store two different times
        for two different timezones.

    =>  The constructor creates two instances of the library for each
        time to be stored.

    => The goal of  this level is for  you to  claim ownership of the 
       contract.

    ==>  Things that might help

    => Look into Solidity's documentation on the delegatecall low level
       function,  how it  works,   how it can   be  used  to   delegate  
       operations to  on-chain.libraries, and what  implications it has 
       on execution scope.

    =>  Understanding what it means for delegatecall to be context-
        preserving.
        
    =>  Understanding how storage variables are stored and accessed.
    =>  Understanding how casting works between different data types.

*/




// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Preservation {

    // public library contracts 
    address public timeZone1Library;
    address public timeZone2Library;
    address public owner; 
    uint256 storedTime;
    
    // Sets the function signature for delegatecall
    bytes4 constant public setTimeSignature = bytes4(keccak256("setTime(uint256)"));

    constructor(address _timeZone1LibraryAddress, address _timeZone2LibraryAddress) {

      timeZone1Library = _timeZone1LibraryAddress; 
      timeZone2Library = _timeZone2LibraryAddress; 
      owner = msg.sender;

    }
  

    function setFirstTime(uint _timeStamp) public {
         timeZone1Library.delegatecall(abi.encodePacked(setTimeSignature, _timeStamp));
    }


    function setSecondTime(uint _timeStamp) public {
        timeZone2Library.delegatecall(abi.encodePacked(setTimeSignature, _timeStamp));
    }
  }

  // Simple library contract to set the time
  contract LibraryContract {

    // stores a timestamp 
    uint storedTime;  

    function setTime(uint _time) public {
      storedTime = _time;
    }
}
