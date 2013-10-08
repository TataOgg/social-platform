
/**
 * Middleware to insert custom theme
 */

var path = require('path');
var walk = require('walk');


function loadResources(app, theme) {

    app.locals.prueba = theme;

    function findModules(dir) {
        styles = [];
        var walker = walk.walk(dir, {followLinks: false});
        walker.on('file', function(root, stat, next) {
            var current = path.join(root, stat.name);
            var extname = path.extname(current);

            if (extname === '.css') {
                styles.push(current);
            }

            next();
        });

        walker.on('end', function() {
            console.log("*************************");
        });
    }

    return function loadResources(req, res, next) {
        findModules('./public/stylesheets');
        console.log(req.accepts('html'));
        next();
    };
}

module.exports = loadResources;
