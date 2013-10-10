
/**
 * Create an entry
 */

var entryReplyModel = require('../../data/models/core/entry_reply');

function createEntryReply(req, res, next) {
    entryReplyModel.create(req.body, function(err) {
        if (err) {
            return next(err);
        }
        next();
    });
}

module.exports = createEntryReply;
