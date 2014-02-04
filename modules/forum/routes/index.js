/**
 * e-Gorvernment routes.
 */

var path = require('path');
var m_settings_path = path.join(__dirname, '../settings');
var m_settings = require(m_settings_path);

module.exports = {
    '/forum/': {
        methods: ['get'],
        middleware: [],
        fn: function(req, res, next) {
            res.render(m_settings.viewsPath + 'index', {
                'text': 'test desde módulo forum'
            });
        }
    }
};