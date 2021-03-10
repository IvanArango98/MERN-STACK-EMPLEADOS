var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./Config/database');
var auth = require("./auth/main_auth")

var EmpleadosRouter = require('./routes/empleados.router');
var UsuariosRouter = require("./routes/usuario.router");

var app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//conectar a base de datos mongo
database.mongoConnect();

app.use('/usuarios', UsuariosRouter);

app.use(auth)

//Rutas 
app.use('/empleados', EmpleadosRouter);


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
  //res.render('error');
  res.send('error');
  //res.json(err);
});

module.exports = app;
