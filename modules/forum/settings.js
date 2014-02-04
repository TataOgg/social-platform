/**
 * E-government settings.
 */


// Module name
exports.name = 'Foro';

// Routes
exports.route_prefix = 'forum';

// Root path
var modulePath = process.cwd() + '/modules/forum';
exports.modulePath = modulePath;

// Paths
// Middlewares path
exports.middlewaresPath = modulePath + '/middlewares/';
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
        route: '/forum/'
    },
    section = {
        name: 'Iniciativa ciudadana',
        route: '/forum/'
    },
    section = {
        name: 'Noticias',
        route: '/forum/'
    }
];