
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var routescan = require('express-routescan');
//var i18n = require("i18n");

// Initializing Express
var app = express();

// Custom imports
var settings = require('./settings');
//var urls = require('./urls')(app);

// Custom init
routescan(app);

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

//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
