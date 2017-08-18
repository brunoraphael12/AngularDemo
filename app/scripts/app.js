'use strict';

var app = angular.module('webAdminApp', [
    'ngMaterial',
    'ngStorage',
    'ui.router'
])
    .config(AppThemes)
    .config(AppRoutes);

function AppRoutes($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

    // Configure Routes
    $stateProvider

        // Login Section
        .state('login', {
            templateUrl: 'views/login.html',
            controller: 'authCtrl',
            url: '/login'
        })

        // App Section
        .state('app', {
            templateUrl: 'views/app.html',
            url: '/app'
        })

        // Dashboard Section
        .state('app.dashboard', {
            templateUrl: 'views/dashboard.html',
            url: '/dashboard',
            authorize: true
        })

        // About Section
        .state('app.about', {
            templateUrl: 'views/about.html',
            url: '/about'
        })

        // Equipment Section
        .state('app.equipamento', {
            templateUrl: 'views/equipment/equipmentindex.html',
            url: '/equipamento'
        })
        .state('app.equipamento.cadastro', {
            templateUrl: 'views/equipment/createequipment.html',
            controller: 'newEquipmentCtrl',
            url: '/cadastro',
            authorize: true
        })
        .state('app.equipamento.consulta', {
            templateUrl: 'views/equipment/readequipment.html',
            controller: 'readEquipmentCtrl',
            url: '/consulta',
            authorize: true
        })

        // Inspection Section
        .state('app.inspection', {
            templateUrl: 'views/inspection/inspectionindex.html',
            url: '/inspecao'
        })
        .state('app.inspection.agendar', {
            templateUrl: 'views/inspection/newinspection.html',
            controller: 'newScheduleInspectionCtrl',
            url: '/agendamento',
            authorize: true
        })

        // Report Section
        .state('app.relatorio', {
            templateUrl: 'views/report/reportindex.html',
            url: '/relatorio'
        })
        .state('app.relatorio.gerenciar', {
            templateUrl: 'views/report/managereport.html',
            controller: 'manageReportCtrl',
            url: '/gereciamento',
            authorize: true
        })

        // User Section
        .state('app.usuario', {
            templateUrl: 'views/employee/employeeindex.html',
            url: '/usuario'
        })
        .state('app.usuario.acesso', {
            templateUrl: 'views/employee/createaccesslevel.html',
            controller: 'updateAccessLevelCtrl',
            url: '/acesso',
            authorize: true
        })
        .state('app.usuario.gerenciar', {
            templateUrl: 'views/employee/createemployee.html',
            controller: 'newEmployeeCtrl',
            url: '/cadastro',
            authorize: true
        })

        // Tables Section ------------ MENU FOR AUXILIARY TABLES
        .state('app.tabela', {
            templateUrl: 'views/aux_table/valuesindex.html',
            url: '/tabela'
        })

        .state('app.tabela.cadastro', {
            templateUrl: 'views/aux_table/createvalues.html',
            url: '/cadastro',
            authorize: true
        })

        .state('app.tabela.gerenciar', {
            templateUrl: 'views/aux_table/managevalues.html',
            url: '/gerenciamento',
            authorize: true
        })

        // Substation Section ------------- OPTION FROM MENU (AUXILIARY TABLE)
        .state('app.tabela.cadastro.substation', {
            templateUrl: 'views/aux_table/substation/createsubstation.html',
            controller: 'newSubstationCtrl',
            url: '/substation',
            authorize: true
        })

        .state('app.tabela.gerenciar.substation', {
            templateUrl: 'views/aux_table/substation/managesubstation.html',
            controller: 'manageSubstationCtrl',
            url: '/substation',
            authorize: true
        })

        // Installation Status Section ------------- OPTION FROM MENU (AUXILIARY TABLE)
        .state('app.tabela.cadastro.installationStatus', {
            templateUrl: 'views/aux_table/installation/status/createstatus.html',
            controller: 'newInstallationStatusCtrl',
            url: '/installationStatus',
            authorize: true
        })

        .state('app.tabela.gerenciar.installationStatus', {
            templateUrl: 'views/aux_table/installation/status/managestatus.html',
            controller: 'manageInstallationStatusCtrl',
            url: '/installationStatus',
            authorize: true
        })

        // Equipment Category Section ------------- OPTION FROM MENU (AUXILIARY TABLE)
        .state('app.tabela.cadastro.equipmentCategory', {
            templateUrl: 'views/aux_table/equipment/category/createcategory.html',
            controller: 'newCategoryCtrl',
            url: '/equipmentCategory',
            authorize: true
        })

        .state('app.tabela.gerenciar.equipmentCategory', {
            templateUrl: 'views/aux_table/equipment/category/managecategory.html',
            controller: 'manageCategoryCtrl',
            url: '/equipmentCategory',
            authorize: true
        })

        // Installation Type Section ------------- OPTION FROM MENU (AUXILIARY TABLE)
        .state('app.tabela.cadastro.installationType', {
            templateUrl: 'views/aux_table/installation/type/createinstallationtype.html',
            controller: 'newInstallationTypeCtrl',
            url: '/installationType',
            authorize: true
        })

        .state('app.tabela.gerenciar.installationType', {
            templateUrl: 'views/aux_table/installation/type/manageinstallationtype.html',
            controller: 'manageInstallationTypeCtrl',
            url: '/installationType',
            authorize: true
        })

        // Use Type ------------- OPTION FROM MENU (AUXILIARY TABLE)
        .state('app.tabela.cadastro.useType', {
            templateUrl: 'views/aux_table/use_type/createusetype.html',
            controller: 'newUseTypeCtrl',
            url: '/useType',
            authorize: true
        })

        .state('app.tabela.gerenciar.useType', {
            templateUrl: 'views/aux_table/use_type/manageusetype.html',
            controller: 'manageUseTypeCtrl',
            url: '/useType',
            authorize: true
        })

        // Others Section
        .state('app.blank', {
            templateUrl: 'views/blank.html',
            url: '/blank'
        });

    // Other Routes
    $urlRouterProvider.otherwise('/app/dashboard');

}


function AppThemes($mdThemingProvider) {

    // Configure Material Angular Theme
    $mdThemingProvider.theme('default')
        .primaryPalette('cyan', {
            'default': '500',
            'hue-1': '200',
            'hue-2': '900',
            'hue-3': '800'
        })
        .accentPalette('blue');

    // Configure Sidebar Color Palette
    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'e9e9e9',
        '100': 'e9e9e9',
        '200': 'e9e9e9',
        '300': 'e9e9e9',
        '400': 'e9e9e9',
        '500': 'e9e9e9',
        '600': 'e9e9e9',
        '700': 'e9e9e9',
        '800': 'e9e9e9',
        '900': 'e9e9e9',
        'A100': 'e9e9e9',
        'A200': 'e9e9e9',
        'A400': 'e9e9e9',
        'A700': 'e9e9e9',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });


    // Configure Material Angular Theme for Sidebar
    $mdThemingProvider.theme('customSidebar')
        .backgroundPalette('amazingPaletteName');

}