const assert = require('assert');
const request = require('supertest');
const { expect } = require('chai');

const app = require('../app');

describe('GET /', () => {
    it('should respond with 200 status code', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(200);
                done();
            });
    });

    it('should respond with HTML text', function (done) {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(200);
                expect('Content-Type', /html/);
                done();
            });
    });

    it('rendered view should contain card tags', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).match(/card/);
                done();
            });
    });
});
