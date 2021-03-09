/**
 * @author Nikita Shevchenko
 * @description Controller for the Dashboard Page
 */

const passport = require("passport");

//Profile/Dashabord Page - verify login
exports.isNotLoggedIn = (req, res) => {
    //res.render('user/dashboard.ejs', { title: "Dashboard", response: res, userFirstName: "Trol", userLastName: "Trolovich" });
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
    passport.authenticate('jwt', { session: false, failureFlash: false },
        (err, user) => {
            if (!user) {
                res.redirect("/user/login");
            }
            if (user) {
                res.render('user/dashboard', { title: "Dashboard", response: res, userFirstName: user.firstName, userLastName: user.lastName });
            }
        })(req, res)
}
