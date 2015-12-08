app.controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'News 1',
    'News 2',
    'News 3'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});