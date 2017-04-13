'use strict';

angular.module('jobmbayeProjectAngularApp')
.directive('baSidebar', function () {
  return  {
        restrict: 'E',
        templateUrl: 'views/sideNav.html',
        replace: true,
        transclude: true,
        scope: false,
        controller:'sidenavCtrl'
    };
     //directiveDefinitionObject;
});
