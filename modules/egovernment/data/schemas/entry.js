
/**
 * MongoDB e-Gobern entry schema
 */

var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
	userId: String,
    entry: String,
	type: String
});

module.exports = entrySchema;