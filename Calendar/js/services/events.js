app.factory('events',['$http',function($http){
    return $http.get('http://localhost:8080/js/events.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
