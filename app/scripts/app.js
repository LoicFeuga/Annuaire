'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/searchProject/', {
        templateUrl: 'views/Users/searchProject.html',
        controller: 'UsersCtrl'
      })
       .when('/searchUser/', {
        templateUrl: 'views/Users/searchUser.html',
        controller: 'UsersCtrl'
      })
         .when('/addUser/', {
        templateUrl: 'views/Users/addUser.html',
        controller: 'UsersCtrl'
      })
         .when('/deleteUser/', {
        templateUrl: 'views/Users/deleteUser.html',
        controller: 'UsersCtrl'
      })
         .when('/projets/', {
        templateUrl: 'views/Projets/list.html',
        controller: 'ProjetsCtrl'
      })

         .when('/addUserToProjet/', {
        templateUrl: 'views/Projets/addUser.html',
        controller: 'ProjetsCtrl'
      })
         .when('/deleteUserToProject/', {
        templateUrl: 'views/Projets/deleteUser.html',
        controller: 'ProjetsCtrl'
      })
         .when('/addProject/', {
        templateUrl: 'views/Projets/addProject.html',
        controller: 'ProjetsCtrl'
      })
           .when('/deleteProject/', {
        templateUrl: 'views/Projets/deleteProject.html',
        controller: 'ProjetsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
