
/**
 * e-Gobern entry model
 */

var mongoose = require('mongoose');
var entrySchema = require('../schemas/core/entries/entry');

var entry = mongoose.model('EgovernEntry', entrySchema);
module.exports = entry;