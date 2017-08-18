'use strict';

angular.module('webAdminApp')
    .factory('localStorageService', LocalStorageService);

function LocalStorageService($localStorage) {
    return {
        getToken: function () {
            return $localStorage.token;
        },
        setToken: function (token) {
            $localStorage.token = token;
        },
        deleteToken: function () {
            delete $localStorage.token;
        }
    };
}