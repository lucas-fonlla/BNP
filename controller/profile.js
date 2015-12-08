app.controller('profileController', function($scope, $timeout, Notification)
{

	$scope.user = userTest;
	$scope.download = false;
	console.log("user name", $scope.user.username);

	$scope.state = '';
	$scope.type = "warning";

	$scope.updateProfile = function(user)
	{
		userTest = angular.copy(user);
		console.log("user", $scope.user);
		Notification.success("Changements sauvegardés !");
	};

	$scope.reset = function() {
        $scope.user = angular.copy(userTest);
      };

    $scope.reset();

	$scope.uploadFile = function()
	{
		$scope.counter = 0;
		$scope.onTimeout = function()
		{
			$scope.counter++;
			mytimeout = $timeout($scope.onTimeout, 70);
			if ($scope.counter == 100)
			{
				$scope.state = "Télechargement terminé !";
				$scope.type = "success";
				Notification.success('Téléchargement terminé !');
			}
		}
		var mytimeout = $timeout($scope.onTimeout, 70);
	}

	$scope.updateFamily = function(key, elem)
	{
		userTest.family[key] = elem;
		Notification.success('Changements sauvegardés !');
	}

	$scope.deleteFamily = function(key)
	{
		console.log(userTest.family);
		if (confirm('Voulez-vous vraiment supprimer cet ayant-droit ?'))
			delete userTest.family[key];
	}
});