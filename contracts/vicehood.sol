pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Vicehood is ERC20 {
    constructor() ERC20("Vicehood", "VICE") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}