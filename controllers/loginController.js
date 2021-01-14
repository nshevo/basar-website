/**
 * @author Nikita Shevchenko
 * @description Controller for Login Page
 */

var jwt = require("jsonwebtoken");
var argon2 = require("argon2");
const passport = require("passport");
const User = require("../models/LoginModel");

exports.signIn = async (req, res) => {
    let {email, password} = req.body;
  
    await User.findOne({
        email
    })
    .then(async user => {
        if (!user) {
            req.flash("error", "Email is incorrect");
            return res.status(422).render('user/login', { messages: {error: req.flash('error'), success: req.flash('success')} });
        }
    
        var passwordIsValid = await argon2.verify(user.password, password); 
    
        if (!passwordIsValid) {
            req.flash("error", "Password is incorrect");
            return res.status(422).render('user/login', { messages: {error: req.flash('error'), success: req.flash('success')} });
        }
    
        //JWT token content
        const payload = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            expires: Date.now() + parseInt(process.env.JWT_TOKEN_EXPIRATION_MS),
        };
    
        // assign payload to req.user
        req.login(payload, {session: false}, (error) => {
    
            if (error) {
                res.status(400).send({ error });
            }
    
            // generate a signed json web token and return in response
            const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET_STRING);
    
            // save jwt token in the cookie
            res.cookie('jwt', token, { httpOnly: true, secure: true, maxAge: process.env.JWT_TOKEN_EXPIRATION_MS });
    
            res.status(200).redirect("/user/dashboard");
        });
    });
}

//Login Page - verify login 
exports.isLoggedIn = (req, res) => {
    passport.authenticate('jwt', { session: false, failureFlash: false}, 
    (err,user) => {
        if (!user) { 
            res.render('user/login', { messages: {error: req.flash('error'), success: req.flash('success')} }); 
        }
        if(user){
            res.redirect('/user/dashboard');
        } 
    })(req,res)
}

