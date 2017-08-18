'use strict';

angular.module('webAdminApp')
    .directive('sidebar', SideBarDirective);

function SideBarDirective() {
    return {
        templateUrl: 'views/directives/sidebar.html',
        restrict: 'E'
    };
}
