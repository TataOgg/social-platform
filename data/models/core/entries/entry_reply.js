
/**
 * Entry comments model
 */

var mongoose = require('mongoose');
var entryReplySchema = require('../../../schemas/core/entries/entry_reply');

var entryReply = mongoose.model('EntryReply', entryReplySchema);
module.exports = entryReply;