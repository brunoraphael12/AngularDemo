'use strict';

angular.module("webAdminApp")
    .factory("employeeAPI", EmployeeAPIService);

function EmployeeAPIService($http, config) {

    return {
        getEmployee: function (employee) {
            return $http.get(config.baseUrl + "/API/employee/" + employee.id);
        },
        listEmployee: function () {
            return $http.get(config.baseUrl + "/API/employee/");
        },
        saveEmployee: function (employee) {
            return $http.post(config.baseUrl + "/API/employee/", employee);
        },
        updateEmployee: function (employee) {
            return $http.put(config.baseUrl + "/API/employee/", employee);
        },
        deleteEmployee: function (employee) {
            return $http.delete(config.baseUrl + "/API/employee/" + employee);
        }

    }
}