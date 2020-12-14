var express = require('express');
var router = express.Router();
var aboutController = require('../controllers/aboutController');

/* GET about page */
router.get('/', aboutController.about_get);

module.exports = router;
