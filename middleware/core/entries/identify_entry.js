
/**
 * Save an element
 */

var settings = require('../../../settings');

function identifyEntry() {

    return function identifyEntry(req, res, next) {
        var entry = req.body.entry;
        console.log(entry);
    };
}

module.exports = identifyEntry;
