var request = require('supertest');

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./app');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /varaukset', function testSlash(done) {
  request(server)
    .get('/varaukset')
    .expect(200, done);
  });

  it('404 sivulle jota ei ole', function testPath(done) {
    request(server)
      .get('/eiloydy')
      .expect(404, done);
  });
});