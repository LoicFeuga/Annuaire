'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
 angular.module('pooIhmExemplesApp')
 .controller('ProjetsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
  .success(function(data) {
    $scope.projets = data.data;
//            alert(JSON.stringify(data, null, 4));

         });

  $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
  .success(function(data) {
    $scope.users = data.data;
           // alert(JSON.stringify(data, null, 4));

         });

  if($routeParams.userId) {
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.userId)
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentProjet = data.data;
      }
    });
  } 

  $scope.deleteUserToProjet = function(){
    var user = $("#select-users").val();
    var projet = $("#select-projets").val();
    $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+projet+'/Users/'+user)
    .success(function(data) {
      if (data.status == "success") {
        alert('Supprimé');

      }else{
        alert('User n\'est pas dans ce projet');
      }
    });
  }


  //addProjet
  $scope.addProjet = function(){
    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/','{"title":"'+$scope.addTitre+'","description":"'+$scope.addDescription+'","year":"'+$scope.addAnnee+'"}')
    .success(function(data) {
      if (data.status == "success") {
        alert('Ajouté');

      }
    });
  }

    //deleteProjet
  $scope.deleteProjet = function(){
    var projet = $("#select-projets").val();
        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+projet)
        .success(function(data) {
          if (data.status == "success") {
            alert('Supprimé');

          }
        });
    
  }


  //addUserToProjet
  $scope.addUserToProjet = function(){
    var user = $("#select-users").val();
    var projet = $("#select-projets").val();

    $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projet +'/Users/'+user)
    .success(function(data) {
      if (data.status == "success") {
        $scope.currentProjet = data.data;
      }
    });

  }
}]);