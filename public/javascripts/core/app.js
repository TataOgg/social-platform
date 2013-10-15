

var app = angular.module('WeTalk', ['EntryService']);

app.controller('IndexController', function (LoadEntries, CreateEntry, $scope) {
    $scope.getReplies = function(id) {
        $scope.entries = LoadEntries.load_replies({entry_id: id});
    };

    $scope.createEntry = function() {
        console.log($scope.entry.type);
        // $scope.entries = CreateEntry.create_entry();
    };
});