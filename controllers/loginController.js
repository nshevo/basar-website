/**
 * @author Nikita Shevchenko
 * @description Controller for Login Page
 */

var jwt = require("jsonwebtoken");
var argon2 = require("argon2");
const passport = require("passport");
const User = require("../models/LoginModel");

