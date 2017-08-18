'use strict';

angular.module('webAdminApp')
    .factory('authInterceptorService', AuthInterceptorService)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

function AuthInterceptorService($location, localStorageService, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};

            if (localStorageService.getToken()) {
                config.headers['Authorization'] = localStorageService.getToken();
            }

            return config;
        },

        responseError: function (response) {                                        /* Se houver erro "Access Denied/Forbidden" o usuário é redirecionado para a página de login */
            if (response.status === 401 || response.status === 403) {
                $location.path('/login');
            }

            return $q.reject(response);
        }
    }
}