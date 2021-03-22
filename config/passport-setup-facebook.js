var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/LoginModel');

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((id, done) => {
    User.findOne({facebookID: id}, function(err, user) {
      done(null, user);
    });
  });

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // callbackURL: "http://localhost:3000/auth/facebook/callback",
    callbackURL: "https://basar-website.herokuapp.com/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email', 'name']
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("Facebook - callback function");
      // check if the user exists in the db
      User.findOne({facebookID: profile._json.id}).then((currentUser) => {
        if (currentUser){
          //if the user exists
          console.log('User is '+currentUser);
          done(null, currentUser);
        }else{
          //if the user doesnt exist, create a new one
          console.log('going to create a user');
          new User({
            facebookID: profile._json.id,
            email: profile._json.email,
            firstName: profile._json.first_name,
            lastName: profile._json.last_name
          }).save().then((newUser) => {
            console.log('New User created: '+newUser);
            done(null, newUser);
          });
        }
    });
    }
  ));
  