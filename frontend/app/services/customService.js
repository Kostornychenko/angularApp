angularApp.factory("customService", function () {
    return function () {
        console.log("customService");
    };
});