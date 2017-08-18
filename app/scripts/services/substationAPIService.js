'use strict';

angular.module("webAdminApp")
    .factory("substationAPI", SubstationAPIService);

function SubstationAPIService($http, config) {

    return {
        getSubstation: function (substation) {
            return $http.get(config.baseUrl + "/API/substation/" + substation.id);
        },
        listSubstation: function () {
            return $http.get(config.baseUrl + "/API/substation/");
        },
        saveSubstation: function (substation) {
            return $http.post(config.baseUrl + "/API/substation/", substation);
        },
        updateSubstation: function (substation) {
            return $http.put(config.baseUrl + "/API/substation/", substation);
        },
        deleteSubstation: function (substation) {
            return $http.delete(config.baseUrl + "/API/substation/" + substation);
        }

    }
}