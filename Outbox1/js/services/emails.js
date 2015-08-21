app.factory('emails',['$http',function($http){
  return $http.get('http://localhost:8080/js/emails.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
