// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IValidateTx {
    function getTransmitterInfo(address) external view returns (bool, uint8, uint96, uint96, address);
    function addWinner() external;
}

//Solution: 0x7a23444E02C8971E277Aa53bDA88DB53d5c143E1
//Manager contract: 0x8571482D18fFd921578Ba497E2c23F9e382f6605
contract AutomationManager is Ownable {

    uint256 public constant INTERVAL_ANSWER = 30;
    address public constant AUTOMATION_REGISTRY = 0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2;
    mapping (address => uint256) public registeredContracts;
    address public nftContract;

    constructor(address _nftContract) {
        nftContract = _nftContract;
    }

    function registerContract() external {
        require(registeredContracts[msg.sender] == 0, "Contract already registered");
        registeredContracts[msg.sender] = block.timestamp;
    }

    function submitAnswer() external {
        bool isTransmitter = getBool(tx.origin);

        if(isTransmitter && registeredContracts[msg.sender] != 0 && 
        (block.timestamp - registeredContracts[msg.sender]) > INTERVAL_ANSWER) {

            IValidateTx(nftContract).addWinner();
        }        
    }

    function getBool(address _transmitter) public view returns (bool isTransmitter) {
        (isTransmitter, , , , )  = IValidateTx(AUTOMATION_REGISTRY).getTransmitterInfo(_transmitter);
    }
}