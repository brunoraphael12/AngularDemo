'use strict';

angular.module("webAdminApp")
    .factory("equipmentAPI", EquipmentAPIService);

function EquipmentAPIService($http, config) {
    return {
        getEquipment: function (equipment) {
            return $http.get(config.baseUrl + "/API/equipment/" + equipment.id);
        },
        listEquipment: function () {
            return $http.get(config.baseUrl + "/API/equipment/");
        },
        saveEquipment: function (equipment) {
            return $http.post(config.baseUrl + "/API/equipment/", equipment);
        },
        updateEquipment: function (equipment) {
            return $http.put(config.baseUrl + "/API/equipment/", equipment);
        },
        deleteEquipment: function (equipment) {
            return $http.delete(config.baseUrl + "/API/equipment/" + equipment);
        }
    }
}