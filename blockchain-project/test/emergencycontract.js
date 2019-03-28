const EmergencyContract = artifacts.require("EmergencyContract");

contract('EmergencyContract', (accounts) => {
  let emergencyContractInstance;
  let owner = accounts[0];
  let account = accounts[1];
  beforeEach(async () => {
    emergencyContractInstance = await EmergencyContract.deployed();
  });
  it('Inicializando contrato sin especificar cantidad de recursos', async () => {
    let ambulances = await emergencyContractInstance.ambulances();
    let firefighters = await emergencyContractInstance.firefighters();
    let police = await emergencyContractInstance.police();
    assert.equal(ambulances.valueOf(), 0, 'Numero de ambulancias no es correcto');
    assert.equal(firefighters.valueOf(), 0, 'Numero de bomberos no es correcto');
    assert.equal(police.valueOf(), 0, 'Numero de policias no es correcto');
  });
  it('Inicializando contrato especificando cantidad de recursos', async () => {
    emergencyContractInstance.set_resources(3,4,5);
    let ambulances = await emergencyContractInstance.ambulances();
    let firefighters = await emergencyContractInstance.firefighters();
    let police = await emergencyContractInstance.police();
    assert.equal(ambulances.valueOf(), 3, 'Numero de ambulancias no es correcto');
    assert.equal(firefighters.valueOf(), 4, 'Numero de bomberos no es correcto');
    assert.equal(police.valueOf(), 5, 'Numero de policias no es correcto');
  });
  it('Comprobando restricción creador de contrato', async () => {
    try {
      let result = await emergencyContractInstance.set_resources.call({from: account});
      assert.equal(result.toString(), owner);
    } catch (e) {
      console.log(`${account} no es el creador del contrato`);
    }
  });
});
