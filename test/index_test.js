var expect  = require('chai').expect;
var request = require('request');

it('Index Testing', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});