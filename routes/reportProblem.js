/**
 * @author Nikita Shevchenko
 * @description Route for report problem page of a user
 */
var express = require('express');
var router = express.Router();
const controller = require("../controllers/reportProblemController");

router.get('/', controller.isUserLoggedIn);
router.post('/', controller.reportProblem);

module.exports = router;
