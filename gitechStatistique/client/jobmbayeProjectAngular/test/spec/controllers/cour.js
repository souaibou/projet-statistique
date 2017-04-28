'use strict';

describe('Controller: CourCtrl', function () {

  // load the controller's module
  beforeEach(module('jobmbayeProjectAngularApp'));

  var CourCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourCtrl = $controller('CourCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CourCtrl.awesomeThings.length).toBe(3);
  });
});
