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
    password: "123123"
}

const userCredentialsInvalid = {
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

describe("GET /user/registration", function(done){
    it("should return 200 response", function(done){
        request(app)
            .get("/user/registration")
            .expect(200, done);
    });  

    //Fill cookies and request the /user/registration should redirect to dashboard page
    it("should return 302 response, redirecting to /user/dashboard for logged in users", function(done){
        var req = request(app).get("/user/registration");
        req.cookies = jwtCookies;
        req.expect(302)
            .expect("Location", "/user/dashboard", done);
    });    
    
});