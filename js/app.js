angular.module('al', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])

.controller('MainCtrl', function($scope, $document, $uibModal) {
  /* Order modal */
	var order = {}

  order.open = function() {
    order.instance = $uibModal.open({
      ariaLabelledBy: 'order-modal-title',
      ariaDescribedBy: 'order-modal-body',
      templateUrl: 'template/order.html',
      controller: 'OrderCtrl',
      size: 'lg'
    })
  }

  /* Map modal */
  var map = {}

  map.open = function() {
    map.instance = $uibModal.open({
      ariaLabelledBy: 'map-modal-title',
      ariaDescribedBy: 'map-modal-body',
      templateUrl: 'template/map.html',
      controller: 'MapCtrl',
      size: 'lg'
    })
  }

  $scope.order = order;
  $scope.map = map;
})

.run(function() {
	console.log('hello world');
})