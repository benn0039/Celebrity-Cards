angular.module('celebsApp')

.config(function($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
    })

    // Don't forget to use [:myVar] for dynamic data
    .when('/detail/:celebId', {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
    })

    .otherwise({redirectTo: '/'});

})
