
/**
 * Create an entry
 */

var entryModel = require('../../data/models/core/entry');

function createEntry(req, res, next) {
    entryModel.create(req.body, function(err) {
        if (err) {
            return next(err);
        }
        next();
    });
}

module.exports = createEntry;
