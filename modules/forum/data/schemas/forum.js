
/**
 * MongoDB forum's object schema
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

module.exports = forumSchema;

var topicSchema = new mongoose.Schema({
    forum: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    created_at: {type: Date, default: Date.now},
    owner: mongoose.Schema.Types.ObjectId,
    private: Boolean
});

module.exports = topicSchema;

var postSchema = new mongoose.Schema({
    topic: mongoose.Schema.Types.ObjectId,
    description: String,
    created_at: {type: Date, default: Date.now},
    owner: mongoose.Schema.Types.ObjectId
});

module.exports = postSchema;