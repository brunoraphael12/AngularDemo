'use strict';

angular.module("webAdminApp")
    .factory("categoryAPI", CategoryAPIService);

function CategoryAPIService($http, config) {

    return {
        getCategory: function (category) {
            return $http.get(config.baseUrl + "/api/category" + category.id);
        },
        listCategory: function () {
            return $http.get(config.baseUrl + "/api/category");
        },
        saveCategory: function (category) {
            return $http.post(config.baseUrl + "/api/category", category);
        },
        updateCategory: function (category) {
            return $http.put(config.baseUrl + "/api/category", category);
        },
        deleteCategory: function (category) {
            return $http.delete(config.baseUrl + "/api/category" + category);
        }

    }
}