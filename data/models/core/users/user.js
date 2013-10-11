
/**
 * User model
 */

var mongoose = require('mongoose');
var userSchema = require('../../../schemas/core/users/user');

var user = mongoose.model('User', userSchema);
module.exports = user;