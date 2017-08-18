'use strict';

angular.module("webAdminApp")
    .controller("newUseTypeCtrl", NewUseTypeCtrl);

function NewUseTypeCtrl($scope, useTypeAPI, toastUtil) {

    $scope.useType = {name: ""};

    $scope.saveUseType = function (useType) {
        toastUtil.showLoadingToast("Carregando...");
        useTypeAPI.saveUseType(useType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de uso cadastrado com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

}