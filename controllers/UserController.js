var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {
    getSignUp : function(req, res, next)
    {
        return res.render('registro', {title: 'Pagina de registro'});
    },
    postSignUp : function(req, res, next)
    {
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);
        var user = {
            email : req.body.email,
            organization_name : req.body.organization,
            latitude : req.body.latitude,
            longitude : req.body.longitude,
            ambulances : req.body.ambulances,
            firefighters : req.body.firefighters,
            police : req.body.police,
            password : password,
        };
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
            if (err) throw err;
            db.end();
        });
        req.flash('info', 'Se ha registrado satisfactoriamente');
        return res.redirect('/');
    },
    logout : function(req, res, next)
    {
        req.logout();
        res.redirect('/');
    }
};