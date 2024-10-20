### MoodCareHippoToken Contract

````
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MoodCareHippoToken is ERC20, Ownable {
    uint256 public constant MINT_AMOUNT = 1 * 10**18; // 1 token with 18 decimals
    uint256 public constant MAX_MINT_PER_HOUR = 5 * 10**18; // 5 tokens per hour
    uint256 public constant MINT_INTERVAL = 15 seconds; // 15 seconds between mints

    struct MintInfo {
        uint256 lastMintTime;
        uint256 mintedAmountInLastHour;
    }

    mapping(address => MintInfo) private _mintInfo;

    // Mappings to store community information
    mapping(uint256 => string) public communityNames; // Maps community ID to name
    mapping(string => uint256) public communityIds; // Maps community name to ID
    mapping(string => uint256) public communityTokens; // Maps community name to total tokens
    uint256 public communityCount; // Keeps track of the total number of communities

    constructor() ERC20("Frustrated CareHippos Token", unicode"😤🦛") Ownable(msg.sender) {}

    function mint(string memory communityName) public {
        MintInfo storage info = _mintInfo[msg.sender];

        // Check if 15 seconds have passed since the last mint
        require(block.timestamp >= info.lastMintTime + MINT_INTERVAL, "You must wait 15 seconds between mints");

        // Reset minted amount if more than an hour has passed
        if (block.timestamp >= info.lastMintTime + 1 hours) {
            info.mintedAmountInLastHour = 0;
        }

        // Check if the user has minted more than 5 tokens in the last hour
        require(info.mintedAmountInLastHour + MINT_AMOUNT <= MAX_MINT_PER_HOUR, "You can mint a maximum of 5 tokens per hour");

        // Update minting info
        info.lastMintTime = block.timestamp;
        info.mintedAmountInLastHour += MINT_AMOUNT;

        // Mint the token
        _mint(msg.sender, MINT_AMOUNT);
        // Track the total tokens for the community
        communityTokens[communityName] += MINT_AMOUNT;
    }

    // Owner function to mint tokens without limits, useful for contract owner
    function ownerMint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```
````
