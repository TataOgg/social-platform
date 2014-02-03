
/**
 * Save an element
 */

var settings = require('../../settings');

function createObject(model, subpath) {
    var modelObject = require(settings.modelsPath + subpath + model);

    return function createObject(req, res, next) {
        modelObject.create(req.body, function(err) {
            if (err) {
                return next(err);
            }
            next();
        });
    };
}

module.exports = createObject;
