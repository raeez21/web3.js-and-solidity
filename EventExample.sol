//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract EventExample{
    mapping(address=>uint) public tokenBalance;
    event TokensSent(address indexed _from, address indexed _to, uint _amt);
    constructor(){
        tokenBalance[msg.sender] += 100;
    }
    function sendToken(address _to, uint _amt) public returns(bool){
        require(tokenBalance[msg.sender] >= _amt,"Not enough tokens");
        tokenBalance[msg.sender] -= _amt;
        tokenBalance[_to] += _amt;

        emit TokensSent(msg.sender, _to, _amt);
        return true;
    }
}


