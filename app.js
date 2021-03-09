require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
//var bootstrap = require('bootstrap');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');
var MongoStore = require('connect-mongo') (session);
var bodyParser = require("body-parser");
var passport = require("./controllers/userPassport");
//require('./passport-setup');
var fs = require('fs');
var http = require('http');
var url = require('url');
var glob = require( 'glob' );
var language_dict = {};
var indexRouter = require('./routes/index');
var shopRouter = require('./routes/allProducts'); 
var aboutRouter = require('./routes/about');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var addRouter = require('./routes/add');
var cartRouter = require('./routes/addToCart');
var cartViewRouter = require('./routes/shoppingCart');
var authentificationRouter = require('./routes/authentification');
const language = require('./routes/language');
const i18n = require('./i18n.config');
//var expressLayouts = require('express-ejs-layouts');

var registrationRouter = require("./routes/user/registration");
var loginRouter = require("./routes/user/login");
var logoutRouter = require("./routes/user/logout");
var dashboardRouter = require("./routes/user/dashboard");
var reportProblemRouter = require("./routes/reportProblem");




var app = express();

// connection to mongodb
const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_HOST = 'cluster.qgkxc.mongodb.net/BasarDB?retryWrites=true&w=majority';
var mongoURI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}`;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => console.log('Successfully connected to the Database'))
  .catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session for flash and creating MongoStore for cart
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET_STRING));
app.use(session({ secret: process.env.SESSION_SECRET_STRING, cookie: { maxAge: 60000 }, 
  resave: false, 
  saveUninitialized: false, 
  store: new MongoStore({ mongooseConnection: mongoose.connection }), 
  cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(flash());

//setting up session to be accessed from all views
app.use(function(req, res, next) {

  res.locals.login = req.isAuthenticated(); 
  res.locals.session = req.session; 
  next(); 

})

app.use(passport.initialize());
app.use(passport.session());
app.use(i18n.init);

// use bootstrap assets
app.use('/assets/vendor/bootstrap/js', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/assets/vendor/bootstrap/css', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/assets/vendor/bootstrap/icons', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap-icons', 'icons')));
app.use('/assets/vendor/popper.js', express.static(
  path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')));


//setting locale for selected language from cookie
app.use((req,res,next)=>{
  var cookie=req.cookies.language;
  if(typeof cookie!== 'undefined'){
    res.setLocale(cookie)
  }
  next();
})

app.use('/', indexRouter);
app.use('/allProducts', shopRouter);
app.use('/add-to-cart', cartRouter); 
app.use('/shoppingCart', cartViewRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/add', addRouter);
app.use('/auth', authentificationRouter);

app.use("/user/registration", registrationRouter);
app.use('/user/login', loginRouter);
app.use("/user/logout", logoutRouter);
app.use("/user/dashboard", dashboardRouter);
app.use("/reportProblem", reportProblemRouter);
app.use("/language", language)

app.get('/logout', (req, res) => {
  //req.session = null;
  req.session.destroy((err) => {
    if(err) {
        return console.log(err);
    }
    res.redirect('/');
});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.render('404', { title: res.__("404.title"),response:res });
});

// error handler
app.use(function (err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: res.__("error.title"),response:res });
});

module.exports = app;
