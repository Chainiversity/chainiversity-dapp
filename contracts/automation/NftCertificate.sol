// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

interface IOwnership {
    function owner() external view returns (address);
}

//Certificate address: 0x07C126EdC10A12876E9A719B97c8B6AcD8Abb14b
contract AutomationCertificate is ERC721, Ownable {
    using Counters for Counters.Counter;

    mapping (address => bool) public winners;
    mapping (address => bool) public canMint;
    mapping (address => bool) public registeredContracts;

    Counters.Counter private _tokenIdCounter;

    //set ownership to the manager contract.
    constructor() ERC721("Automation Master", "AUTO") { }

    //Mint certificate button
    function safeMint() external {
        require(canMint[msg.sender], "Didn't pass the level");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        canMint[msg.sender] = false;
        _safeMint(msg.sender, tokenId); 
    }

    function addWinner() external onlyOwner {
        address winner = IOwnership(msg.sender).owner();
        //require(IOwnership(msg.sender).owner() == winner, "Not the owner of the contract");
        require(!winners[winner], "Already won");
        require(!registeredContracts[msg.sender], "Contract already registered");

        winners[winner] = true;
        registeredContracts[msg.sender] = true;
        canMint[winner] = true;
    }    

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721)
    {
        require(from == address(0), "Token not transferable");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _baseURI() internal view virtual override returns (string memory) {
       return "ipfs://QmaLvS3F5vRPAq9fJcAGArra9Uce6cMse7eL8ia5C2hpKB/";
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length != 0 ? string(abi.encodePacked(baseURI, "1.json")) : '';
    }
}