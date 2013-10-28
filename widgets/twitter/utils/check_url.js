
/**
 * Twitter URL operations
 */

var request = require('request');
var settings = require('../../../settings')

function isTwitterURL(url) {
    try {
        req = request.get(url);
    } catch(err) {
        return false;
    }
    if (req.host === settings.twitterURL) {
        return true;
    } else {
        return false;
    }
}

function checkURL(url) {
    return isTwitterURL(url);
}

module.exports = checkURL;