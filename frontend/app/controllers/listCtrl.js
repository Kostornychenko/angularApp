angularApp.controller("listCtrl", function ($scope, customService, alertService) {

    $scope.deleteItem = function(item) {
        for (var i in $scope.list.items) {
            if ($scope.list.items[i].name == item) {
                $scope.list.items.splice(i, 1);

                var request = {
                    action: "remove",
                    index : i
                };

                /*отправка запроса на удаление елемента в модель*/
                customService.load(request).then(function (response) {
                    alertService.show(response, document.querySelector("table"), "removed");
                });
            }
        }
    };
});
