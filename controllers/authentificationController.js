require('../config/passport-setup-google');
require('../config/passport-setup-facebook');
var passport = require('passport');

const googleAuth = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
}

const googleCallback = (req, res, next) => {
    passport.authenticate('google', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

const facebookAuth = (req, res, next) => {
    passport.authenticate('facebook')(req, res, next);
}

const facebookCallback = (req, res, next) => {
    passport.authenticate('facebook', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

module.exports = {
    googleAuth,
    facebookAuth,
    googleCallback,
    facebookCallback
}