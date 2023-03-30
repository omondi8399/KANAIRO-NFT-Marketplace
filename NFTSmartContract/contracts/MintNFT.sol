//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MintNFT, ERC721URIStorage{
    using Counter for Counters.Counter;
    Counters.Counter private tokenId;

    contructor() ERC721("Naiverse Token", "NAINFT"){}

    function _createToken(string memory tokenURI) returns(uint256) {
        tokenId.increment();

        uint256 newTokenId = tokenId.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        return newtokenId
    }

    function _getTokenURI(uint256 tokenId) {
        tokenURI(tokenId);
    }
}