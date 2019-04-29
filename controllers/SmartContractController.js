var smart_contract = require('../dist/js/smart_contract');
var mysql = require('mysql');
var contract_json = require('../blockchain-project/build/contracts/EmergencyContract.json');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var EmergencyContract = web3.eth.contract(contract_json.abi);

module.exports = {
    getEmergency : function(req, res, next)
    {
        if (req.user.user_type != "Proveedor de recursos")
        {
            var config = require('../database/config');
            var db = mysql.createConnection(config);
            db.connect();
            db.query('SELECT DISTINCT organization_name FROM users', function (err, rows, fields) {
                if (err) throw err;
                return res.render('solicitud', {
                    organizations_names : rows,
                    message: req.flash('info'),
                    isAuthenticated : req.isAuthenticated(),
                    user : req.user,
                    title: 'Pagina de solicitud de recursos'
                });
            });
            db.end();
        }
        else
        {
            return res.redirect('/emergencias');
        }
    },
    postEmergency : function(req, res, next)
    {
        var resources = {
            ambulances : req.body.ambulances,
            firefighters : req.body.firefighters,
            police : req.body.police,
        };
        req.flash('info', 'Se ha enviado correctamente la emergencia');
        smart_contract.set_resources(resources,req.user,req.body.organizations);
        return res.redirect('/solicitud');
    },
    getContracts : function(req, res, next)
    {
        if (req.user.user_type != "Operador de emergencias")
        {
            var config = require('../database/config');
            var db = mysql.createConnection(config);
            db.connect();
            var organization_name = req.user.organization_name;
            db.query('SELECT * FROM contracts', function(err, rows, fields){
                if (err) throw err;
                var emergencies = [];
                var i;
                rows.forEach(function(i) {
                    var contractInstance = EmergencyContract.at(i.address);
                    if (contractInstance.state()==true){
                        for (j = 0; j < contractInstance.get_organizations_length(); j++){
                            if (contractInstance.organizations(j) == organization_name){
                                emergencies.push({id: i.id, ambulances: contractInstance.ambulances(), firefighters: contractInstance.firefighters(), police: contractInstance.police()});
                            }
                        };
                    };
                });
                db.query('SELECT * FROM users WHERE id=?', req.user.id, function(err, rows, fields){
                    req.user.ambulances=rows[0].ambulances;
                    req.user.firefighters=rows[0].firefighters;
                    req.user.police=rows[0].police;
                    return res.render('emergencias', {
                        emergencies : emergencies,
                        message: req.flash('info'),
                        isAuthenticated : req.isAuthenticated(),
                        user : req.user,
                        title: 'Emergencias registradas'
                    });
                });
            });       
        }
        else
        {
            return res.redirect('/solicitud');
        }
    }
}