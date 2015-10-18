angular.module('celebsApp')

.controller('ListCtrl', function($scope, $http, Celebs) {

    Celebs.getAll()
        .then(function(response) {

            $scope.celebs = response.data;
             console.log($scope.celebs);

        }, function(response){

            //error

        });
});