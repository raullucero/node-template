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
        templateUrl: 'src/home/home.html',
        controller: 'HomeController'
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