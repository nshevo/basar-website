var request = require('supertest');
var chai = require('chai');
var app = require('../app');
var searchController = require('../controllers/searchController');

describe("homepage header", function () {
    it("tests the existense of header", function (done) {
        request(app).get("/")
            .expect(200)
            .expect(/<nav class="navbar navbar-dark text-white bg-dark basar-header">/, done);
    });
});

describe("homepage footer", function () {
    it("tests the existense of footer", function (done) {
        request(app).get("/")
            .expect(200)
            .expect(/<footer class="page-footer font-small black fixed-bottom basar-footer">/, done);
    });
});

describe("homepage sidebar menu", function () {
    it("tests the existense of sidebar menu", function (done) {
        request(app).get("/")
            .expect(200)
            .expect(/<div class="col-3 col-md-2 w-100 px-0 bg-light position-sticky max-vh-100 basar-categories" id="sticky-sidebar">/, done);
    });
});

describe("about page", function () {
    it("shows the about information", function (done) {
        request(app).get("/about")
            .expect(200)
            .expect(/About us:/)
            .expect(/This E-commerce platform was created by 3 students only for educational purpose./, done);
    });
});

describe("404 page", function () {
    it("indicates the 404(Page not found) error", function (done) {
        request(app).get("/books")
            .expect(404)
            .expect(/Ooops... 404 Error!/)
            .expect(/Page was not found/, done);
    });
});
