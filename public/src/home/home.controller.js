angular.module('wizeline')
.controller('HomeController', function($scope, UrlService) {

  $scope.list = [];
  $scope.url = '';

  $scope.saveUrl = saveUrl;

  
  UrlService.getList()
    .then((res) => {
      console.log(res);
      $scope.list = res;
    }
  );


  function saveUrl() {
    if(!$scope.url) {
      return;
    }

    UrlService.postUrl($scope.url, 'usuario')
        .then((res) => {
          console.log(res);
          $scope.url = '';
          $scope.list.push(res);
        }
      );

  }

});