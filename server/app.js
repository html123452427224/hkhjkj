var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carRouter = require("./routes/car")
const historickaudalostRouter = require("./routes/historickaudalost")
const sportovecRouter = require("./routes/sportovec")
const zivotniProstredi = require("./routes/zivotniprostredi")
const monkeys = require("./routes/monkeys")
const f1drivers = require("./routes/f1drivers")

const cors = require("cors")

var app = express();

app.use(cors());

const mongoose = require('mongoose');
mongoose
.connect("mongodb+srv://admin:adminadmin@cluster0.nexxd.mongodb.net/help?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("database connected"))
.catch((err) => console.log(err));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/car", carRouter);
app.use("/athlete", sportovecRouter)
app.use("/historical-event", historickaudalostRouter)
app.use("/environment", zivotniProstredi)
app.use("/monkeys", monkeys)
app.use("/f1drivers", f1drivers)

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
