const chai = require("chai");
var request = require("supertest");
var app = require("../app");

var authentificationController = require("../controllers/authentificationController");

describe("Google Login", function () {
    it("redirects to the dashboard after google login", function (done) {
        request(app).get("/user/login")
            .set('Cookie', 'connect.sid=s%3AueU8IQ774ndrH0LUnLbcFN6jmeTwmMKr.AtB9GYMWYvsQq2cQGEFhjFS5RGcYaCTh6Po66vYUjn4')
            .expect(302)
            .expect("Location", "/user/dashboard", done);
    });
})

describe("Facebook Login", function () {
    it("redirects to the dashboard after facebook login", function (done) {
        request(app).get("/user/login")
            .set('Cookie', 'connect.sid=s%3AueU8IQ774ndrH0LUnLbcFN6jmeTwmMKr.AtB9GYMWYvsQq2cQGEFhjFS5RGcYaCTh6Po66vYUjn4')
            .expect(302)
            .expect("Location", "/user/dashboard", done);
    });
})