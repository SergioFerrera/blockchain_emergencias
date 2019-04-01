pragma solidity >=0.5.0;

contract EmergencyContract
{
    int public ambulances = 0;
    int public firefighters = 0;
    int public police = 0;
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
    
    function set_resources(int n_a, int n_f, int n_p) onlyOwner public
    {
        ambulances = n_a;
        firefighters = n_f;
        police = n_p;
    }
}