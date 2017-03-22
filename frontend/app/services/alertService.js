angularApp.factory("alertService", function () {
    return {
        show: function (response, parent, message) {
            var element = angular.element("<p class='alert'></p>");
            if (response) {
                element.addClass("alert-info").text("Element " + message);
            } else {
                element.addClass("alert-danger").text("Element NOT " + message);
            }
            var parent_element = angular.element(parent);
            parent_element.after(element);
        }
    }
});