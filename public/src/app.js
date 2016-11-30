angular.module('wizeline', ['ui.router'])
  .run(() => {
    // console.log('running');
  })
  .config((
    $stateProvider,
    $urlRouterProvider
    ) => {

    $stateProvider
      .state('home', {
        url: '/',
        template: '<div>{{message}}</div>',
        controller: function($scope) {
          $scope.message = 'Hello from home route';
        }
      })
      .state('error', {
        url: '/error',
        template: '<div>{{message}}</div>',
        controller: function($scope) {
          $scope.message = 'Hello from error route';
        }
      }
    );

    $urlRouterProvider.otherwise(($injector, $location) => {
      if(!$location.path()) {
        return '/'
      };
      return '/error';
    });

  }
);