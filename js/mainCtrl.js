angular.module('friendsList')
  .controller('mainCtrl', function($scope){
    $scope.title = "Hello!!"
    $scope.friends = ["Jeffrey", "Drew", "Pete", "Chris"];

    $scope.addFriend = function(name){
      $scope.friends.push(name);
  };



});
