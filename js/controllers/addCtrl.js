angularApp.controller("addCtrl", function ($scope, customService) {
    $scope.list = customService;

    $scope.addItem = function (new_el, addForm) {
        if(addForm.$valid) {
            $scope.list.items.push({
                name: new_el.name,
                desc: new_el.desc,
                price: new_el.price});
        }
    }
});
