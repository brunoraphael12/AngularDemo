'use strict';

angular.module("webAdminApp")
    .factory("installationTypeAPI", InstallationTypeAPIService);

function InstallationTypeAPIService($http, config) {
    return {
        getInstallationType: function (installationType) {
            return $http.get(config.baseUrl + "/api/installationtype" + installationType.id);
        },
        listInstallationType: function () {
            return $http.get(config.baseUrl + "/api/installationtype");
        },
        saveInstallationType: function (installationType) {
            return $http.post(config.baseUrl + "/api/installationtype", installationType);
        },
        updateInstallationType: function (installationType) {
            return $http.put(config.baseUrl + "/api/installationtype", installationType);
        },
        deleteInstallationType: function (installationType) {
            return $http.delete(config.baseUrl + "/api/installationtype" + installationType);
        }
    }
}