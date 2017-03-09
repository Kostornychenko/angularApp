angularApp.filter("customFilter", function () {
    return function (desc) {
        return "(" + desc + ")";
    }
});
