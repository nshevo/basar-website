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
var bodyParser = require("body-parser");
var passport = require("./routes/user/passport");

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var addRouter = require('./routes/add');

var registrationRouter = require("./routes/user/registration");
var loginRouter = require("./routes/user/login");
var logoutRouter = require("./routes/user/logout");
var dashboardRouter = require("./routes/user/dashboard");

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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session for flash
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET_STRING));
app.use(session({ secret: process.env.SESSION_SECRET_STRING, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(flash());

app.use(passport.initialize());

// use bootstrap assets
app.use('/assets/vendor/bootstrap/js', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/assets/vendor/bootstrap/css', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/assets/vendor/bootstrap/icons', express.static(
  path.join(__dirname, 'node_modules', 'bootstrap-icons', 'icons')));
app.use('/assets/vendor/popper.js', express.static(
  path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')));

//mongoose and mongo sandbox routes
// app.get('/all-products', (req, res) => {
//   console.log('here');
//   Product.find()
//     .then((result) => {
//       console.log('result'+result);
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/add', addRouter);

app.use("/user/registration", registrationRouter);
app.use('/user/login', loginRouter);
app.use("/user/logout", logoutRouter);
app.use("/user/dashboard", dashboardRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404);
  res.render('404', { title: 'Page Not Found' });
});

// error handler
app.use(function (err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Server error' });
});

module.exports = app;
