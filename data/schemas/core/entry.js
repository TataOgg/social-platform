
/**
 * MongoDB Entry schema
 */

var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
	text: String,
	type: String
});

module.exports = entrySchema;