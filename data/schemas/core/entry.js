
/**
 * MongoDB Entry schema
 */

var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
	text: String,
	type: String
});

module.exports = EntrySchema;