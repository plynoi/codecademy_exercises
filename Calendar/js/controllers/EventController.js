app.controller('EventController', ['$scope', 'events','$routeParams', function($scope, events,$routeParams) {
  events.success(function(data){
		//console.log(JSON.stringify(data));
    //console.log("$routeParams.id = " + $routeParams.id);
    $scope.event =  data.events[$routeParams.id]
    //console.log(JSON.stringify(data.events[$routeParams.id]));
  });
}]);
