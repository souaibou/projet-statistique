'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('MainCtrl', function ($scope,$http,API_URL) {
    $scope.nbrDemandeEmplois = 0;
    $scope.nbrPersonnel = 0;
    $scope.nbrEtudiant = 0;
    $scope.nbrCour = 0;
  	$http.get(API_URL + 'compteemplois').then(function(data){
      $scope.nbrDemandeEmplois = data.data.length;
      console.log($scope.nbrDemandeEmplois);
    }, 
    function(data){
    	console.log(data.data.length);
    });

    $http.get(API_URL + 'personnels').then(function(data){
      $scope.nbrPersonnel = data.data.length;
      console.log($scope.nbrPersonnel);
    }, 
    function(data){
    	console.log(data.data.length);
    });

    $http.get(API_URL + 'etudiants').then(function(data){
      $scope.nbrEtudiant  = data.data.length;
      console.log($scope.nbrEtudiant );
    }, 
    function(data){
    	console.log(data.data.length);
    });
    
    $http.get(API_URL + 'cours').then(function(data){
      $scope.nbrCour  = data.data.length;
      console.log($scope.nbrCour );
    }, 
    function(data){
    	console.log(data.data.length);
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
