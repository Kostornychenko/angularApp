angularApp.controller("indexCtrl", function ($scope, customService) {
    $scope.headstyle = {color: 'green'};
    $scope.addform = "addform";
    $scope.dark = "dark";

    $scope.inp = 100;
    /* получение данных из модели, можно один раз, так как вложеные контроллеры */
    customService.load().then(function (response) {
        $scope.list = response.data;
    });
});
