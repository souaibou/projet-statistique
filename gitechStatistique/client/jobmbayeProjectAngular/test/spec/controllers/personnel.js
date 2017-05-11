'use strict';

describe('Controller: PersonnelCtrl', function () {

  // load the controller's module
  beforeEach(module('jobmbayeProjectAngularApp'));

  var PersonnelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonnelCtrl = $controller('PersonnelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonnelCtrl.awesomeThings.length).toBe(3);
  });
});
