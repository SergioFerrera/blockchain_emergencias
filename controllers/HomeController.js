module.exports = {
    index : function(req, res, next)
    {
        return res.render('index', {
            message: req.flash('info'),
            authmessage : req.flash('authmessage'),
            isAuthenticated : req.isAuthenticated(),
            user : req.user,
            title: 'Pagina de inicio'
        });
    }
}