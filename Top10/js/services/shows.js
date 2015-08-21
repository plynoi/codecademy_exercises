app.factory('shows',['$http',function($http){
  return $http.get('http://localhost:8080/js/services/shows.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);