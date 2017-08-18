'use strict';

angular.module("webAdminApp")
    .controller("manageUseTypeCtrl", ManageUseTypeCtrl);

function ManageUseTypeCtrl($scope, useTypeAPI, toastUtil) {

    // Json para receber a lista de tipos de uso
    $scope.useTypes = [];

    // Json para receber o tipo de uso escolhido
    $scope.useType = {};


    

    $scope.deleteUseType = function (useType) {
        toastUtil.showLoadingToast("Carregando...");
        useTypeAPI.deleteUseType(useType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação desativada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateUseType = function (useType) {
        toastUtil.showLoadingToast("Carregando...");
        useTypeAPI.updateUseType(useType)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Tipo de Instalação atualizada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar o tipo de uso pelo index na tabela
    $scope.editUseType = function (index) {
        $scope.useType = $scope.useTypes[index];
        $scope.edit = true;
    };

    // Carregar todos os tipos de uso para o select
    var loadUseType = function () {
        useTypeAPI.listUseType()
            .then(function successCallback(response) {
                $scope.useTypes = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadUseType();

}