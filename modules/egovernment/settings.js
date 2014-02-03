/**
 * E-government settings.
 */


// Module name
exports.name = 'e-Gorvernment';

// Routes
exports.route_prefix = 'egovernment';

// Root path
var modulePath = process.cwd() + '/modules/egovernment';
exports.modulePath = modulePath;

// Paths
// Middlewares path
exports.middlewaresPath = modulePath + '/middleware/';
// Models path
exports.modelsPath = modulePath + '/data/models/';
// Schemas path
exports.schemasPath = modulePath + '/data/schemas/';
// Views path
exports.viewsPath = modulePath + '/views/';
// Public path
exports.publicPath = modulePath + '/public/';
// Routes path
exports.routesPath = modulePath + '/routes/';

// Site settings
exports.sections = [
    section = {
        name: 'Iniciativa de gobierno',
        route: '/egovernment/'
    },
    section = {
        name: 'Iniciativa ciudadana',
        route: '/egovernment/'
    },
    section = {
        name: 'Noticias',
        route: '/egovernment/'
    }
];