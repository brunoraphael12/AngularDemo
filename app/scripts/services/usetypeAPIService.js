'use strict';

angular.module("webAdminApp")
    .factory("useTypeAPI", UseTypeAPIService);

function UseTypeAPIService($http, config) {
    return {
        getUseType: function (useType) {
            return $http.get(config.baseUrl + "/api/usetype/" + useType.id);
        },
        listUseType: function () {
            return $http.get(config.baseUrl + "/api/usetype/");
        },
        saveUseType: function (useType) {
            return $http.post(config.baseUrl + "/api/usetype/", useType);
        },
        updateUseType: function (useType) {
            return $http.put(config.baseUrl + "/api/usetype/", useType);
        },
        deleteUseType: function (useType) {
            return $http.delete(config.baseUrl + "/api/usetype/" + useType);
        }
    }
}