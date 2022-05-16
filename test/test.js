var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with The CICD pipeline for NodeJS application', function(done) {
        request(app).get('/will').expect('{ "response": "The CICD pipeline for NodeJS application" }', done);
    });
});