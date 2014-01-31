/**
 * Main settings.
 */


// Node port
exports.port = 8000;

// Root path
var rootPath = process.cwd();
exports.rootPath = rootPath;

// Paths
// Middlewares path
exports.middlewaresPath = rootPath + '/middleware/';
// Models path
exports.modelsPath = rootPath + '/data/models/';
// Schemas path
exports.schemasPath = rootPath + '/data/schemas/';
// Views path
exports.viewsPath = rootPath + '/views/';

// Site settings
exports.site = {
    // Site title
    title: {
        property: 'title',
        content: 'WeTalk'
    },
    // Default theme
    theme: {
        property: 'theme',
        content: 'default'
    }
};

// Widgets
// Twitter address
exports.twitterURL = 'twitter.com';