'use strict';

angular.module("webAdminApp")
    .controller("manageInstallationStatusCtrl", ManageInstallationStatusCtrl);

function ManageInstallationStatusCtrl($scope, installationStatusAPI, toastUtil) {

    // Json para receber a lista de status das instalações
    $scope.installationStatuses = [];

    // Json para receber o status da instalação escolhida
    $scope.installationStatus = {};


    

    $scope.deleteInstallationStatus = function (installationStatus) {
        toastUtil.showLoadingToast("Carregando...");
        installationStatusAPI.deleteInstallationStatus(installationStatus)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Status de Instalação desativada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateInstallationStatus = function (installationStatus) {
        toastUtil.showLoadingToast("Carregando...");
        installationStatusAPI.updateInstallationStatus(installationStatus)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Status de Instalação atualizada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar o status da instalação pelo index na tabela
    $scope.editInstallationStatus = function (index) {
        $scope.installationStatus = $scope.installationStatuses[index];
        $scope.edit = true;
    };

    // Carregar todos os status das instalações para o select
    var loadInstallationStatus = function () {
        installationStatusAPI.listInstallationStatus()
            .then(function successCallback(response) {
                $scope.installationStatuses = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadInstallationStatus();

}