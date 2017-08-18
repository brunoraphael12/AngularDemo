'use strict';

angular.module("webAdminApp")
    .controller("readEquipmentCtrl", ReadEquipmentCtrl);

function ReadEquipmentCtrl($scope, equipmentAPI, categoryAPI, toastUtil) {

    // Json para receber a lista de equipamentos
    $scope.equipments = [];

    // Json para receber o equipamento escolhido
    $scope.equipment = {};

    // Json para receber a lista de categorias
    $scope.categories = [];

    // Json para desativar um equipamento
    $scope.equipmentId = {id: ""};
    
    // Mockup jsons
    $scope.mockCharacteristic = { category: "", subCategory: "", Values: [{ title: "", value: "" }] };
    $scope.mockValue = { title: "", value: "" };

    $scope.deleteEquipment = function (equipament) {
        toastUtil.showLoadingToast("Carregando...");
        equipmentAPI.deleteEquipment(equipament)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Equipamento desativado!");
            }, function errorCallback(response) {
                console.log(equipament);
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.updateEquipment = function (equipament) {
        toastUtil.showLoadingToast("Carregando...");
        equipmentAPI.updateEquipment(equipament)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Equipamento atualizado!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

    $scope.newValue = function (mockValue, index) {
        $scope.equipment.Characteristics[index].Values.push(angular.copy(mockValue));
    };

    $scope.newCharacteristic = function (mockCharacteristic) {
        $scope.equipment.Characteristics.push(angular.copy(mockCharacteristic));
    };

    // Selecionar o equipamento pelo index na tabela
    $scope.editEquipment = function (index) {
        $scope.equipment = $scope.equipments[index];
        $scope.equipmentId.id = $scope.equipments[index].id;
        $scope.edit = true;
    };

    // Carregar todos os equipamentos para a listagem na tabela
    var loadEquipments = function () {
        equipmentAPI.listEquipment()
            .then(function successCallback(response) {
                $scope.equipments = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    // Carregar todas as categorias dos equipamentos para o select
    var loadCategories = function () {
        categoryAPI.listCategory()
            .then(function successCallback(response) {
                $scope.categories = response.data;
            }, function errorCallback(response) {
                toast.showErrorToast(response.statusText);
            });
    }

    loadEquipments();
    loadCategories();

}