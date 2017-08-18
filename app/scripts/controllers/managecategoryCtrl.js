'use strict';

angular.module("webAdminApp")
    .controller("manageCategoryCtrl", ManageCategoryCtrl);

function ManageCategoryCtrl($scope, categoryAPI, toastUtil) {

    // Json para receber a lista de categorias
    $scope.categories = [];

    // Json para receber a categoria escolhida
    $scope.category = {};


    

    $scope.deleteCategory = function (category) {
        toastUtil.showLoadingToast("Carregando...");
        categoryAPI.deleteCategory(category)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Categoria desativada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateCategory = function (category) {
        toastUtil.showLoadingToast("Carregando...");
        categoryAPI.updateCategory(category)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Categoria atualizada!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar o equipamento pelo index na tabela
    $scope.editCategory = function (index) {
        $scope.category = $scope.categories[index];
        $scope.edit = true;
    };

    // Carregar todas as categorias dos equipamentos para o select
    var loadCategories = function () {
        categoryAPI.listCategory()
            .then(function successCallback(response) {
                $scope.categories = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadCategories();

}