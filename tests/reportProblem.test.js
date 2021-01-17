/**
 * @author Nikita Shevchenko
 * @description Testing the Registration for Basar
 */

const { expect } = require("chai");
var request = require("supertest");
var app = require("../app");

//Credentials for testing the dashboard
const userCredentials = {
    email: "root@gmail.com",
    password: "123123",
}

const filledInputFields = {
    email: userCredentials.email,
    subject: "Testing Report Problem",
    description: "This is a POST test",
}

const invalidInputFields = {
    email: userCredentials.email,
    subject: "short",
    description: "This is a POST test",
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

describe("GET reportProblem", function (done) {
    it("should return 200 response", function (done) {
        request(app)
            .get("/reportProblem")
            .expect(200, done);
    });

    //Fill cookies and request the /reportProblem page must fill input with email of user from jwt cookie
    it("should return 200 response, with filled email input field", function (done) {
        var req = request(app).get("/reportProblem");
        req.cookies = jwtCookies;
        req.expect(200)
            .expect(/root@gmail.com/, done);
    });
});

describe("POST reportProblem", function (done) {
    it("should return 200 reporting with all inputs", function (done) {
        request(app)
            .post("/reportProblem")
            .send(filledInputFields)
            .expect(200)
            .expect(/Thank you for reporting a problem/, done);
    });

    it("should return 422 error by reporting with invalid inputs", function (done) {
        request(app)
            .post("/reportProblem")
            .send(invalidInputFields)
            .expect(422)
            .expect(/Please describe more the subject or description/, done);
    });
});
