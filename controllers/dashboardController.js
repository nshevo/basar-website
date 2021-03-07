/**
 * @author Nikita Shevchenko
 * @description Controller for the Dashboard Page
 */

const passport = require("passport");

//Profile/Dashabord Page - verify login
exports.isNotLoggedIn = (req, res) => {
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
