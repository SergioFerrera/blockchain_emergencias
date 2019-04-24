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

describe('Comprobando visualización de emergencias', function() {
    it('Comprobando existencia de etiquetas de visualización correspondientes para emergencia', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<div class="col-lg-4">');
            expect(body).contain('<div class="card mb-4">');
            expect(body).contain('<div class="card-body">');
        });
    });
    it('Comprobando titulo de emergencia', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<h5 class="card-title">Emergencia #');
        });
    });
    it('Comprobando existencia de formulario para satisfacer demanda de ambulancias', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<form class="form-inline" action="/ambulances" method="post" autocomplete="off">');
            expect(body).contain('<p class="mb-1">Sanitario</p>');
            expect(body).contain('<input class="form-control form-control-sm" id="ambulances"');
            expect(body).contain('<button class="btn btn-primary btn-sm" type="submit">Enviar</button>');
        });
    });
    it('Comprobando existencia de formulario para satisfacer demanda de bomberos', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<form class="form-inline" action="/firefighters" method="post" autocomplete="off">');
            expect(body).contain('<p class="mb-1">Bombero</p>');
            expect(body).contain('<input class="form-control form-control-sm" id="firefighters"');
            expect(body).contain('<button class="btn btn-primary btn-sm" type="submit">Enviar</button>');
        });
    });
    it('Comprobando existencia de formulario para satisfacer demanda de ambulancias', function() {
        request('http://localhost:3000/emergencias' , function(error, response, body) {
            expect(body).contain('<form class="form-inline" action="/police" method="post" autocomplete="off">');
            expect(body).contain('<p class="mb-1">Policia</p>');
            expect(body).contain('<input class="form-control form-control-sm" id="police"');
            expect(body).contain('<button class="btn btn-primary btn-sm" type="submit">Enviar</button>');
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
        it('Comprobando Google Maps API', function() {
            request('http://localhost:3000/emergencias' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/map.min.css">');
            });
        });
    })
});