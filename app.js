/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var routescan = require('express-routescan');
var db = require('mongoose');
var settings = require('./settings');
var loadResources = require(settings.libsPath + 'load_resources');
var loadSiteParams = require(settings.libsPath + 'load_site_params');
var loadModules = require(settings.libsPath + 'load_modules');

// Initializing Express
var app = express();

// all environments
app.set('port', settings.port || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Load site params
loadSiteParams(app, settings);

// Load resources
loadResources(app, settings.site.theme.content);

// Load modules
loadModules(app, settings.modulesPath, settings.modules);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
}

// production only
if ('production' == app.get('pro')) {
    app.use(express.errorHandler());
}

// Init routes
routescan(app, {
    directory: app.get('modules_routes')
});
var dbURL = 'mongodb://localhost/wetalk';
var dbCon = db.connect(dbURL);

var server = http.createServer(app);

var socketio = require('./utils/socketio')(server);

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});


