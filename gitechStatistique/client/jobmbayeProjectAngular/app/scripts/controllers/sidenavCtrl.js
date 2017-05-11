'use strict';

/**
 * @ngdoc function
 * @name eSchoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eSchoolApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('sidenavCtrl', function ($scope,$location) {
      
      $scope.emploi = function(){
        $location.path("/emploi");
      }
      $scope.etudiant = function(){
        $location.path("/etudiant");
      }
      $scope.personnel = function(){
        $location.path("/personnel");
      }
      $scope.cours = function(){
        $location.path("/cour");
      }
  });