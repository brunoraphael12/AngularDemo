'use strict';

angular.module('webAdminApp')
    .factory('authAPI', AuthAPIService);

function AuthAPIService($http, $location, config, localStorageService) {
    return {
        signin: function(data) {
            return $http.post(config.baseUrl + '/API/authenticate/web', data);
        },
        logout: function() {
            localStorageService.deleteToken();
            $location.path('/login');
        }
    };
}