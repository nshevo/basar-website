/**
 * @author Nikita Shevchenko
 * @description Testing the Login Page
 */

const { expect } = require("chai");
var request = require("supertest");
var app = require("../app");

//Credentials for testing the dashboard
const userCredentials = {
    email: "root@gmail.com", 
    password: "123123"
}

const invalidUserCredentials = {
    email: "root@gmail.comm", 
    password: "123123"
}

//Store jwt cookie for further testing of dashboard
var jwtCookies;

//Receive the jwt cookie
before(function(done){
    request(app)
        .post("/user/login")
        .send(userCredentials)
        .end(function(err, response){
            expect(response.statusCode).to.equal(302);
            expect("Location", "/user/dashboard");
            jwtCookies = response.headers["set-cookie"].pop().split(";")[0];
            done();
        });
});

describe("POST /user/login", function(done){
    it("should return 302 response and redirect to /user/dashboard", function(done){
        request(app)
            .post("/user/login")
            .send(userCredentials)
            .expect(302)
            .expect("Location", "/user/dashboard", done);
    });

    //sending invalid user data to login
    it("should return 422 response", function(done){
        request(app)
            .post("/user/login")
            .send(invalidUserCredentials)
            .expect(422, done);
    });

});
