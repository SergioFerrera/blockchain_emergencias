var expect  = require('chai').expect;
var request = require('request');

describe('Comprobando código de estado HTTP 200', function() {
    request('http://localhost:3000/admin' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

describe('Comprobando código de estado HTTP 404', function() {
    request('http://localhost:3000/admin/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
    });
});

describe('Comprobando titulo de la herramienta', function() {
    it('Comprobando etiqueta title y contenido', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<title>Panel de administración</title>');
        });
    });
});

describe('Comprobando menu', function() {
    it('Comprobando etiqueta nav', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">');
        });
    }); 
    it('Comprobando etiqueta nav-brand y su contenido', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<a class="navbar-brand" href="/">BlockChain Emergencias</a>');
        });
    });
    it('Comprobando boton de menu responsive', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<button class="navbar-toggler"');
        });
    });
    describe('Comprobando botones del menú', function() {
        it('Comprobando botón cierre de sesión', function() {
            request('http://localhost:3000/admin' , function(error, response, body) {
                expect(body).contain('<button class="btn btn-secondary mr-2" type="button">Cerrar sesión</button>');
            });
        });
    });
});

describe('Comprobando titulo (h1) y descripción del proyecto', function() {
    it('Comprobando titulo (h1)', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<h1>Panel de administración</h1>');
        });
    });
    it('Comprobando descripción del proyecto', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<p class="lead">Panel que muestra todas las emergencias recibidas en el centro de emergencias</p>');
        });
    });
});

describe('Comprobando filtro de visualización de emergencias', function() {
    it('Comprobando que el filtro ocupa 12 columnas dentro del sistema grid y tiene un margen inferior de 2', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<div class="col-12 mb-2">');
        });
    });
    it('Comprobando que el filtro se visualiza en el centro', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<div class="d-flex justify-content-center">');
        });
    });
    it('Comprobando que el filtro existe', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<select class="form-control" id="emergency_state" onclick="show()" name="emergency_state" autocomplete="off">');
        });
    });
    it('Comprobando opciones del filtro', function() {
        request('http://localhost:3000/admin' , function(error, response, body) {
            expect(body).contain('<option selected>Todos</option>');
            expect(body).contain('<option>Pendientes</option>');
            expect(body).contain('<option>Finalizados</option>');
        });
    });
});

describe('Comprobando dependencias', function() {
    describe('Javascript', function() {
        it('Comprobando jquery', function() {
            request('http://localhost:3000/admin' , function(error, response, body) {
                expect(body).contain('<script src="js/jquery.min.js"></script>');
            });
        });
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000/admin' , function(error, response, body) {
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
            request('http://localhost:3000/admin' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/bootstrap.min.css">');
            });
        });
    })
});