
/**
 * Entry actions.
 */

var createEntryMiddleware = require('../middleware/core/create_entry');

module.exports = {
    '/entry/create': {
        methods: ['post'],
        middleware: [createEntryMiddleware],
        fn: function(req, res, next) {
            res.redirect('/');
        }
    }
};