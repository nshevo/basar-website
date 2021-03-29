var express = require('express');
var router = express.Router();
var addController = require('../controllers/addController');

// GET-Method handler
router.get('/product', addController.addProduct);

module.exports = router;
