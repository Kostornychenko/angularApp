angularApp.directive("customDirective", function () {
    return function (scope, element, attr) {
        var ol = angular.element("<ol>");
        element.append(ol);
        attr.$observe('value', function(value) {
            if (value) {
                var items = angular.fromJson(value);
                ol.children().remove();
                for(var i = 0; i < items[0].length; i++) {
                    if (items[0][i].price <= items[1]){
                        var li = angular.element("<li>");
                        li.text(items[0][i].name + " - " + items[0][i].price + "$");
                        ol.append(li);
                    }
                }
            }
        });
    }
});
