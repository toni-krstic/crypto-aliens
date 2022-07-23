//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract AlienContract is ERC721Enumerable, ReentrancyGuard {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    event Birth(address indexed owner, uint256 id, uint256 gen);
    event SaleOrder(address indexed owner, uint256 id, uint256 price);
    event BuyOrder(address indexed buyer, address indexed owner, uint256 id, uint256 price);
    event OrderCanceled(address indexed owner, uint256 id, uint256 price);

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_){
    }
    
    struct Alien{
        address payable owner;
        uint256 dna;
        uint64 birthTime;
        uint16 generation;
        uint256 price;
        bool listed;
    }

    Alien[] aliens;

    mapping(uint256 => uint256) private _alienIndex;
    mapping(uint256 => uint256) genBalance;
    Counters.Counter genToMint;
    uint256 private prevGenMax = 10;
    uint256 private genMax = 10;
    Counters.Counter orderCount;  

    function tokensOfOwner(address _owner) public view returns(uint256[] memory ownerTokens) {
        uint256 tokenCount = balanceOf(_owner);

        if(tokenCount == 0){
            return new uint256[](0);
        }else {
            uint256[] memory result = new uint256[](tokenCount);
            uint256 alienIndex;

            for (alienIndex = 0; alienIndex < tokenCount; alienIndex = alienIndex.add(1)) {
                    result[alienIndex] = tokenOfOwnerByIndex(_owner, alienIndex);
                }
            
            return result;
        }
    }

    function getAlien(uint256 _id) external view returns( address owner, uint256 dna, uint256 birthTime, uint256 generatiom, uint256 price,  bool listed){
        Alien storage alien = aliens[_alienIndex[_id]];
        owner = alien.owner;
        dna = alien.dna;
        birthTime = uint256(alien.birthTime);
        generatiom = uint256(alien.generation);
        price = alien.price;
        listed = alien.listed;
    } 

    function createGenXAlien(uint256 _dna) public returns (uint256){
        if(genBalance[genToMint.current()]==genMax){
            genMax = genMax.add(prevGenMax);
            prevGenMax = genMax.sub(prevGenMax);
            genToMint.increment();
        }
        return _createAlien(_dna, genToMint.current(), msg.sender);
    }

    function _createAlien(uint256 _dna, 
                          uint256 _generation,
                          address _owner) internal nonReentrant returns(uint256){
        require(genBalance[_generation] <= genMax, "Maxium aliens for this generation reached!");

        Alien memory _alien = Alien({
            owner: payable(_owner),
            dna: _dna,
            birthTime: uint64(block.timestamp),
            generation: uint16(_generation),
            price: 0,
            listed: false
        });

        aliens.push(_alien);

        _alienIndex[_dna] = aliens.length.sub(1);

        genBalance[_generation]= genBalance[_generation].add(1);

        emit Birth(_owner, _dna, _generation);

        _safeMint(_owner, _dna);

        return _dna;
    }

    function getAllOrders() public view returns(uint256[] memory tokenIds){
        if(orderCount.current() == 0){
            return new uint256[](0);
        }else{
            uint256[] memory result = new uint256[](orderCount.current());
            uint256 i;
            uint256 j = 0;
            for(i=0; i<aliens.length; i++){
                if(aliens[i].listed){
                    result[j] = aliens[i].dna;
                    j++;
                }
            }
            return result;
        }
    }

    function sellAlien(uint256 _id, uint256 _price) public nonReentrant {
        Alien storage alien = aliens[_alienIndex[_id]];
        require(alien.listed == false, "Token is already on sale!");
        require(alien.owner == msg.sender, "You are not the owner of the token!");
        require(_price > 0, "Price needs to be more than 1!");
        _approve(address(this), _id);
        alien.price = _price;
        alien.listed = true;
        orderCount.increment();
        emit SaleOrder(alien.owner, _id, _price);       
    }

    function cancelOrder(uint256 _id) public nonReentrant {
        Alien storage alien = aliens[_alienIndex[_id]];
        require(alien.owner == msg.sender, "You are not the owner of the token!");
        require(alien.listed == true, "Alien is not listed!");
        alien.listed = false;
        orderCount.decrement();
        emit OrderCanceled(alien.owner, _id, alien.price);
    }

    function buyAlien(uint256 _id) public payable nonReentrant {
        Alien storage alien = aliens[_alienIndex[_id]];
        address _to = msg.sender;
        require(alien.owner != msg.sender, "You already own this token!");
        require(msg.value >= alien.price, "Not enough ether!");
        require(alien.price > 0, "Alien price has to be above 0!");
        require(alien.listed == true, "Alien is not listed!");
        alien.listed = false;
        orderCount.decrement();
        _approve(msg.sender, _id);
        safeTransferFrom(alien.owner, _to, _id);
        alien.owner.transfer(msg.value);
        emit BuyOrder(msg.sender, alien.owner, _id, alien.price);
        alien.owner = payable(msg.sender);
    }

}
