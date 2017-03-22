angularApp.factory("customService", function ($http) {
    return {
        load: function (request) {
            return $http({method:"POST", url:"backend/model.php", data: request})
        }
    }
});