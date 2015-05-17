'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
 angular.module('pooIhmExemplesApp')
 .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
  .success(function(data) {
    $scope.users = data.data;
  });

  if($routeParams.userId) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentUser = data.data;
      }
    });
  }

  $scope.searchProjetsById = function(){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.id+'/Projects')
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentUser = data.data;

        $scope.projetS = data.data;

        /*
        alert(JSON.stringify(data, null, 4));
        alert(data.data.id);*/
      }
    });
  }

  $scope.searchProjetsByName = function(){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users?name='+$scope.searchNom)
    .success(function(data) {
      if (data.status == "success") {

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + data.data[0].id+'/Projects')
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentUser = data.data;

            $scope.projetS = data.data;

          }
        });

      }
    });

  }
  $scope.deleteUserByName = function(){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users?name='+$scope.deleteNom)
    .success(function(data) {
      if (data.status == "success") {

        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+data.data[0].id)
        .success(function(data) {
          if (data.status == "success") {
            alert('Supprimé');

          }
        });
      }
    });

  }

    $scope.deleteUserBySurname = function(){

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users?surname='+$scope.deletePrenom)
    .success(function(data) {
      if (data.status == "success") {

        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+data.data[0].id)
        .success(function(data) {
          if (data.status == "success") {
            alert('Supprimé');
          }
        });
      }
    });

  }


  $scope.addUser = function(){
    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/','{"name":"'+$scope.addNom+'","surname":"'+$scope.addPrenom+'","website":"'+$scope.addWebsite+'","email":"'+$scope.addEmail+'"}')
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentUser = data.data;
        $scope.usersS = data.data;

      }
    });
  }

  $scope.searchUserByName = function(){
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users?name='+$scope.searchNom)
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentUser = data.data;
        $scope.usersS = data.data;


      }
    });
  }

  $scope.searchUserBySurname = function(){
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users?surname='+$scope.searchPrenom)
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentUser = data.data;
        $scope.usersS = data.data;


      }
    });
  }
}]);
