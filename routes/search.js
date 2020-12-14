var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');

// GET-Method handler
router.get('/', searchController.search_results_get);

module.exports = router;
