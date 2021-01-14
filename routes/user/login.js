/**
 * @author Nikita Shevchenko
 * @description Route for a login page
 */
const express = require("express");
const router = express.Router();
const controller = require("../../controller/loginController");

router.get('/user/login', controller.isLoggedIn);
router.post("/user/login", controller.signIn);

module.exports = router;