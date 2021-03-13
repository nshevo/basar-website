/**
 * @author Nikita Shevchenko
 * @description Controller for the Logging out the user
 */

const passport = require("passport");

exports.logOut = (req, res) => {
  if(!req.user){
    passport.authenticate('jwt', { session: false, failureFlash: false },
    (err, user) => {
      if (!user) {
        res.redirect('/user/login');
      }

      if (user) {
        var token = null;
        if (req && req.cookies && req.cookies['jwt']) {
          token = req.cookies['jwt'];
          res.cookie('jwt', token, { httpOnly: true, maxAge: '0' }); // secure: true deleted
          req.session = null;
          req.logout();
          req.flash('success', "You have logged out");
          res.redirect('/user/login');
        }
      }
    })(req, res)
  }else{
    console.log('logging out');
    // cookies.set('connect.sid', {maxAge: 0});
    // req.session = null;
    req.logout();
    res.redirect('/user/login');
  }
}
