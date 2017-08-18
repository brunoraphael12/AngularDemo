'use strict';

angular.module("webAdminApp")
    .factory("accessLevelAPI", AccessLevelAPIService);

function AccessLevelAPIService($http, config) {
    return {
        getAccessLevel: function (accessLevel) {
            return $http.get(config.baseUrl + "" + accessLevel.id);
        },
        listAccessLevel: function (){
            return $http.get(config.baseUrl + "");
        },
        saveAccessLevel: function (accessLevel) {
            return $http.post(config.baseUrl + "/api/useraccess/accesslevel", accessLevel);
        },
        updateAccessLevel: function (accessLevel) {
            return $http.put(config.baseUrl + "", accessLevel);
        },
        deleteAccessLevel: function (accessLevel) {
            return $http.delete(config.baseUrl + "" + accessLevel);
        }
    }
}