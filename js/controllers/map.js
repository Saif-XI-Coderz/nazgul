angular.module('al')

.controller('MapCtrl', function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
})