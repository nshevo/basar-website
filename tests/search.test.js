var request = require('supertest');
var chai = require('chai');
var app = require('../app');
var searchController = require('../controllers/searchController');

describe("search", function(){
    it("searches for items and renders the result", function(done) {
        request(app).get("/search?item=iphone")
        .expect(200)
        .expect(/Next/)
        .expect(/Previous/)
        .expect(/iPhone 6/, done);
    });
});

describe("search", function(){
    it("founds no result because the item doesnt exist", function(done) {
        request(app).get("/search?item='samsung'")
        .expect(200)
        .expect(/Sorry... No products were found./, done);
    });
});

describe("search header", function(){
    it("tests the existense of header", function(done) {
        request(app).get("/search?item='samsung'")
        .expect(200)
        .expect(/<nav class="navbar navbar-dark text-white bg-dark basar-header">/, done);
    });
});

describe("search footer", function(){
    it("tests the existense of footer", function(done) {
        request(app).get("/search?item='samsung'")
        .expect(200)
        .expect(/<footer class="page-footer font-small black fixed-bottom basar-footer">/, done);
    });
});

describe("search sidebar menu", function(){
    it("tests the existense of sidebar menu", function(done) {
        request(app).get("/search?item='samsung'")
        .expect(200)
        .expect(/<div class="col-3 col-md-2 w-100 px-0 bg-light position-sticky max-vh-100 basar-categories" id="sticky-sidebar">/, done);
    });
});


