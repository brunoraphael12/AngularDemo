'use strict';

angular.module("webAdminApp")
    .controller("authCtrl", AuthCtrl);

function AuthCtrl($scope, $location, $state, authAPI, localStorageService, toastUtil) {

    $scope.user = { username: "", password: "" };

    $scope.authenticateUser = function(user) {

        authAPI.signin(user)
            .then(function successCallback(response) {
                toastUtil.showLoadingToast("Carregando...");
                if (response.status == 200) {
                    localStorageService.setToken(response.data.token);          /* Armazena o Token do Usuário */
                    toastUtil.showSuccessToast("Bem-vindo " + user.username);                       
                    $state.go("app.dashboard");                                     
                }
                else if (response.status == 204) {
                    toastUtil.showErrorToast(response.statusText);
                }
                else if (response.status == 400) {
                    toastUtil.showErrorToast(response.statusText);
                }
                else if (response.status == 403) {
                    toastUtil.showErrorToast("Você não possui a permissão de um administrador!");
                }
            }, function errorCallback(response) {

            });
    };
}