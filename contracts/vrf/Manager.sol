// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ICertificate {
    function addWinner(address, address) external;
}

contract VrfLevelManager {
    //winner contract addresses
    mapping (address => bool) public successContracts;
    address debug_owner;
    address debugContract;

    //coordinator: 0x2eD832Ba664535e5886b75D64C46EB9a228C2610
    //Avalanche Fuji VRF oracle
    address public VRF_CALL_ORACLE; //0x15a08f4444aB7696d0b1B3B542667Ffc4DB65629 - calls fullfillRandomWords()
    address public NFT_CERTIFICATE; //0x1AEe061DD6983B93244b18a4823e7cc2d1525588

    constructor(address _oracle, address _nftcontract) {
        VRF_CALL_ORACLE = _oracle; //set the vrf coordinator?
        NFT_CERTIFICATE = _nftcontract;
    }

    function checkAnswer(address owner, address contractAddr) external {
        require(tx.origin == VRF_CALL_ORACLE, "Chainlink integration not correct");
        debug_owner = owner;
        debugContract = contractAddr;
        ICertificate(NFT_CERTIFICATE).addWinner(owner, contractAddr);
    }

}