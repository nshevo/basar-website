/**
 * @author Nikita Shevchenko
 * @description Testing the Registration for Basar
 */

const { expect } = require("chai");
var request = require("supertest");
var app = require("../app");

describe("GET /user/registration", function(done){
    it("should return 200 response", function(done){
        request(app)
            .get("/user/registration")
            .expect(200, done);
    });  
    
});