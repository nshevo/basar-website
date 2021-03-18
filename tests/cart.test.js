const { expect } = require('chai');
const app = require('../app');
const request = require('supertest');

const testItemId = '5fd112728b3688b678b88f0c';

describe('Shopping Cart and all Products', () => {
    it('It should GET the shopping cart view', (done) => {
        request(app)
            .get('/shoppingCart')
            .end((err, res) => {
                expect(200);
                done();
            });
    });

    it('Respond with 302 and redirect to /allproducts when item is added to cart', (done) => {
        request(app)
            .get(`/shoppingCart/${testItemId}`)
            .end((err, res) => {
                expect(302);
                expect('Location', '/allproducts');
                done();
            });
    });
});
