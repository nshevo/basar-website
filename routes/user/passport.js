/**
 * @author Nikita Shevchenko
 * @description JWT Passport Logic for verifying the JWT Token with help of cookie
 */
const passport = require("passport");
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;

module.exports = passport;