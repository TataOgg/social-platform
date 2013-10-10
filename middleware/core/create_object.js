
/**
 * Save an element
 */

var settings = require('../../settings');

function createObject(model) {
    var modelObject = require(settings.modelsPath + 'core/' + model);

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
