
/**
 * Main urls.
 */

var index = require('./routes/index');
var user = require('./routes/user');

exports = function(app) {
    app.get('/', index.index);
    app.get('/users', user.list);
};

