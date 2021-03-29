/**
 * @author Nikita Shevchenko
 * @description Controller for the Registration Page
 */

var argon2 = require("argon2");
const passport = require("passport");
const User = require("../models/LoginModel");

exports.signUp = async (req, res) => {
    let { email, firstName, lastName, country, city, streetHouseNumber, password, password2 } = req.body;

    let errors = [];

    let isAnyFieldEmpty = !email || !password || !password2 || !firstName || !lastName || !country || !city || !streetHouseNumber;

    if (isAnyFieldEmpty) {
        errors.push({ message: res.__("registration.pleaseEnterAllFields") });
        return res.status(422).render('user/registration', { title: res.__("registration.title"), response: res, errors });
    }

    //Validate user input: firstName, lastName, country, city with validation pattern
    var validationPattern = /^[A-Za-z\s]+$/;

    let validateNameInput = !validationPattern.test(firstName) || !validationPattern.test(lastName)
    if (validateNameInput) {
        errors.push({ message: res.__("registration.firstOrLastNameInvalid") });
    }

    let validateAdressInput = !validationPattern.test(country) || !validationPattern.test(city);
    if (validateAdressInput) {
        errors.push({ message: res.__("registration.adressInvalid") });
    }

    try {
        let user = await User.findOne({
            email
        });

        if (user) {
            errors.push({ message: res.__("registration.emailUsed") });
        }

        if (password.length < 6) {
            errors.push({ message: res.__("registration.passwordAtLeastSixLength") });
        }

        if (password != password2) {
            errors.push({ message: res.__("registration.passwordsDontMatch") });
        }

        if (errors.length > 0) {
            return res.status(422).render('user/registration', { title: res.__("registration.title"), response: res, errors });
        }

        //Create new User with all the input information
        //hash the password with argon2
        //save the user

        user = new User({
            firstName,
            lastName,
            country,
            city,
            streetHouseNumber,
            email,
            password
        });

        user.password = await argon2.hash(password);

        await user.save();

        req.flash('success', res.__("registration.registredPleaseLogIn"));
        res.redirect("/user/login");
    } catch (err) {
        res.status(500).send(res.__("registration.errorOnRegistration"));
    }
}

//Registration page - verify login
exports.isRegistred = (req, res) => {
    
    if(!req.user){
        passport.authenticate('jwt', { session: false },
        function (err, user, info) {
            if (!user) {
                res.render('user/registration', { title: res.__("registration.title"), response: res });
            }
            if (user) {
                res.redirect('/user/dashboard');
            }
        })(req, res)
    }else{
        if(req.isAuthenticated()){
            //req.isAuthenticated() will return true if user is logged in
            res.redirect('/user/dashboard');
        } else{
            res.render('user/registration', { title: res.__("registration.title"),response: res });
        }
    }
    
}
