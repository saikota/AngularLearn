/**
 * Created by Sai on 5/3/15.
 */
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLearnApp'));

  var MyMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyMainCtrl = $controller('MyMainCtrl', {
      $scope: scope
    });
  }));



  it('should have items on page Load', function () {
    expect(MyMainCtrl.notes).toEqual([
      {id: 1, label: 'First Note', done: false,asignee:'sai'},
      {id: 2, label: 'Second Note', done: false,asignee:'ram'},
      {id: 3, label: 'Done Note', done: true},
      {id: 4, label: 'Last Note', done: false}
    ]);
  });


});
