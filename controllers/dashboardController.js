/**
 * @author Nikita Shevchenko
 * @description Controller for the Dashboard Page
 */

const passport = require("passport");
var loginController = require('./loginController');

//Profile/Dashabord Page - verify login
exports.isNotLoggedIn = (req, res) => {
    // if(!req.user){
    //     //user not logged in
    //     res.redirect("/user/login");
    // }else{
    //     //user is logged in
    //     console.log("We are here!");
    //     console.log(req.user.firstName);
    //     console.log(req.user.lastName);
    //     res.render('user/dashboard.ejs', { title: "Dashboard", response: res, userFirstName: req.user.firstName, userLastName: req.user.lastName });
    // }
    // debug section
    //console.log("We are here!"+loginController.loggedIn);
    if(!loginController.loggedIn){
        //user not logged in
        res.redirect("/user/login");
    }else{
        //user is logged in
        if(!req.user){
            passport.authenticate('jwt', { session: false, failureFlash: false },
            (err, user) => {
                if (!user) {
                    res.redirect("/user/login");
                }
                if (user) {
                    res.render('user/dashboard', { title: "Dashboard", response: res, userFirstName: user.firstName, userLastName: user.lastName });
                }
            })(req, res)
        }else{
            res.render('user/dashboard.ejs', { title: "Dashboard", response: res, userFirstName: req.user.firstName, userLastName: req.user.lastName });
        }
    }

    // passport.authenticate('jwt', { session: false, failureFlash: false },
    //     (err, user) => {
    //         if (!user) {
    //             res.redirect("/user/login");
    //         }
    //         if (user) {
    //             res.render('user/dashboard', { title: "Dashboard", response: res, userFirstName: user.firstName, userLastName: user.lastName });
    //         }
    //     })(req, res)
}
