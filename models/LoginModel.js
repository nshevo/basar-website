/**
 * @author Nikita Shevchenko
 * @description Model for creating user schema with mongoose for mongo db
 */
const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
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
        required: true
    },
    city: {
        type: String,
        required: true
    },
    streetHouseNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// export model user with LoginSchema
module.exports = mongoose.model('Logindata', LoginSchema);
