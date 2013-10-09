
/**
 * Middleware to insert custom theme
 */

var diveSync = require('diveSync');
var path = require('path');

function loadResources(app, theme) {

    function findModules(dir) {
        var javascripts = [];
        var styles = [];

        // Parse route to add the static
        function checkAndInsert(dir, file) {
            var extname = path.extname(file);
            if (extname === '.css') {
                styles.push(file.replace(process.cwd() + '/public', ''));
            } else if (extname === '.js') {
                javascripts.push(file.replace(process.cwd() + '/public', ''));
            }
        }

        // Dive into the dir to get .css and .js files
        diveSync(process.cwd() + dir,
            {
              directories: false,
              all: false,
              recursive: true
            }, function(err, file) {
            if (err) throw err;

            checkAndInsert(process.cwd() + dir, file);

            // Set global template vars
            app.locals.styleFiles = styles;
            app.locals.jsFiles = javascripts;
        });
    }

    return function loadResources(req, res, next) {
        // Check if load once only (statics ...)
        if (req.path.indexOf('.js') == -1 && req.path.indexOf('.css') == -1) {
            findModules('/public/themes/' + theme);
        }
        next();
    };
}

module.exports = loadResources;
