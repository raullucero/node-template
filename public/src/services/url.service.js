angular.module('wizeline')
  .factory('UrlService', function($q, $http) {

    const UrlService = function () {

    };

    UrlService.prototype.getList = getList;
    UrlService.prototype.postUrl = postUrl;
    UrlService.prototype.getUrl = getUrl;

    function getList() {
      const defered = $q.defer();
      console.log('getting list')
      $http.get('api/urls')
        .then((res) => {
          defered.resolve(res.data);
        }, (err) => {
          defered.reject(err);
        });

      return defered.promise;

    }

    function getUrl(short) {
      const defered = $q.defer();

      $http.get('api/urls/' + short)
        .then((res) => {
          defered.resolve(res.data);
        }, (err) => {
          defered.reject(err);
        });

      return defered.promise;

    }

    function postUrl(url, user) {
      const defered = $q.defer();
      const content = {
        user: user,
        original_url: url
      }

      var req = {
        method: 'POST',
        url: '/api/urls',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: content
      };

      $http(req)
        .then((res) => {
          defered.resolve(res.data);
        }, (err) => {
          defered.reject(err);
        });

      return defered.promise;

    }


    return new UrlService();

  });
