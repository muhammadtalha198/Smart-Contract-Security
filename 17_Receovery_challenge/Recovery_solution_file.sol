/*
    For the solution of this challange we need to find the 
    lost address of that Recovery Contract.

    Here's the formula to fin the address of a deployed address: 
    address = rightmost_20_bytes(keccak(RLP(sender address , nonce)));

    :_ All you hav eto figure out the sender addess it could be a wallet address 
    or a contract address.

    :_ nonce is the number(it could be first or second or third.... ) of transactions 
    that has been send to creat that contract addres.

    :_ RLP: recursive length prefix : take data and pock it down in a smaller 
    formate (serialize data) so it can easily be  transmitted over the network.




*/
