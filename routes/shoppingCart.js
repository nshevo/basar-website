var express = require('express');
var router = express.Router();
var cartViewController = require('../controllers/cartViewController');

/* GET about page */
router.get('/', cartViewController.index);

module.exports = router;
