'use strict'

describe 'Directive: uploader', ->

  # load the directive's module and view
  beforeEach module 'meanApp'
  beforeEach module 'components/ui/uploader/uploader.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<uploader></uploader>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the uploader directive'

