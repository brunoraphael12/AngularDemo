'use strict';

angular.module("webAdminApp")
    .controller("manageReportCtrl", ManageReportCtrl);

function ManageReportCtrl($scope, reportAPI, toastUtil) {

    // Json para receber a lista de relatórios
    $scope.reports = [];

    // Json para receber o relatório escolhido
    $scope.report = {};

    $scope.deleteReport = function (equipament) {
        toastUtil.showLoadingToast("Carregando...");
        reportAPI.deleteReport(equipament)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Relatório desativado!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateReport = function (report) {
        toastUtil.showLoadingToast("Carregando...");
        reportAPI.updateReport(report)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Relatório atualizado!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    // Selecionar o relatório pelo index na tabela
    $scope.editReport = function (index) {
        $scope.report = $scope.reports[index];
        $scope.edit = true;
    };


    // Carregar todos os relatórios para a listagem na tabela
    var loadReports = function () {
        reportAPI.listReport()
            .then(function successCallback(response) {
                $scope.reports = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadReports();

}