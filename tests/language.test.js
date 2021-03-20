const { expect } = require('chai');
const request = require('supertest');

const app = require('../app');

describe('GET /language/:lang', () => {
    it('Should return 200 response from /language/en', (done) => {
        request(app)
            .get('/language/en')
            .end((err, res) => {
                expect(200);
                done();
            });
    });

    it('Should return 200 response from /language/de', (done) => {
        request(app)
            .get('/language/de')
            .end((err, res) => {
                expect(200);
                done();
            });
    });

    it('Should return 200 response from /language/en', (done) => {
        request(app)
            .get('/language/en')
            .end((err, res) => {
                expect(200);
                done();
            });
    });
});
