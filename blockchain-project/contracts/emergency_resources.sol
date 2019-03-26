pragma solidity >=0.5.0;

contract EmergencyContract
{
    uint ambulances = 0;
    uint firefighters = 0;
    uint police = 0;
    address private owner;
    
    constructor () public
    { 
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
    
    function get_ambulances() public view returns (uint)
    {
        return ambulances;
    }
    
    function get_firefighters() public view returns (uint)
    {
        return firefighters;
    }
    
    function get_police() public view returns (uint)
    {
        return police;
    }
}