angularApp.controller("addCtrl", function ($scope, customService, alertService) {

    function getNextId() {
        if ($scope.list.items.length == 0) {
            return 1
        } else {
            return $scope.list.items[$scope.list.items.length - 1].id + 1
        }
    }

    $scope.addItem = function (new_el, addForm) {
        if(addForm.$valid) {
            var new_element = {
                id: getNextId(),
                name: new_el.name,
                desc: new_el.desc,
                price: new_el.price
            };
            $scope.list.items.push(new_element);

            /**/
            var request = {
                action:"add",
                element:new_element
            }

            /*отправка нового елемента в модель*/
            customService.load(request).then(function (response) {
                alertService.show(response, document.querySelector("form"), "added")
            })
        }
    }
});
