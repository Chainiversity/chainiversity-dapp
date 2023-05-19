// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// 0x6dCc5946F1C1Dec3C18B790671168F802Bc90942
contract AutomationCertificate is ERC721, Ownable {
    using Counters for Counters.Counter;

    // my address: 0xFf9616b10E82baE7c8eb98542f9799087D2087c5
    mapping (address => bool) public winners;
    mapping (address => bool) public canMint; // (Connected adres -> mintleyebilir mi?)
    //mapping (address => bool) public registeredContracts;

    //Mintledi -> canMint false dönüyor.

    //Mintlenirse eğer, canMint false'e çevriliyor fakat winners true kalıyor.
    //Winners ve canMint false -> you have not passed the level.
    //Winners ve canMint true -> mint butonu açık 
    

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

    function setCanMint() public onlyOwner {
        canMint[msg.sender] = true;
    }

    function setCanNotMint() public onlyOwner {
        canMint[msg.sender] = false;
    }

    function setWinner() public onlyOwner {
        winners[msg.sender] = true;
    }

    function setNotWinner() public onlyOwner {
        winners[msg.sender] = false;
    }

    function setLevelCompleted() public onlyOwner {
        canMint[msg.sender] = true;
        winners[msg.sender] = true;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721)
    {
        require(from == address(0), "Token not transferable");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _baseURI() internal view virtual override returns (string memory) {
       return "ipfs://QmPhNvYuKELnR64HEkBQStPsRTLrMkHakRvwGCZCACZPrB/";
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length != 0 ? string(abi.encodePacked(baseURI, "vrf.json")) : '';
    }
}