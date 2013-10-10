
/**
 * GET users listing.
 */

var userModel = require('../../../data/models/core/user');

module.exports = {
    '/users': function(req, res, next) {
        userModel.find({}, function(err, users) {
            if (err) {
                console.log(err);
                return next(error);
            }
            res.render('users/index', {title: 'Users', users: users});
        });
    },

    '/users/create': function(req, res) {
        res.render('users/new', {title: "Create new entry"});
    }
};