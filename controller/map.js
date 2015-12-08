app.controller('mapController', function($scope)
{
	$scope.map = {
		center:
		{
			latitude: 48.832503,
			longitude: 2.330051
		},
		zoom: 15
	};
	$scope.marker = {
	    id: 0,
	    coords: {
	        latitude: 48.832503,
	        longitude: 2.330051
	    },
	    map: $scope.map
	};
})