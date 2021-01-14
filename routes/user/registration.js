/**
 * @author Nikita Shevchenko
 * @description Route for user registration page
 */
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/registrationController");

router.get('/user/registration', controller.isRegistred);
router.post("/user/registration", controller.signUp);

module.exports = router;