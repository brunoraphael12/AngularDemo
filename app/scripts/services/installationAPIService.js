'use strict';

angular.module("webAdminApp")
    .factory("installationAPI", InstallationAPIService);

function InstallationAPIService($http, config) {

    return {
        getInstallation: function (installation) {
            return $http.get(config.baseUrl + "/api/installation" + installation.id);
        },
        listInstallation: function () {
            return $http.get(config.baseUrl + "/api/installation");
        },
        saveInstallation: function (installation) {
            return $http.post(config.baseUrl + "/api/installation", installation);
        },
        updateInstallation: function (installation) {
            return $http.put(config.baseUrl + "/api/installation", installation);
        },
        deleteInstallation: function (installation) {
            return $http.delete(config.baseUrl + "/api/installation" + installation);
        }

    }
}