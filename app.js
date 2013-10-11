
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var routescan = require('express-routescan');
var db = require('mongoose');
var settings = require('./settings');
var loadRsesourcesMiddleware = require(settings.middlewaresPath + 'core/load_resources');
//var i18n = require("i18n");

// Initializing Express
var app = express();

// Custom imports
//var urls = require('./urls')(app);

// i18n.configure({
//     locales:['es', 'en'],
//     defaultLocale: 'es',
//     directory: __dirname + '/locales'
// });

// all environments
app.set('port', settings.port || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(loadRsesourcesMiddleware(app, settings.theme));
// app.use(function (req, res, next) {
//     req.prueba = "prueba";
//     next();
// });
//app.use(i18n.init);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

// production only
if ('production' == app.get('pro')) {
  app.use(express.errorHandler());
}

// Custom init
//routescan(app, {directory: ['./routes', './modules']});
routescan(app, {directory: ['./routes']});
var dbURL = 'mongodb://localhost/wetalk';
var dbCon = db.connect(dbURL);

//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
