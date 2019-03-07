var expect  = require('chai').expect;
var request = require('request');

describe('Comprobando código de estado HTTP 200', function() {
    request('http://localhost:3000/registro' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});

describe('Comprobando código de estado HTTP 404', function() {
    request('http://localhost:3000/registro/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
    });
});

describe('Comprobando titulo de la herramienta', function() {
    it('Comprobando etiqueta title y contenido', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<title>Registro</title>');
        });
    });
});

describe('Comprobando menu', function() {
    it('Comprobando etiqueta nav', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">');
        });
    }); 
    it('Comprobando etiqueta nav-brand y su contenido', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<a class="navbar-brand" href="/">BlockChain Emergencias</a>');
        });
    });
    it('Comprobando boton de menu responsive', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<button class="navbar-toggler"');
        });
    });
    describe('Comprobando campos de inicio de sesión', function() {
        it('Comprobando campo email', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<input class="form-control form-control-sm" id="emailInput"');
            });
        });
        it('Comprobando campo contraseña', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<input class="form-control form-control-sm" id="passwordInput"');
            });
        });
    });
    it('Comprobando boton inicio de sesión', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-primary mr-2" type="submit">Login</button>');
        });
    });
    it('Comprobando boton registro', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-secondary mr-sm-2" type="button">Registrarse</button>');
        });
    });
    it('Comprobando link de contraseña olvidada', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<small><a onclick="show_forgotten_password_modal()" href="#">¿contraseña olvidada?</a></small>');
        });
    });
    it('Comprobando función javascript show_forgotten_password_modal', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('function show_forgotten_password_modal()');
        });
    });
    it('Comprobando modal para recuperación de contraseña', function() {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).contain('<div class="modal fade" id="forgotten_password" tabindex="-1" role="dialog" aria-labelledby="forgotten_password_Label" aria-hidden="true">');
        });
    });
});

describe('Comprobando titulo (h1) y descripción del proyecto', function() {
    it('Comprobando titulo (h1)', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<h1>Formulario de Registro</h1>');
        });
    });
    it('Comprobando descripción del proyecto', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<p class="lead">Proceso de registro a la herramienta</p>');
        });
    });
});

describe('Comprobando formulario', function() {
    it('Comprobando campo email', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="email"><strong>Email</strong></label>');
        });
    });
    it('Comprobando campo contraseña', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="password"><strong>Contraseña</strong></label>');
        });
    });
    it('Comprobando campo nombre de la organización', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="organization"><strong>Nombre de la organización</strong></label>');
        });
    });
    it('Comprobando sección de formulario Ubicación', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="location"><strong>Ubicación de la organización</strong></label>');
        });
    });
    it('Comprobando botón Ubicación Actual', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-secondary" type="button" onclick="getLocation()">Ubicación actual</button>');
        });
    });
    it('Comprobando campo en caso de error con la geolocalización', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<p id="error_with_geolocation"></p>');
        });
    });
    it('Comprobando input de Google Maps API', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<input class="form-control form-control-sm" id="pac-input"');
        });
    });
    it('Comprobando campo Latitud', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<input class="form-control form-control-sm" id="latitude"');
        });
    });
    it('Comprobando campo Longitud', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<input class="form-control form-control-sm" id="longitude"');
        });
    });
    it('Comprobando campo Número de ambulancias', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="ambulances"><strong>Número de ambulancias</strong></label>');
        });
    });
    it('Comprobando campo Número de camiones de bomberos', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="firefighters"><strong>Número de camiones de bomberos</strong></label>');
        });
    });
    it('Comprobando campo Número de policias', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<label for="police"><strong>Número de policias</strong></label>');
        });
    });
    it('Comprobando botón enviar', function() {
        request('http://localhost:3000/registro' , function(error, response, body) {
            expect(body).contain('<button class="btn btn-primary" type="submit" name="test_button">Enviar</button>');
        });
    });
});

describe('Comprobando dependencias', function() {
    describe('Javascript', function() {
        it('Comprobando jquery', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<script src="js/jquery.min.js"></script>');
            });
        });
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<script src="js/bootstrap.min.js"></script>');
            });
        });
        it('Comprobando popper', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<script src="js/popper.js"></script>');
            });
        });
        it('Comprobando Google Maps API', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<script src="js/map.min.js"></script>');
                expect(body).contain('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAR51eYlvnZn7xXA-4ZCdQW8CnDXTdy8NY&amp;libraries=places&amp;callback=initAutocomplete" async defer></script>');
            });
        });
    })
    describe('CSS', function() {
        it('Comprobando bootstrap', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/bootstrap.min.css">');
            });
        });
        it('Comprobando Google Maps API', function() {
            request('http://localhost:3000/registro' , function(error, response, body) {
                expect(body).contain('<link rel="stylesheet" href="css/map.min.css">');
            });
        });
    })
});