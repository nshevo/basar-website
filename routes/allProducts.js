var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shopController');


router.get('/', shopController.shopGet);
module.exports = router;
