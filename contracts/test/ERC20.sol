pragma solidity >=0.5.16;

import '../WagyuERC20.sol';

contract ERC20 is WagyuERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
