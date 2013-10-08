
/**
 * Middleware to insert custom theme
 */

var path = require('path');
var walk = require('walk');


function loadResources(app, theme) {

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
            console.log(styles);
        });
    }

    return function loadResources(req, res, next) {
        if (req.path.indexOf('.js') == -1 && req.path.indexOf('.css') == -1) {
            findModules('./public/themes/' + theme + '/');
        }
        next();
    };
}

module.exports = loadResources;
