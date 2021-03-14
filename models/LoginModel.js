/**
 * @author Nikita Shevchenko
 * @description Model for creating user schema with mongoose for mongo db
 */
const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
        //unique: false
    },
    password: {
        type: String,
        required: function() { return this.facebookID  === null && this.googleID === null; },
        min: 6
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    streetHouseNumber: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    googleID: {
        type: String
    },
    facebookID: {
        type: String
    }
});

// export model user with LoginSchema
module.exports = mongoose.model('Logindata', LoginSchema);
