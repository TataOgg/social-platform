

var app = angular.module('WeTalk', ['EntryService']);

app.controller('IndexController', function (Entries, $scope) {
    $scope.getReplies = function(id) {
        $scope.entries = Entries.get({entry_id: id});
    };
});