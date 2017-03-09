angularApp.directive("customList", function () {
    return function ($scope, element, attr) {
        var ul = angular.element("<ol>");
        element.append(ul);
        element.addClass("custom-list");

        for(var i = 0; i < $scope.list.items.length; i++) {
            var li = angular.element("<li>");
            li.text($scope.list.items[i].name + " - " + $scope.list.items[i].price + "$");
            ul.append(li);
        }
    }
});
