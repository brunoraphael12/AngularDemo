'use strict';

angular.module("webAdminApp")
    .controller("newInstallationTypeCtrl", NewInstallationTypeCtrl);

function NewInstallationTypeCtrl($scope, installationTypeAPI, toastUtil) {

    $scope.installationType = {name: ""};

    $scope.saveInstallationType = function (installationType) {
        toastUtil.showLoadingToast("Carregando...");
        installationTypeAPI.saveInstallationType(installationType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de instalação cadastrada com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

}