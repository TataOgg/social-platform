/**
 * Main settings.
 */


// Node port
exports.port = 8000;

// Root path
var rootPath = process.cwd();
exports.rootPath = rootPath;

// Paths
// Libs path
exports.libsPath = rootPath + '/libs/';
// Middlewares path
exports.middlewaresPath = rootPath + '/middlewares/';
// Models path
exports.modelsPath = rootPath + '/data/models/';
// Schemas path
exports.schemasPath = rootPath + '/data/schemas/';
// Views path
exports.viewsPath = rootPath + '/views/';
// Modules path
exports.modulesPath = rootPath + '/modules/';

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
    },
    sections: {
        property: 'sections',
        content: []
    }
};

// Modules to load
exports.modules = [
    'egovernment',
    'chat'
];

// Widgets
// Twitter address
exports.twitterURL = 'twitter.com';