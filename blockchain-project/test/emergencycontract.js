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
    let state = await emergencyContractInstance.state();
    let organizations_length = await emergencyContractInstance.get_organizations_length();
    assert.equal(ambulances.valueOf(), 0, 'Numero de ambulancias no es correcto');
    assert.equal(firefighters.valueOf(), 0, 'Numero de bomberos no es correcto');
    assert.equal(police.valueOf(), 0, 'Numero de policias no es correcto');
    assert.equal(organizations_length.valueOf(), 0, 'El tamaño del vector de organizaciones no es correcto');
    assert.equal(state, true, 'El estado del contrato no es correcto');
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
  it('Inicializando contrato especificando una organización', async () => {
    emergencyContractInstance.set_organization('prueba');
    let organization = await emergencyContractInstance.organizations(0);
    let organizations_length = await emergencyContractInstance.get_organizations_length();
    assert.equal(organization, 'prueba', 'No se retorna correctamente la organización especificada');
    assert.equal(organizations_length.valueOf(), 1, 'El tamaño del vector de organizaciones no es correcto');
  });
  it('Inicializando contrato especificando cantidad de recursos y enviando unos recursos', async () => {
    emergencyContractInstance.set_resources(3,4,5);
    emergencyContractInstance.send_resources(1,2,3);
    let ambulances = await emergencyContractInstance.ambulances();
    let firefighters = await emergencyContractInstance.firefighters();
    let police = await emergencyContractInstance.police();
    assert.equal(ambulances.valueOf(), 2, 'Numero de ambulancias no es correcto');
    assert.equal(firefighters.valueOf(), 2, 'Numero de bomberos no es correcto');
    assert.equal(police.valueOf(), 2, 'Numero de policias no es correcto');
  });
  it('Comprobando función check_request', async () => {
    emergencyContractInstance.set_resources(0,0,0);
    emergencyContractInstance.check_request();
    let state = await emergencyContractInstance.state();
    assert.equal(state, false, 'El estado del contrato no es correcto');
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
