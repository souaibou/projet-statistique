'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('jobmbayeProjectAngularApp')
  .controller('MainCtrl', function ($http,API_URL) {

  	$http.get(API_URL + 'anneescolaires').then(function(data){
      console.log(data);
    }, 
    function(data){
    	console.log(data);
    });
  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
