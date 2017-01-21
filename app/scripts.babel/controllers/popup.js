const app = angular.module('GitHubIssueOrganizerPopup', [])
app.controller('PopupController', ($scope) => {

  const defaults = {
    master: [],
    context: {
      orgs: [{}]
    }
  }

  $scope.orgOptions = {
    available: [
      { id: 'or', name: 'or'},
      { id: 'minus', name: 'excluding'},
    ],
  }

  $scope.save = (context) => {
    $scope.master.push(angular.copy(context))
    $scope.reset()
  }

  $scope.reset = () => {
    $scope.context = angular.copy(defaults.context)
  }

  $scope.reset()

  $scope.master = defaults.master
})
