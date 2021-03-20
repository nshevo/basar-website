const testRoomName = 'testroom1';

const app = require('../app');
const request = require('supertest');
const { expect } = require('chai');

describe('GET /chatrooms', (done) => {
    it('should return 200 response', (done) => {
        request(app)
            .get('/chatrooms')
            .end((err, res) => {
                expect(200);
                done();
            });
    });

    it('should create room', (done) => {
        request(app)
            .get(`/chatrooms/${testRoomName}`)
            .end((err, res) => {
                expect(200);
                done();
            });
    });
});
