'use strict';

angular.module("webAdminApp")
    .controller("newScheduleInspectionCtrl", NewScheduleInspectionCtrl);
    
function NewScheduleInspectionCtrl($scope, employeeAPI, scheduleInspectionAPI, installationAPI, toastUtil, dateUtil) {

    $scope.minDate = new Date();
    $scope.scheduleInspection = { "dtSchedule": "", "employee_id": "", "installation_id": "" };
    $scope.employees = [];
    $scope.installations = [];

    $scope.saveScheduleInspection = function (scheduleInspection) {
        toastUtil.showLoadingToast("Carregando...");
        scheduleInspection.dtSchedule = dateUtil.changeDateFormat(scheduleInspecion.dtSchedule);
        scheduleInspectionAPI.saveScheduleInspection(scheduleInspection)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Agendada uma inspeção com sucesso!");
            }, function errorCallback(response) {
                console.log(scheduleInspection);
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Carregar todos os funcionários para a listagem
    var loadEmployees = function () {
        employeeAPI.listEmployee()
            .then(function successCallback(response) {
                $scope.employees = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    // Carregar todos as instalações para a listagem
    var loadInstallations = function () {
        installationAPI.listInstallation()
            .then(function successCallback(response) {
                $scope.installations = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadEmployees();
    loadInstallations();

};
