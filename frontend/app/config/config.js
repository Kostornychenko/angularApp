angularApp.config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'frontend/views/addform.html',
        controller: 'addCtrl'
    });
    $routeProvider.when('/list', {
        templateUrl: 'frontend/views/list.html',
        controller: 'listCtrl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'frontend/views/home.html',
        controller: 'indexCtrl'
    });
    $routeProvider.otherwise({redirectTo:'/home'});
});
