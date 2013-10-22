

var app = angular.module('WeTalk', ['EntryService']);

app.controller('IndexController', function (LoadEntries, $scope, $http) {
    $scope.getReplies = function(id) {
        $scope.entries = LoadEntries.load_replies({entry_id: id});
    };

    $scope.createEntry = function() {
        console.log($scope.entry);
        //console.log($http);
        //$scope.entries = CreateEntry.create_entry();
        $http('POST', '/entry/create', $scope.entry, function(status, response){
            console.log('Yeah!');
        }, function(status, response){
            console.log('Oh my GOD!');
        });
    };
});