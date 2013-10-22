
/**
 * Entry actions.
 */

var createObjectMiddleware = require('../../../middleware/core/create_object');
var loadEntriesMiddleware = require('../../../middleware/core/entries/load_entries');
var identifyEntrytMiddleware = require('../../../middleware/core/entries/identify_entry');

module.exports = {
    // '/entry/create': {
    //     methods: ['post'],
    //     middleware: [createObjectMiddleware('entry', 'core/entries/')],
    //     fn: function(req, res, next) {
    //         res.redirect('/');
    //     }
    // },
    '/entry/create': {
        methods: ['post'],
        middleware: [identifyEntrytMiddleware],
        fn: function(req, res, next) {
            res.redirect('/');
        }
    },
    // '/entry/:entry_id': {
    //     methods: ['get'],
    //     middleware: [loadEntriesMiddleware],
    //     fn: function(req, res, next) {
    //         console.log(req.entries);
    //         res.render('core/entries/entry_stream', {
    //             entries: req.entries,
    //             mainEntry: req.entry
    //         });
    //     }
    // },
    '/entry/:entry_id': {
        methods: ['get'],
        middleware: [loadEntriesMiddleware],
        fn: function(req, res, next) {
            res.json(req.entries);
        }
    },
    '/entry/reply/create': {
        methods: ['post'],
        middleware: [createObjectMiddleware('entry_reply', 'core/entries/')],
        fn: function(req, res, next) {
            res.redirect(req.get('Referer'));
        }
    }
    // '/entry/reply/create': {
    //     methods: ['post'],
    //     middleware: [createObjectMiddleware('entry_reply', 'core/entries/')],
    //     fn: function(req, res, next) {
    //         res.redirect(req.get('Referer'));
    //     }
    // }
};