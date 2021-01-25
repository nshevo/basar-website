var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shopController');


router.get('/', shopController.show);
module.exports = router;
