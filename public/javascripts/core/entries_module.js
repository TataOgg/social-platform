

// var entriesModule = angular.module('EntriesModule', []);

// entriesModule.factory('Entries', function($http) {
//     var entries = {};
//     entries.query = function(id) {
//         $http.get('/entry/', {params: [{entry_id: id}]}).success(function(data, status, headers, config) {
//             return data;
//         });
//     };
//     return entries;
// });

// entriesModule.factory('Entries', ['$resource', function($resource, id) {
//     return $resource('/entry/:entry_id',
//         {entry_id: id},
//         {charge: {method:'GET'}});
// }]);


var entryService = angular.module('EntryService', ['ngResource']);

entryService.factory('Entries', ['$resource',
    function($resource){
        return $resource('entry/:entry_id', {entry_id: '@entry_id'}, {
            get: {method:'GET', isArray:true}
        });
    }
]);