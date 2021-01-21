var request = require('supertest');
var chai = require('chai');
var app = require('../app');
var searchController = require('../controllers/searchController');


describe("homepage", function(){
    it("welcomes the user", function(done) {
        request(app).get("/")
        .expect(200)
        .expect(/Welcome to Basar!/, done);
    });
});

describe("about page", function(){
    it("shows the about information", function(done) {
        request(app).get("/about")
        .expect(200)
        .expect(/About us:/)
        .expect(/This E-commerce platform was created by 3 students only for educational purpose./, done);
    });
});

describe("404 page", function(){
    it("indicates the 404(Page not found) error", function(done) {
        request(app).get("/books")
        .expect(404)
        .expect(/Ooops... 404 Error!/)
        .expect(/Page was not found/, done);
    });
});

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


