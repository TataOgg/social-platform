
/**
 * Module app file.
 */


exports.setModuleApp = function(app, module_path, module_name) {
    try {
        var loadResourcesMiddleware = require(module_path + 'middleware/load_resources');
        var loadModuleParams = require(module_path + 'middleware/load_site_params');
    } catch(err) {
        //console.log(err);
    }
    console.log('Module %s loaded', module_name);

};

exports.setModuleSections = function(app, module_settings) {
    var module_sections = module_settings.sections;
    var section_obj = {
        name: module_settings.name,
        sections: module_settings.sections
    };
    app.locals.sections.push(section_obj);
};

exports.setModuleRoutes = function(path) {
    return path + '/routes';
};