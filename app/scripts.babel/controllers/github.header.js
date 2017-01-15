const app = angular.module('GitHubIssueOrganizer', [])
app.controller('GitHubHeaderController', ($scope) => {
  const queryFor = (type) => {
    // TODO: hard code here
    const user = 'potsbo'
    const org = 'wantedly'
    const q = `q=is%3Aopen+is%3A${type}+author%3A${user}+org%3A${org}`
    const utf8 = 'utf8=✓'
    return `?${utf8}&${q}`
  }

  $scope.query = {
    pulls: queryFor('pr'),
    issues: queryFor('issue')
  }
})

app.directive('contextButton', [ '$sce', ($sce) => {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('templates/github.header/button.html'))
  }
}])
