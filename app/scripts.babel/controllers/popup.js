const app = angular.module('GitHubIssueOrganizer', [])
app.controller('PopupController', ($scope) => {
  console.log('loaded')
  $scope.master = {}

  $scope.update = (user) => {
    $scope.master = angular.copy(user)
  }

  $scope.reset = () => {
    $scope.user = angular.copy($scope.master)
  }

  $scope.reset()
})
