angular.module('al')

.controller('ContactCtrl', function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
})