var express = require('express');
const { NotExtended } = require('http-errors');
var router = express.Router();
const passport = require('passport');
require('../passport-setup');
var authentificationController = require('../controllers/authentificationController');

router.get('/google', authentificationController.googleAuth);
//router.get('/google/callback', authentificationController.googleCallback);

router.get('/google/callback', 
  passport.authenticate('google'),
  (req, res, next) => {
    res.redirect('/login');
});

module.exports = router;