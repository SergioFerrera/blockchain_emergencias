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
            expect(body).contain('<title>BlockChain Emergencias</title>');
        });
    });
});

describe('Comprobando menu', function() {
    it('Comprobando etiqueta nav', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">');
        });
    }); 
    it('Comprobando etiqueta nav-brand y su contenido', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<a class="navbar-brand" href="#">BlockChain Emergencias</a>');
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

describe('Comprobando formulario', function() {
    it('Comprobando campo tipo de emergencia y sus opciones a escoger', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<div class="form-group"><label for="tipo"><strong>Tipo de Emergencia</strong></label>');
            expect(body).contain('<option>Accidente de Trafico</option>');
            expect(body).contain('<option>Incendio</option>');
            expect(body).contain('<option>Homicidio</option>');
            expect(body).contain('<option>Desaparición</option>');
            expect(body).contain('<option>Robo</option>');
            expect(body).contain('<option>Otro</option>');
        });
    });
    it('Comprobando campo especificar tipo', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="tipo"><strong>Especificar tipo de emergencia</strong></label>');
        });
    });
    it('Comprobando campo Latitud', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="latitud"><strong>Latitud</strong></label>');
        });
    });
    it('Comprobando campo Longitud', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="longitud"><strong>longitud</strong></label>');
        });
    });
    it('Comprobando campo Número de ambulancias', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="ambulancias"><strong>Número de ambulancias</strong></label>');
        });
    });
    it('Comprobando campo Número de camiones de bomberos', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="bomberos"><strong>Número de camiones de bomberos</strong></label>');
        });
    });
    it('Comprobando campo Número de policias', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="policias"><strong>Número de policias</strong></label>');
        });
    });
    it('Comprobando campo Notas', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<label for="notas"><strong>Notas</strong></label>');
        });
    });
});

describe('Comprobando javascript', function() {
    it('Comprobando función para mostrar campo de especificar tipo', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('function mostrar_otro()');
        });
    });
});

describe('Comprobando dependencias', function() {
    it('Comprobando jquery', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<link rel="stylesheet" href="js/jquery.min.js">');
        });
    });
    it('Comprobando popper', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<link rel="stylesheet" href="js/popper.js">');
        });
    });
    it('Comprobando bootstrap', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<link rel="stylesheet" href="js/bootstrap.min.js">');
        });
    });
});