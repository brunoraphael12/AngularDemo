'use strict';

angular.module("webAdminApp")
    .controller("manageInstallationTypeCtrl", ManageInstallationTypeCtrl);

function ManageInstallationTypeCtrl($scope, installationTypeAPI, toastUtil) {

    // Json para receber a lista de tipos de instalações
    $scope.installationTypes = [];

    // Json para receber o tipo escolhido
    $scope.installationType = {};


    

    $scope.deleteInstallationType = function (installationType) {
        toastUtil.showLoadingToast("Carregando...");
        installationTypeAPI.deleteInstallationType(installationType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação desativada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateInstallationType = function (installationType) {
        toastUtil.showLoadingToast("Carregando...");
        installationTypeAPI.updateInstallationType(installationType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação atualizada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar o tipo de instalação pelo index na tabela
    $scope.editInstallationType = function (index) {
        $scope.installationType = $scope.installationTypes[index];
        $scope.edit = true;
    };

    // Carregar todos os tipos de instalações para o select
    var loadInstallationType = function () {
        installationTypeAPI.listInstallationType()
            .then(function successCallback(response) {
                $scope.installationTypes = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadInstallationType();

}