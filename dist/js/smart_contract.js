var contract = require('../../blockchain-project/build/contracts/EmergencyContract.json')
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var EmergencyContract = web3.eth.contract(contract.abi);
var contractInstance = EmergencyContract.at('0x9EfF89ab6320FE8AB91a4a159bA15A4FC52afbE9');

module.exports = {
    set_resources : function (resources)
    {
        let ambulances = resources.ambulances;
        let firefighters = resources.firefighters;
        let police = resources.police;
        contractInstance.set_resources(ambulances,firefighters,police,{from: web3.eth.accounts[0]});
    }
}