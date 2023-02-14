/*
    For the solution of this challange we need to find the 
    lost address of that SimpleToken Contract. In case we
    lost the address of the SimpleToken Address we can use
    the Recevery contract address to get the address of our 
    simpleToken Contract address.

    Here's the formula to fin the address of a deployed address: 
    address = rightmost_20_bytes(keccak(RLP(sender address , nonce)));

    :_ All you hav eto figure out the sender addess it could be a wallet address 
    or a contract address.

    :_ nonce is the number(it could be first or second or third.... ) of transactions 
    that has been send to creat that contract addres.

    :_ RLP: recursive length prefix : take data and pock it down in a smaller 
    formate (serialize data) so it can easily be  transmitted over the network.


*/


// No wwe can use the Web3 function to get this done.


    suppose we have the address of the Recovery contract address which 
    will be: 
    Recovery_Contract_Address = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    Now we can use the upper given formula with web3 hash function:

    web3.utils.soliditySha3("0xd6","0x94","0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        "0x01");

    //this is an imagined value.
    Return_Value = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2078731D3Ca6b7E34aC0F824c42

/*
    :_ "0xd6","0x94"  will be those RLP we use from uper formula.
    :_ 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 will the creator address.
    :_ 0x01 transaction no (nonce) which is first transaction from this contract
       in this case.
    :_ Sha3 is hash function (we can use any hash function like keccak too.)
*/
    // will be the right most 20 bytes (right most 40 character will be our address.)
    SampleToken_Contract_Address = 0x77dD3315835cb2078731D3Ca6b7E34aC0F824c42.
