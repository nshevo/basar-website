/**
 * @author Nikita Shevchenko
 * @description JWT Passport Logic for verifying the JWT Token with help of cookie
 */
const passport = require("passport");
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;

var cookieExtractor = function (req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

//JWT Strategy
passport.use(
    new JWTStrategy({
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET_STRING,
    },
        (jwtPayload, done) => {
            if (Date.now() > jwtPayload.expires) {
                return done(null, false, { message: "Please Log-In" });
            }
            return done(null, jwtPayload);
        }
    )
);

module.exports = passport;
