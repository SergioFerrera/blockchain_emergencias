var contract_json = require('../../blockchain-project/build/contracts/EmergencyContract.json');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var EmergencyContract = web3.eth.contract(contract_json.abi);

module.exports = {
    set_resources : function (resources,user)
    {
        const contract_creation = EmergencyContract.new({from: web3.eth.accounts[user.id-1], data: contract_json.bytecode, gas: 4712388, gasPrice: 100000000000});
        const contract_address = web3.eth.getTransactionReceipt(contract_creation.transactionHash).contractAddress
        var contractInstance = EmergencyContract.at(contract_address);
        let ambulances = resources.ambulances;
        let firefighters = resources.firefighters;
        let police = resources.police;
        contractInstance.set_resources(ambulances,firefighters,police,{from: web3.eth.accounts[user.id-1]});
    }
}