'use strict';

angular.module("webAdminApp")
    .controller("manageSubstationCtrl", ManageSubstationCtrl);

function ManageSubstationCtrl($scope, substationAPI, toastUtil) {

    // Json para receber a lista de sub-estações
    $scope.substations = [];

    // Json para receber a sub-estação escolhida
    $scope.substation = {};


    

    $scope.deleteSubstation = function (substation) {
        toastUtil.showLoadingToast("Carregando...");
        substationAPI.deleteSubstation(substation)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação desativada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateSubstation = function (substation) {
        toastUtil.showLoadingToast("Carregando...");
        substationAPI.updateSubstation(substation)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação atualizada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar a sub-estação pelo index na tabela
    $scope.editSubstation = function (index) {
        $scope.substation = $scope.substations[index];
        $scope.edit = true;
    };

    // Carregar todas as sub-estações para o select
    var loadSubstation = function () {
        substationAPI.listSubstation()
            .then(function successCallback(response) {
                $scope.substations = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadSubstation();

}