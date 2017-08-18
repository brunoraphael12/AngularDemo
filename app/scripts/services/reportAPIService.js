'use strict';

angular.module("webAdminApp")
    .factory("reportAPI", ReportAPIService);

function ReportAPIService($http, config) {
    return {
        getReport: function (report) {
            return $http.get(config.baseUrl + "/api/report" + report.id);
        },
        listReport: function () {
            return $http.get(config.baseUrl + "/api/report");
        },
        saveReport: function (report) {
            return $http.post(config.baseUrl + "/api/report", report);
        },
        updateReport: function (report) {
            return $http.put(config.baseUrl + "/api/report", report);
        },
        deleteReport: function (report) {
            return $http.delete(config.baseUrl + "/api/report" + report);
        }
    }
}