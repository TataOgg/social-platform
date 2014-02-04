
/**
 * Forum's object model
 */

var mongoose = require('mongoose');
var entrySchema = require('../schemas/forum');

var forum = mongoose.model('Forum', forumSchema);
module.exports = forum;

var topic = mongoose.model('Topic', topicSchema);
module.exports = topic;

var post = mongoose.model('Post', postSchema);
module.exports = post;
