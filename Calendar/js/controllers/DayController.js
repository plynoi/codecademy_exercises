app.controller('DayController', ['$scope','events', function($scope,events) {
	events.success(function(data){
		//console.log(JSON.stringify(data));
    $scope.day = data;
  });
}]);
