'use strict';

angular.module('webAdminApp')
    .factory('toastUtil', ToastUtil);

function ToastUtil($mdToast) {
    return {
        showLoadingToast: function (msg) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .position('bottom right')
                    .toastClass("md-toast-loading")
                    .hideDelay(3000)
            );
        },
        showErrorToast: function (msg) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .position('bottom right')
                    .toastClass("md-toast-error")
                    .hideDelay(3000)
            );
        },
        showSuccessToast: function (msg) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .position('bottom right')
                    .toastClass("md-toast-success")
                    .hideDelay(3000)
            );
        }
    };
}






