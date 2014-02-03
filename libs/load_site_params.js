/**
 * Middleware to load site params
 */

module.exports = function loadSiteParams(app, settings) {

    function extractAndSetSiteParms() {
        for (var key in settings.site) {
            if (settings.site.hasOwnProperty(key)) {
                var name = settings.site[key].property;
                // To set var as object key,
                // first we should create the object
                var obj = {};
                obj[name] = settings.site[key].content;
                app.locals(obj);
            }
        }
    }

    extractAndSetSiteParms();
};
