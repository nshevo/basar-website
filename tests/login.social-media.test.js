const chai = require("chai");
var request = require("supertest");
var app = require("../app");
var session = require('express-session');

var authentificationController = require("../controllers/authentificationController");
const { Session, Store } = require("express-session");

describe("Google Login", function () {
    it("redirects to the dashboard after google login", function (done) {
        request(app).get("/user/login")
        .set('Cookie', 'connect.sid=s%3ADJrrKYIjfpcbtJYvRBWHAfHQqJNlEr53.sinMPnylfSd0yEnEaEW4BFvs9ZQDJgYDCZCKMm0WpJg')
        .expect(302)
        .expect("Location", "/user/dashboard", done);
    });
})

describe("Facebook Login", function () {
    it("redirects to the dashboard after facebook login", function (done) {
        request(app).get("/user/login")
        .set('Cookie', 'connect.sid=s%3ADJrrKYIjfpcbtJYvRBWHAfHQqJNlEr53.sinMPnylfSd0yEnEaEW4BFvs9ZQDJgYDCZCKMm0WpJg')
        .expect(302)
        .expect("Location", "/user/dashboard", done);
    });
})
