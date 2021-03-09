require('../passport-setup');
var passport = require('passport');

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
const googleAuth = (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req,res,next);
}

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
const googleCallback = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/user/login' }),
    function(req, res) {
        res.redirect('/good');
    } (req, res, next)
}

// app.get('/user/dashboard', 
//   passport.authenticate('google', { failureRedirect: '/user/login' }),
//   function(req, res) {
//     res.redirect('/good');
//   });

  module.exports = {
    googleAuth,
    googleCallback
}