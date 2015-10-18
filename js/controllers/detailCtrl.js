angular.module('celebsApp')

.controller('DetailCtrl', function($scope, $http, Celebs, $routeParams) {

        $scope.celebrityId = $routeParams.celebId;
        $scope.celebrity = {};

        Celebs.getOne( $scope.celebrityId )
            .then(function( response ) {

               var celebrities = response.data.celebs;
                celebrities.forEach(function( i ) {
                    if( i.id == $scope.celebrityId ) {
                        $scope.celebrity = i;
                    }
                });
                console.log($scope.celebrity);

            }, function( response ){

                //error

            });

});
