angular.module('al')

.controller('MapCtrl', function($scope, $uibModalInstance, $document) {
  $scope.currentState = 'zoom-initial';
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  };
  function MapItem(bottom,right,imgClass,onClick,title,description){
    this.bottom=bottom;
    this.right=right;
    this.imgClass=imgClass;
    this.onClick=onClick;
    this.title=title;
    this.description=description;
  }
  $scope.mapItems = [
    new MapItem('28.5%','70.5%',"img-map-item",'zoomWarriors','Warriors','Cool description about attraction 1. (click to zoom)'),
    new MapItem('74%','44.5%',"img-map-item",'zoomSuperHero','Super Hero','Cool description about attraction 2. (click to zoom)'),
    new MapItem('28%','20.5%',"img-map-item",'zoomHorror','Horror','Cool description about attraction 3. (click to zoom)')
  ];

  $scope.zoomSuperHero = function(){
    $scope.currentState = 'zoom-in-super-hero';
  };

  $scope.zoomWarriors = function(){
    $scope.currentState = 'zoom-in-warriors';
  };

  $scope.zoomHorror = function(){
    $scope.currentState = 'zoom-in-horror';
  };

  $document.ready(function () {
    $("[data-toggle='popover']").popover();
  });
});