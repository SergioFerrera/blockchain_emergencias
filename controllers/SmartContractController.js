var smart_contract = require('../dist/js/smart_contract');
var mysql = require('mysql');

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
        }
        else
        {
            return res.redirect('/');
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
        smart_contract.set_resources(resources,req.user);
        return res.redirect('/solicitud');
    }
}