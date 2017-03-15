angularApp.directive("customList", function () {
    return function (scope, element, attr) {

        /* детально рассмотрим в четвер */
        /*attr.$observe('value', function(value) {
            if (value) {
                var items = angular.fromJson(value);

                var ul = angular.element("<ol>");
                element.append(ul);
                element.addClass("custom-list");

                for(var i = 0; i < items.length; i++) {
                    var li = angular.element("<li>");
                    li.text(items[i].name + " - " + items[i].price + "$");
                    ul.append(li);
                }
            }
        });*/
    }
});
