'use strict';

angular.module('webAdminApp')
    .factory('dateUtil', DateUtil);

function DateUtil() {
    return {
        changeDateFormat: function (date) {
            date.format('YYYY-MM-DD');
        }
    };
}