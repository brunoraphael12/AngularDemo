angular.module('webAdminApp')
    .run(StateChangeListener);

/* Verifica se rota possui a propriedade "authorize"  */

function StateChangeListener($rootScope, $location, localStorageService) {
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        if (next.authorize) {
            if (!localStorageService.getToken()) {
                $rootScope.$evalAsync(function () {
                    $location.path('/login');
                })
            }
        }
    });

}