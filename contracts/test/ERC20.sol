// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

import '../PepeERC20.sol';

contract ERC20 is PepeERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
