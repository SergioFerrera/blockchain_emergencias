const EmergencyContract = artifacts.require("EmergencyContract");

module.exports = function(deployer) {
  deployer.deploy(EmergencyContract);
};