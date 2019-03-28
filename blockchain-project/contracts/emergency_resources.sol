pragma solidity >=0.5.0;

contract EmergencyContract
{
    uint public ambulances = 0;
    uint public firefighters = 0;
    uint public police = 0;
    address private owner;
    
    constructor () public
    { 
        ambulances = 0;
        firefighters = 0;
        police = 0;
        owner = msg.sender; 
    } 
    
    modifier onlyOwner()
    { 
        require(owner == msg.sender);
        _; 
    }
    
    function set_resources(uint n_a, uint n_f, uint n_p) onlyOwner public
    {
        ambulances = n_a;
        firefighters = n_f;
        police = n_p;
    }
}