const app = angular.module('GitHubIssueOrganizer', [])
app.controller('GitHubHeaderController', ($scope) => {
  const queryFor = (type) => {
    const username = document
      .querySelector('head meta[name=user-login]')
      .getAttribute('content')
    // TODO: hard code here
    const org = 'wantedly'
    const q = `q=is%3Aopen+is%3A${type}+author%3A${username}+org%3A${org}`
    const utf8 = 'utf8=✓'
    return `?${utf8}&${q}`
  }

  $scope.query = {
    pulls: queryFor('pr'),
    issues: queryFor('issue')
  }
})
