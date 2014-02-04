
/**
 * MongoDB e-Gobern entry schema
 */

var mongoose = require('mongoose');

var forumSchema = new mongoose.Schema({
    name: String,
    description: String,
    created_at: {type: Date, default: Date.now},
	owner: mongoose.Schema.Types.ObjectId,
    private: Boolean,
    moderators: [],
	members: []
});

module.exports = entrySchema;