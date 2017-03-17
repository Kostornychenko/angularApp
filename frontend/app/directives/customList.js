angularApp.directive("customList", function () {
    return function (scope, element, attr) {
        var ol = angular.element("<ol>");
        element.append(ol);
        attr.$observe('value', function(value) {
            if (value) {
                var items = angular.fromJson(value);
                ol.children().remove();
                for(var i = 0; i < items.length; i++) {
                    var li = angular.element("<li>");
                    li.text(items[i].name + " - " + items[i].price + "$");
                    ol.append(li);
                }
            }
        });
    }
});
