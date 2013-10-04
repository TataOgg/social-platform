
/**
 * MongoDB User schema
 */

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	firstname: String,
	lastname: String,
	email: String,
	password: String
});

module.exports = UserSchema;