
/**
 * Create an entry
 */

var entryModel = require('../../data/models/core/entry');

function createEntry(req, res, next) {
    entryModel.find({ userId: '52529dad0e709b7031fe3282'}, function(err) {
        if (err) {
            return next(err);
        }
        next();
    });
}

module.exports = createEntry;
