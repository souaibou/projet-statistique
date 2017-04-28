'use strict';

/**
 * @ngdoc overview
 * @name jobmbayeProjectAngularApp
 * @description
 * # jobmbayeProjectAngularApp
 *
 * Main module of the application.
 */
var app=angular
  .module('jobmbayeProjectAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/emploi', {
        templateUrl: 'views/emploi.html',
        controller: 'EmploiCtrl',
        controllerAs: 'emploi'
      })
      .when('/etudiant', {
        templateUrl: 'views/etudiant.html',
        controller: 'EtudiantCtrl',
        controllerAs: 'etudiant'
      })
      .when('/cour', {
        templateUrl: 'views/cour.html',
        controller: 'CourCtrl',
        controllerAs: 'cour'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('API_URL', 'http://localhost:3000/api/')
    .value('SERVER_URL' , 'http://localhost:3000');
