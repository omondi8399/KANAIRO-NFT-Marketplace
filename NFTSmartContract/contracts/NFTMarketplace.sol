// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//INTERNAL IMPORT FOR NFT OPENZEPPELIN
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.00015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }    

    event idMarketItemCreated (
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner, 
            "only owner of the marketplace can change the listing price"
        );
        _;
    }

    constructor() ERC721("Naiverse Token", "NAINFT") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint _listingPrice) public payable onlyOwner {

        listingPrice = _listingPrice;

    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // LETS create "CREATE NFT TOKEN FUNCTION"

    function createToken(string memory tokenURI, uint256 price) public payable returns (uint256) {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    //CREATING MARKET ITEMS

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be atleast 1");
        require(msg.value == listingPrice, "Price must be at least 1 wei");

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price, 
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);
    } 

    //FUNCTION FOR RESALE TOKEN
    function reSellToken(uint256 tokenId, uint256 price) public payable {
        require(idMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this operation");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }
}
