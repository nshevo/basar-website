/**
 * @author Nikita Shevchenko
 * @description Testing the Feature Profile/Dashboard for Bazar
 */
const { expect } = require("chai");
var request = require("supertest");
var app = require("../app");

//Credentials for testing the dashboard
const userCredentials = {
    email: "root@gmail.com",
    password: "123123"
}

const userCredentialsInvalid = {
    email: "root@gmail.comm",
    password: "123123"
}

//Store jwt cookie for further testing of dashboard
var jwtCookies;

//Receive the jwt cookie
before(function (done) {
    request(app)
        .post("/user/login")
        .send(userCredentials)
        .end(function (err, response) {
            expect(response.statusCode).to.equal(302);
            expect("Location", "/user/dashboard");
            jwtCookies = response.headers["set-cookie"].pop().split(";")[0];
            done();
        });
});

describe("GET /user/dashboard", function (done) {
    //Fill cookies with jwt token from before()
    it("should return 200 response if the user is logged in", function (done) {
        var req = request(app).get("/user/dashboard");
        req.cookies = jwtCookies;
        req.expect(200, done);
    });

    it("should return 302 response and redirect to /user/login", function (done) {
        request(app)
            .get("/user/dashboard")
            .expect(302)
            .expect("Location", "/user/login", done);
    });
});
