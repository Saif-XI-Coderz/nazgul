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

  /* Contact modal */
  var contact = {}

  contact.open = function() {
    map.instance = $uibModal.open({
      ariaLabelledBy: 'contact-modal-title',
      ariaDescribedBy: 'contact-modal-body',
      templateUrl: 'template/contact.html',
      controller: 'ContactCtrl',
      size: 'lg'
    })
  }

  /* About modal */
  var about = {}

  about.open = function() {
    map.instance = $uibModal.open({
      ariaLabelledBy: 'about-modal-title',
      ariaDescribedBy: 'about-modal-body',
      templateUrl: 'template/about.html',
      controller: 'AboutCtrl',
      size: 'lg'
    })
  }

  /* Mashup */
  var mashup = {}

  mashup.state = 'collapsed';
  mashup.music = 'music/homepage.mp3';

  mashup.focusSection = function(sectionNumber) {
    mashup.state = 'expanded-' + sectionNumber;

    if (sectionNumber == 1)
      mashup.music = 'music/horror.mp3';
    else if (sectionNumber == 2)
      mashup.music = 'music/heroes.mp3';
    else
      mashup.music = 'music/warriors.mp3';
  }

  mashup.focusNone = function(e) {
    e.stopPropagation();

    mashup.state = 'collapsed';
    mashup.music = '';
  }

  $scope.order = order;
  $scope.map = map;
  $scope.contact = contact;
  $scope.about = about;
  $scope.mashup = mashup;
})