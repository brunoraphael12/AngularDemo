'use strict';

angular.module('webAdminApp')
    .controller('headerCtrl', HeaderCtrl)
    .directive('header', HeaderDirective);

function HeaderCtrl($scope, $mdSidenav, authAPI) {

    $scope.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    $scope.collapseSideBar = function() {
        $mdSidenav('sidebar').toggle();
    };

    $scope.logout = function() {
        authAPI.logout();
    };

}

function HeaderDirective() {
    return {
        templateUrl: 'views/directives/header.html',
        restrict: 'E'
    };
}
