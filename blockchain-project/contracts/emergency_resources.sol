pragma solidity >=0.5.0;

contract EmergencyContract
{
    int public ambulances;
    int public firefighters;
    int public police;
    string[] public organizations;
    bool public state;
    address private owner;
    
    constructor () public
    { 
        ambulances = 0;
        firefighters = 0;
        police = 0;
        state=true;
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

    function set_organization(string memory o) onlyOwner public
    {
        organizations.push(o);
    }

    function get_organizations_length() public view returns(uint)
    {
        return organizations.length;
    }

    function send_resources(int r_1, int r_2, int r_3) public
    {
        ambulances = ambulances-r_1;
        firefighters = firefighters-r_2;
        police = police-r_3;
    }

    function check_request() public
    {
        if(ambulances == 0 && firefighters == 0 && police == 0)
            state = false;
    }
}