var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();
const passport = require('passport');
require('../passport-setup');
require('../passport-setup-facebook');
var authentificationController = require('../controllers/authentificationController');

router.get('/google', authentificationController.googleAuth);
//router.get('/google/callback', authentificationController.googleCallback);

router.get('/google/callback', 
  passport.authenticate('google'),
  (req, res, next) => {
    res.redirect('/user/login');
});

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', 
passport.authenticate('facebook'),
  (req, res, next) => {
    res.redirect('/user/login');
});

module.exports = router;