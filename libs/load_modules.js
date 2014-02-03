
/**
 * Middleware to load modules
 */


module.exports = function loadSelectedModules(app, path, modules_to_load) {
    var modules_routes = ['./routes'];
    function loadModule(dir, module_name) {
        try {
            var mSettings = require(dir + '/settings');
            var moduleApp = require(dir + '/app');
            moduleApp.setModuleApp(app, dir, module_name);
            moduleApp.setModuleSections(app, mSettings);
            modules_routes.push(moduleApp.setModuleRoutes(dir));
        } catch (err) {
            //console.log(err);
        }
    }

    for (var module in modules_to_load) {
        loadModule(path + modules_to_load[module], modules_to_load[module]);
    }

    if (modules_routes.length > 0) {
        app.set('modules_routes', modules_routes);
    }
        
};
