'use strict';

angular.module("webAdminApp")
    .controller("newEquipmentCtrl", NewEquipmentCtrl);

function NewEquipmentCtrl($scope, equipmentAPI, categoryAPI, toastUtil) {

    $scope.categories = [];

    // Main Json 
    $scope.equipment = { type: "", description: "", category_id: "", equipment_status_id: "", Characteristics: [{ category: "", subCategory: "", Values: [{ title: "", value: "" }] }] };

    // Mockup jsons
    $scope.mockEquipment = { type: "", description: "", category_id: "", equipment_status_id: "", Characteristics: [{ category: "", subCategory: "", Values: [{ title: "", value: "" }] }] };
    $scope.mockCharacteristic = { category: "", subCategory: "", Values: [{ title: "", value: "" }] };
    $scope.mockValue = { title: "", value: "" };


    $scope.newValue = function (mockValue, index) {
        $scope.equipment.Characteristics[index].Values.push(angular.copy(mockValue));
    };

    $scope.newCharacteristic = function (mockCharacteristic) {
        $scope.equipment.Characteristics.push(angular.copy(mockCharacteristic));
    };

    $scope.cleanFields = function (mockEquipment) {
        $scope.equipment = mockEquipment;
    };

    $scope.saveEquipment = function (equipament) {
        toastUtil.showLoadingToast("Carregando...");
        equipmentAPI.saveEquipment(equipament)
            .then(function successCallback(response) {
                toastUtil.showSuccessToast("Equipamento cadastrado com sucesso!");
            }, function errorCallback(response) {
                toastUtil.showErrorToast(response.statusText);
            });
    };

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