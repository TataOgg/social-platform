
/**
 * Save an element
 */

var request = require('request');
var settings = require('../../../settings');

function identifyEntry(req, res, next) {
    var entry = req.body.entry;
    console.log(entry);
    next();
}

module.exports = identifyEntry;
