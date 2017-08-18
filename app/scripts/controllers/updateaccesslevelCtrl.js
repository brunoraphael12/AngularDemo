'use strict';

angular.module("webAdminApp")
    .controller("updateAccessLevelCtrl", UpdateAccessLevelCtrl);

function UpdateAccessLevelCtrl($scope, toastUtil, employeeAPI, substationAPI, accessLevelAPI) {

    $scope.accessLevel = { employee_id: "", sub_station_id: "", access_level_id: "" }
    $scope.employees = [];
    $scope.substations = [];

    $scope.saveAccessLevel = function (accessLevel) {
        toastUtil.showLoadingToast("Carregando...");
        accessLevelAPI.saveAccessLevel(accessLevel)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Nível de Acesso cadastrado com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    }

    var loadEmployees = function () {
        employeeAPI.listEmployee()
            .then(function successCallback(response) {
                $scope.employees = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    var loadSubstations = function () {
        substationAPI.listSubstation()
            .then(function successCallback(response) {
                $scope.substations = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadEmployees();
    loadSubstations();

}

