/**
 * @author Nikita Shevchenko
 * @description Route for user registration page
 */
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/registrationController");

router.get('/', controller.isRegistred);
router.post("/", controller.signUp);

module.exports = router;
