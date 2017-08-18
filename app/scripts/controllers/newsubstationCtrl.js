'use strict';

angular.module("webAdminApp")
    .controller("newSubstationCtrl", NewSubstationCtrl);

function NewSubstationCtrl($scope, substationAPI, toastUtil) {

    $scope.substation = {name: ""};

    $scope.saveSubstation = function (substation) {
        toastUtil.showLoadingToast("Carregando...");
        substationAPI.saveSubstation(substation)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Sub-estação cadastrada com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

}