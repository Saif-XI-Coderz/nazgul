angular.module('al')

.controller('AboutCtrl', function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
})