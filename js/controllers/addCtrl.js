angularApp.controller("addCtrl", function ($scope) {
    $scope.list = data;

    $scope.addItem = function (name, price) {
        price = parseFloat(price);
        if(name != "" && !isNaN(price)) {
            $scope.list.items.push({name: name, price: price});
        }
    }
});
