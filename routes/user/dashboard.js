/**
 * @author Nikita Shevchenko
 * @description Route for dashboard/profile page of a user
 */
var express = require('express');
var router = express.Router();
const controller = require("../../controllers/dashboardController");

router.get('/', controller.isNotLoggedIn);

module.exports = router;
