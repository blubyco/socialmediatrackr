'use strict'

angular.module 'meanApp'
.controller 'NavbarCtrl', ($scope, $location, Auth) ->
  $scope.isCollapsed = true
  $scope.isLoggedIn = Auth.isLoggedIn
  $scope.getCurrentUser = Auth.getCurrentUser

  $scope.logout = ->
    Auth.logout()
    $location.path '/login'

  $scope.isActive = (route) ->
    route is $location.path()

  $scope.isInside = (route) ->
    re = new RegExp('^' + route)
    $location.path().match(re)
    