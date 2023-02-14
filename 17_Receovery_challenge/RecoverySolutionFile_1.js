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

/*
    suppose we have the address of the Recovery contract address which 
    will be: 
    Recovery_Contract_Address = 0x1D375435c8EfA3e489ef002d2d0B1E7Eb3CC62Fe;

    Now we can use the upper given formula with web3 hash function:

    web3.utils.soliditySha3("0xd6","0x94","0x1D375435c8EfA3e489ef002d2d0B1E7Eb3CC62Fe",
        "0x01");

  
    Return_Value =  0x981c1cc5933018c6c8c0d43a731a686f5baa9ceb11928597c5b9bff6ad00e711

/*
    :_ "0xd6","0x94"  will be those RLP we use from uper formula.
    :_ 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 will the creator address.
    :_ 0x01 transaction no (nonce) which is first transaction from this contract
       in this case.
    :_ Sha3 is hash function (we can use any hash function like keccak too.)
*/
    // will be the right most 20 bytes (right most 40 character will be our address.)
    // SampleToken_Contract_Address = 0x731a686F5baA9CEb11928597c5B9bFf6AD00e711.

    //Full Code will be here to do it for your own and get the return value in console of web.


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dapp</title>

    <style>
      div {
        margin: 30px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1 style="text-align: center">Get the lost address of a contract</h1>
    </div>
    <div>
      <button
        style="text-align: center"
        id="connectButton"
        onclick="connectMetaMask()"
      >
        Connect
      </button>
    </div>

    <div>
      <button id="stakeFunction" onclick="Stake()">GetFullAddress</button>
    </div>

    <!-- <button onclick="callContract()"> Call the contract </button> -->
    <script
      src="https://cdn.jsdelivr.net/npm/web3@1.3.0/dist/web3.min.js"
      type="application/javascript"
    ></script>
    <script src="./app.js"></script>
    <script>
      async function connectMetaMask() {
        if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          try {
            await ethereum.enable();

            var accounts = await window.web3.eth.getAccounts();

            console.log("account is ", accounts[0]);
            document.getElementById("connectButton").innerHTML = accounts[0];

            console.log("web3:  ", web3);
          } catch (error) {
            // User denied account access...
          }
        } else if (window.web3) {
          window.web3 = new Web3(web3.currentProvider);
        } else {
          document.getElementById("connectButton").innerHTML =
            "Please install MetaMask";
        }
      }

      const contractAddress = "0x1e7C7e86F9CADd221eA4183AEbCA17De5e947BC7";

      async function Stake() {
        const account = await window.web3.eth.getAccounts();
        // { from: account[0] }

        let Return_Value = await web3.utils.soliditySha3(
          "0xd6",
          "0x94",
          "0x1e7C7e86F9CADd221eA4183AEbCA17De5e947BC7",
          "0x01"
        );

        console.log("Return_Value: ", Return_Value);
      }
    </script>
  </body>
</html>


