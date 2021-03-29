var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/LoginModel');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(null, user);
  });
});

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.HOST + "/auth/google/callback"
},
  function (accessToken, refreshToken, profile, email, done) {
    console.log("callback function");
    // check if the user exists in the db
    User.findOne({ googleID: email._json.sub }).then((currentUser) => {
      if (currentUser) {
        //if the user exists
        console.log('User is ' + currentUser);
        done(null, currentUser);
      } else {
        //if the user doesnt exist, create a new one
        new User({
          email: email._json.email,
          googleID: email._json.sub,
          firstName: email._json.given_name,
          lastName: email._json.family_name
        }).save().then((newUser) => {
          console.log('New User created: ' + newUser);
          done(null, newUser);
        });
      }
    });
  }
));
