var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController');

router.get('/:id', cartController.addItem); 
module.exports = router;