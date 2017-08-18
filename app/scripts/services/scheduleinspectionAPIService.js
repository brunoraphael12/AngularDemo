'use strict';

angular.module("webAdminApp")
    .factory("scheduleInspectionAPI", ScheduleInspectionAPIService);

function ScheduleInspectionAPIService($http, config) {

    return {
        getScheduleInspection: function (scheduleInspection) {
            return $http.get(config.baseUrl + "/api/scheduleinspection" + scheduleInspection.id);
        },
        listScheduleInspection: function () {
            return $http.get(config.baseUrl + "/api/scheduleinspection");
        },
        saveScheduleInspection: function (scheduleInspection) {
            return $http.post(config.baseUrl + "/api/scheduleinspection", scheduleInspection);
        },
        updateScheduleInspection: function (scheduleInspection) {
            return $http.put(config.baseUrl + "/api/scheduleinspection", scheduleInspection);
        },
        deleteScheduleInspection: function (scheduleInspection) {
            return $http.delete(config.baseUrl + "/api/scheduleinspection" + scheduleInspection);
        }

    }
}