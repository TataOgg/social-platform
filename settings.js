
/**
 * Main settings.
 */


// Node port
exports.port = 8000;

// Default theme
exports.theme = 'default';

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

// Widgets
// Twitter address
exports.twitterURL = 'www.twitter.com';




