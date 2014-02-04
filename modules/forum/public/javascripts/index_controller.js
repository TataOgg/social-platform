/**
 * @file index_controller.js
 * @namespace Index Controller
 * This module manage AngularJS index operations
 */

angular.module('WeTalk').controller('IndexController', function (socketIO, restService, $scope, $http) {

    restService.get({}, '/entry',
        function(data, status, headers, config) {
            $scope.entries = data;
        },
        function(data, status, headers, config) {
            console.log(data);
        }
    );

    $scope.getEntries = function() {
        restService.get({}, '/entry',
            function(data, status, headers, config) {
                $scope.entries = data;
            },
            function(data, status, headers, config) {
                console.log(data);
            }
        );
    };

    $scope.createEntry = function() {
        socketIO.emit('entry-added', $scope.entry);
    };

    socketIO.on('entry-checked', function (data) {
        restService.post(data, '/entry/create',
            function(data, status, headers, config) {
                $scope.entries = data;
            },
            function(data, status, headers, config) {
                console.log(data);
            }
        );
    });
});