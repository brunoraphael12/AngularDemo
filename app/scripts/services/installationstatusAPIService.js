'use strict';

angular.module("webAdminApp")
    .factory("installationStatusAPI", InstallationStatusAPIService);

function InstallationStatusAPIService($http, config) {
    return {
        getInstallationStatus: function (installationStatus) {
            return $http.get(config.baseUrl + "/api/installationstatus/" + installationStatus.id);
        },
        listInstallationStatus: function () {
            return $http.get(config.baseUrl + "/api/installationstatus/");
        },
        saveInstallationStatus: function (installationStatus) {
            return $http.post(config.baseUrl + "/api/installationstatus/", installationStatus);
        },
        updateInstallationStatus: function (installationStatus) {
            return $http.put(config.baseUrl + "/api/installationstatus/", installationStatus);
        },
        deleteInstallationStatus: function (installationStatus) {
            return $http.delete(config.baseUrl + "/api/installationstatus/" + installationStatus);
        }
    }
}