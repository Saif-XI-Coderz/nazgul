angular.module('al')

.controller('OrderCtrl', function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
})