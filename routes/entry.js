
/**
 * Entry actions.
 */

var loadEntriesMiddleware = require('../middleware/core/load_entries');
var createObjectMiddleware = require('../middleware/core/create_object');

module.exports = {
    '/entry/create': {
        methods: ['post'],
        middleware: [createObjectMiddleware('entry')],
        fn: function(req, res, next) {
            res.redirect('/');
        }
    },
    '/entry/:entry_id': {
        methods: ['get'],
        middleware: [loadEntriesMiddleware],
        fn: function(req, res, next) {
            console.log(req.entries);
            res.render('entry_stream', {
                entries: req.entries,
                mainEntry: req.entry
            });
        }
    },
    '/entry/reply/create': {
        methods: ['post'],
        middleware: [createObjectMiddleware('entry_reply')],
        fn: function(req, res, next) {
            res.redirect(req.get('Referer'));
        }
    }
};