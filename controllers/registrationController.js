/**
 * @author Nikita Shevchenko
 * @description Controller for the Registration Page
 */

var argon2 = require("argon2");
const passport = require("passport");
const User = require("../models/LoginModel");

exports.signUp = async (req, res) => {
    let {email, firstName, lastName, country, city, streetHouseNumber, password, password2} = req.body;
    
    let errors = [];
  
    let isAnyFieldEmpty = !email || !password || !password2 || !firstName || !lastName || !country || !city || !streetHouseNumber;
    
    if(isAnyFieldEmpty){
        errors.push({message: "Please enter all fields"});
        return res.status(422).render('user/registration', {errors});
    }
  
    if(password.length < 6){
        errors.push({message: "Password should be at least 6 characters"});
    }
  
    if(password != password2){
        errors.push({message: "Password don't match"});
    }
  
    //Validate user input: firstName, lastName, country, city with validation pattern
    var validationPattern = /^[A-Za-z]+$/;
  
    let validateNameInput = !validationPattern.test(firstName) || !validationPattern.test(lastName)
    if(validateNameInput){
        errors.push({message: "First or last name are invalid"});
    }
  
    let validateAdressInput = !validationPattern.test(country) || !validationPattern.test(city);
    if(validateAdressInput){
        errors.push({message: "Adress is invalid"});
    }
  
    try {
        let user = await User.findOne({
            email
        });
    
        if (user) {
            errors.push({message: "Email already used"});
        }
    
        if(errors.length > 0){
            return res.status(422).render('user/registration', {errors});
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
    
        req.flash('success', "You're now registred. Please log in.");
        res.redirect("/user/login");  
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}