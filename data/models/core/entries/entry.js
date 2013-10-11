
/**
 * Entry model
 */

var mongoose = require('mongoose');
var entrySchema = require('../../../schemas/core/entries/entry');

var entry = mongoose.model('Entry', entrySchema);
module.exports = entry;