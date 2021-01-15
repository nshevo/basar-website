/**
 * @author Nikita Shevchenko
 * @description Route for a login page
 */
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/loginController");

router.get('/', controller.isLoggedIn);
router.post("/", controller.signIn);

module.exports = router;
