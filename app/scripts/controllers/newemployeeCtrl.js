'use strict';

angular.module("webAdminApp")
    .controller("newEmployeeCtrl", NewEmployeeCtrl)

function NewEmployeeCtrl($scope, employeeAPI, toastUtil) {

    $scope.employee = { "registry": "", "name": "", "role": "", "User": { "username": "", "password": "",  "admin": "" } };
    $scope.user = { "username": "", "password": "",  "admin": "" };
    $scope.roles = [];


    $scope.saveEmployee = function (emplo) {
        toastUtil.showLoadingToast("Carregando...");
        employeeAPI.saveEmployee(emplo)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Usuário cadastrado com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };
};