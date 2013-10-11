
/**
 * MongoDB Entry comments schema
 */

var mongoose = require('mongoose');

var entryReplySchema = new mongoose.Schema({
    entryId: String,
    userId: String,
    reply: String,
    type: String
});

module.exports = entryReplySchema;