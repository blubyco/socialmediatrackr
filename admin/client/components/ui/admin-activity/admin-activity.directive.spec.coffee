'use strict'

describe 'Directive: adminActivity', ->

  # load the directive's module and view
  beforeEach module 'meanApp'
  beforeEach module 'components/admin-activity/admin-activity.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<admin-activity></admin-activity>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the adminActivity directive'

