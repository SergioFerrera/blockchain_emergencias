var expect  = require('chai').expect;
var request = require('request');

describe('Comprobando código de estado HTTP 200', function() {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

describe('Comprobando código de estado HTTP 404', function() {
    request('http://localhost:3000/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
    });
});

describe('Comprobando titulo de la herramienta', function() {
    it('Comprobando etiqueta title y contenido', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<title>Pagina de inicio</title>');
        });
    });
});

describe('Comprobando menu', function() {
    it('Comprobando etiqueta nav', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">');
        });
    }); 
    it('Comprobando etiqueta nav-brand y su contenido', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<a class="navbar-brand" href="#">BlockChain Emergencias</a>');
        });
    });
    it('Comprobando boton de menu responsive', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<button class="navbar-toggler"');
        });
    });
    describe('Comprobando campos de inicio de sesión', function() {
        it('Comprobando campo email', function() {
            request('http://localhost:3000' , function(error, response, body) {
                expect(body).contain('<input class="form-control form-control-sm" id="emailInput"');
            });
        });
        it('Comprobando campo contraseña', function() {
            request('http://localhost:3000' , function(error, response, body) {
                expect(body).contain('<input class="form-control form-control-sm" id="passwordInput"');
            });
        });
    });
    it('Comprobando boton inicio de sesión', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-primary mr-2" type="submit">Login</button>');
        });
    });
    it('Comprobando boton registro', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-secondary mr-sm-2" type="button">Registrarse</button>');
        });
    });
});

describe('Comprobando titulo (h1) y descripción del proyecto', function() {
    it('Comprobando titulo (h1)', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<h1>Blockchain Emergencias</h1>');
        });
    });
    it('Comprobando descripción del proyecto', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<p class="lead">Aplicación de Blockchain a situaciones de emergencias </p>');
        });
    });
});

describe('Comprobando descripción de aplicativo', function() {
    it('Comprobando parrafos', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<p>El objetivo principal del TFG es el desarrollo de una aplicación capaz de poder decidir en tiempo real qué organizaciones pueden aportar qué recursos en una situación de emergencia, teniendo en cuenta aspectos como la distancia de estas con respecto a la emergencia ocurrida y si son capaces de aportar los recursos necesarios o si por el contrario solo son capaces de ofrecer parte de los solicitados o ninguno.</p>');
            expect(body).contain('<p>En el caso del abastecimiento de recursos de forma parcial, el aplicativo seria capaz de solicitarlos a la organización más cercana y el resto a la siguiente que se encuentre más cerca de la emergencia, obteniendo así una respuesta más veloz ante la situación de emergencia.</p>');
            expect(body).contain('<p>Además, la aplicación, facilitaría las comunicaciones entre el servicio de emergencias con las organizaciones que aportan los recursos, ya que todos los participes harían uso de la misma plataforma.</p>');
        });
    });
    it('Comprobando imagen del logo de la ULL', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<img class="img-fluid img-thumbnail" src="/img/Logo_ULL_2018.jpg" alt="ULL logo">');
        });
    });
});

describe('Comprobando dependencias', function() {
    describe('Javascript', function() {
        it('Comprobando jquery', function() {
            request('http://localhost:3000' , function(error, response, body) {
                expect(body).contain('<script src="js/jquery.min.js"></script>');
            });
        });
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000' , function(error, response, body) {
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
            request('http://localhost:3000' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/bootstrap.min.css">');
            });
        });
    })
});