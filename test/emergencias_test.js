var expect  = require('chai').expect;
var request = require('request');

describe('Comprobando código de estado HTTP 200', function() {
    request('http://localhost:3000/emergencias' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

describe('Comprobando código de estado HTTP 404', function() {
    request('http://localhost:3000/emergencias/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
    });
});

describe('Comprobando titulo de la herramienta', function() {
    it('Comprobando etiqueta title y contenido', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<title>Emergencias registradas</title>');
        });
    });
});

describe('Comprobando menu', function() {
    it('Comprobando etiqueta nav', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">');
        });
    }); 
    it('Comprobando etiqueta nav-brand y su contenido', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<a class="navbar-brand" href="/">BlockChain Emergencias</a>');
        });
    });
    it('Comprobando boton de menu responsive', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<button class="navbar-toggler"');
        });
    });
    describe('Comprobando botones del menú', function() {
        it('Comprobando botón de Emergencia', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<button class="btn btn-primary mr-2" type="button">Emergencias</button>');
            });
        });
        it('Comprobando botón cierre de sesión', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<button class="btn btn-secondary mr-2" type="button">Cerrar sesión</button>');
            });
        });
    });
});

describe('Comprobando titulo (h1) y descripción del proyecto', function() {
    it('Comprobando titulo (h1)', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<h1>Panel de gestión de la organización');
        });
    });
    it('Comprobando descripción del proyecto', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<p class="lead">Panel para satisfacer recursos demandados</p>');
        });
    });
});

describe('Comprobando dependencias', function() {
    describe('Javascript', function() {
        it('Comprobando jquery', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<script src="js/jquery.min.js"></script>');
            });
        });
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<script src="js/bootstrap.min.js"></script>');
            });
        });
        it('Comprobando popper', function() {
            request('http://localhost:3000' , function(error, response, body) {
                expect(body).contain('<script src="js/umd/popper.min.js"></script>');
            });
        });
    })
    describe('CSS', function() {
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/bootstrap.min.css">');
            });
        });
    })
});