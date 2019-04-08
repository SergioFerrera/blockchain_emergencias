module.exports = {
    getEmergency : function(req, res, next)
    {
        return res.render('solicitud', {
            message: req.flash('info'),
            isAuthenticated : req.isAuthenticated(),
            user : req.user,
            title: 'Pagina de solicitud de recursos'
        });
    },
    postEmergency : function(req, res, next)
    {
        var emergency = {
            ambulances : req.body.ambulances,
            firefighters : req.body.firefighters,
            police : req.body.police,
        };
        console.log(emergency.ambulances);
        req.flash('info', 'Se ha enviado correctamente la emergencia');
        return res.redirect('/solicitud');
    }
}