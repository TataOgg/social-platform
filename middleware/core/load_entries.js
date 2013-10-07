
/**
 * Get user's entries
 */

var entryModel = require('../../data/models/core/entry');

function loadEntries(req, res, next) {
    entryModel.find({userId: "52529dad0e709b7031fe3282"}, function(err, entries) {
        if (err) {
            return next(err);
        }
        req.entries = entries;
        next();
    });
}

module.exports = loadEntries;