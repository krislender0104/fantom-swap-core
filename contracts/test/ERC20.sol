// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

import '../FohmERC20.sol';

contract ERC20 is FohmERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
