'use strict';

angular.module("webAdminApp")
    .controller("newInstallationStatusCtrl", NewInstallationStatusCtrl);

function NewInstallationStatusCtrl($scope, installationStatusAPI, toastUtil) {

    $scope.installationStatus = {status: ""};

    $scope.saveInstallationStatus = function (installationStatus) {
        toastUtil.showLoadingToast("Carregando...");
        installationStatusAPI.saveInstallationStatus(installationStatus)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Status de Instalação cadastrado com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

}