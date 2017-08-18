'use strict';

angular.module("webAdminApp")
    .controller("newCategoryCtrl", NewCategoryCtrl);

function NewCategoryCtrl($scope, categoryAPI, toastUtil) {

    $scope.category = {name: ""};

    $scope.saveCategory = function (category) {
        toastUtil.showLoadingToast("Carregando...");
        categoryAPI.saveCategory(category)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Categoria cadastrada com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

}