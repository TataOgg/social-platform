
/**
 * GET home page.
 */

var loadEntriesMiddleware = require('../middleware/core/load_entries');
var loadResourcesMiddleware = require('../middleware/core/load_resources');

module.exports = {
    '/': {
        methods: ['get'],
        middleware: [loadEntriesMiddleware],
        fn: function(req, res, next) {
            res.render('index', { title: 'WeTalk', entries: req.entries });
        }
    }
};