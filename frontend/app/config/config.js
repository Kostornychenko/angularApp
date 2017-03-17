angularApp.config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'views/addform.html',
        controller: 'addCtrl'
    });
    $routeProvider.when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'indexCtrl'
    });
    $routeProvider.otherwise({redirectTo:'/home'});
});
