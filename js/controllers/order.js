angular.module('al')

.controller('OrderCtrl', function($scope, $uibModalInstance) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
  
    $scope.adults = 0;
    $scope.children = 0;
    $scope.visibleNuits = false;   

    
  $scope.calculateBilletTotal = function() {
      var count = 0;
      
      if ($scope.uni1) {
          count++;
      }
      if ($scope.uni2) {
          count++;
      }
      if ($scope.uni3) {
          count++;
      }
      
      if (!($scope.uni1) && !($scope.uni2) && !($scope.uni3)) {
          $scope.total = 0;
      }
      
      $scope.total = count * ($scope.adults * 1000 + $scope.children * 500);
      
      if ($scope.total != 0) {
          $scope.visibleCost = true;
      } else if (($scope.total == 0) || ($scope.total == '')) {
          $scope.visibleCost = false;
      }
      
  }
  
  $scope.calculateSejourTotal = function() {
      console.log($scope.nuits);
      $scope.sejourTotal = 0;
      if ($scope.nuits != 0 && $scope.nuits != null) {
          $scope.visibleSejourTotal = true;
          $scope.sejourTotal = $scope.nuits * 1000;
      } else {
          $scope.visibleSejourTotal = false;
           $scope.sejourTotal = 0;
      }
  }
  
  $scope.showSejourOption = function() {
      
      if ($scope.sejour) {
          $scope.visibleNuits = true;
      } else {
          $scope.visibleNuits = false;
      }
  }
  
  $scope.submitForm = function() {
      alert("Votre réservation est confirmée. Veuillez consulter votre mail pour les détails.");
  }

  
  
})