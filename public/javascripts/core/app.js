

var app = angular.module('WeTalk', ['EntryService', 'Socketio', 'RESTservice']);

app.controller('IndexController', function (LoadEntries, socketIO, restService, $scope, $http) {
    $scope.getReplies = function(id) {
        //$scope.entries = LoadEntries.load_replies({entry_id: id});
    };

    $scope.createEntry = function() {
        socketIO.emit('entry-added', $scope.entry);
    };

    socketIO.on('entry-checked', function (data) {
        restService.post(data, '/entry/create',
            function(data, status, headers, config) {
                console.log(status);
            },
            function(data, status, headers, config) {
                console.log(data);
            }
        );
    });
});