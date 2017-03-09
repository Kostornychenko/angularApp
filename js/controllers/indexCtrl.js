angularApp.controller("indexCtrl", function ($scope, customService) {
    $scope.headstyle = {color: 'green'};
    $scope.addform = "addform";
    $scope.dark = "dark";

    $scope.list = customService;
});
