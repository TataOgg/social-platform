

var app = angular.module('WeTalk', ['EntryService', 'Socketio']);

app.controller('IndexController', function (LoadEntries, socketIO, $scope, $http) {
    $scope.getReplies = function(id) {
        $scope.entries = LoadEntries.load_replies({entry_id: id});
    };

    $scope.createEntry = function() {
        socketIO.emit('entry-added', $scope.entry);
    };

    socketIO.on('entry-checked', function (data) {
        $http({method: 'POST', data: data, url: '/entry/create'}).
            success(function(data, status, headers, config) {
                console.log(status);
            }).
            error(function(data, status, headers, config) {
                console.log(status);
            });
    });
});