angularApp.controller("indexCtrl", function ($scope, $http) {
    $scope.headstyle = {color: 'green'};
    $scope.addform = "addform";
    $scope.dark = "dark";

    /* получение данных из модели, можно один раз, так как вложеные контроллеры */
    $http({method:"POST", url:"../backend/model.php"}).then(function (data) {
        $scope.list = data.data;
    });
});
