var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const workoutsRouter = require('./routes/workouts');
const exercisesRouter = require('./routes/exercises');
const musclesRouter = require('./routes/muscles')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//mounting middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//method override for DELETE REQUEST
app.use(methodOverride('_method'));

//sets up express sessions to track info
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//sets up passport to add to req.user to each incoming request
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

//mounting routes
app.use('/', indexRouter);
app.use('/workouts', workoutsRouter);
app.use('/', exercisesRouter);
app.use('/', musclesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
