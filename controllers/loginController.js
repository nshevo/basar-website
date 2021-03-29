/**
 * @author Nikita Shevchenko
 * @description Controller for Login Page
 */

var jwt = require("jsonwebtoken");
var argon2 = require("argon2");
const passport = require("passport");
const User = require("../models/LoginModel");
const { NotExtended } = require("http-errors");
exports.loggedIn = false;

exports.signIn = async (req, res) => {
    let { email, password } = req.body;

    await User.findOne({
        email: email,
        googleID: { $exists: false }
    }, (err, user) => {
        //debug section
        //console.log(err);console.log('Found user: '+user);
    })
        .then(async user => {
            if (!user) {
                req.flash("error", res.__("login.emailIncorrect"));
                return res.status(422).render('user/login', {
                    title: res.__("login.title"), response: res, messages: {
                        error: req.flash('error'),
                        success: req.flash('success')
                    }
                });
            }

            var passwordIsValid = await argon2.verify(user.password, password);

            if (!passwordIsValid) {
                req.flash("error", res.__("login.passwordIncorrect"));
                return res.status(422).render('user/login', {
                    title: res.__("login.title"), response: res, messages: {
                        error: req.flash('error'),
                        success: req.flash('success')
                    }
                });
            }

            //JWT token content
            const payload = {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                expires: Date.now() + parseInt(process.env.JWT_TOKEN_EXPIRATION_MS),
            };

            // assign payload to req.user
            req.login(payload, { session: false }, (error) => {

                if (error) {
                    res.status(400).send({ error });
                }

                // generate a signed json web token and return in response
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET_STRING);

                // save jwt token in the cookie
                res.cookie('jwt', token, { httpOnly: true, secure: true, maxAge: process.env.JWT_TOKEN_EXPIRATION_MS });
                this.loggedIn = true;
                //console.log(this.loggedIn);
                res.status(200).redirect("/user/dashboard");
            });
        });
}

//Login Page - verify login
exports.isLoggedIn = (req, res, next) => {
    if(!req.user){
        //user not logged in
        passport.authenticate('jwt', { session: false, failureFlash: false },
            (err, user) => {
                if (!user) {
                    res.render('user/login', { title: res.__("login.title"), response: res, messages: { error: req.flash('error'), success: req.flash('success') } });
                }
                if (user) {
                    res.redirect('/user/dashboard');
                    this.loggedIn = true;
                }
            })(req, res)
    } else {
        //user is logged in
        this.loggedIn = true;
        let user = req.user;
        if ('googleID' in user) {
            res.redirect('/user/dashboard');
        }else if('facebookID' in user){
            res.redirect('/user/dashboard');
        }
    }

}

