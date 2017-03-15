angularApp.controller("indexCtrl", function ($scope, $sce, $sanitize, $http) {
    $scope.headstyle = {color: 'green'};
    $scope.addform = "addform";
    $scope.dark = "dark";

    /* получение данных из модели, можно один раз, так как вложеные контроллеры */
    $http({method:"POST", url:"../backend/model.php"}).then(function (data) {
        $scope.list = data.data;
    });


    /*пример замены потенциально опасных символов в эскейп-последовательность*/

    /*$scope.sce_code = "<div><p><span>text</span></p></div>";
    $scope.$watch("sce_code", function (newValue) {
        $scope.sce_code = $sce.trustAsHtml(newValue);
    });

    $scope.san_code = "<div><p><span>text</span></p></div>";
    $scope.$watch("san_code", function (newValue) {
        $scope.san_code = $sanitize(newValue);
    })*/
});
