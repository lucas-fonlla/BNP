//modal
app.controller('modalController', function ($scope, $uibModal, $log, $rootScope) {

  $scope.active = {
    home: "active", 
    profile: ""
  }

  $scope.animationsEnabled = true;
  $scope.isConnected = false;

  $scope.open = function (size, template) {

    $scope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: template,
      controller: 'modalInstanceController',
      size: size
    });

  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $rootScope.$on("connected", function(event, data)
  {
    $scope.isConnected = data.isConnected;
  }) 

  
});

app.controller('modalInstanceController', function ($scope, $uibModalInstance, $rootScope) {

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

 //login
  $scope.login = function()
  {
    console.log("form submitted");
    user.username = this.user;
    console.log("user", user.username);
    this.ok();
  };

  $rootScope.$broadcast("connected", {isConnected : true});

  

});
