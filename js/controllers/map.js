angular.module('al')

.controller('MapCtrl', function($scope, $uibModalInstance, $document) {
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  };
  function MapItem(bottom,right,imgClass,title,description){
    this.bottom=bottom;
    this.right=right;
    this.imgClass=imgClass;
    this.title=title;
    this.description=description;
  }
  $scope.mapItems = [
    new MapItem(100,10,"img-map-item",'Attraction 1','Cool description about attraction 1'),
    new MapItem(10,159,"img-map-item",'Attraction 2','Cool description about attraction 2'),
    new MapItem(58,60,"img-map-item",'Attraction 3','Cool description about attraction 3')
  ];
    $scope.mapItemsTo = [
    new MapItem(150,60,"img-map-item",'Attraction 1','Cool description about attraction 1'),
    new MapItem(60,209,"img-map-item",'Attraction 2','Cool description about attraction 2'),
    new MapItem(108,110,"img-map-item",'Attraction 3','Cool description about attraction 3')
  ];
  $scope.mapItemsFrom = [
    new MapItem(200,110,"img-map-item",'Attraction 1','Cool description about attraction 1'),
    new MapItem(110,259,"img-map-item",'Attraction 2','Cool description about attraction 2'),
    new MapItem(158,160,"img-map-item",'Attraction 3','Cool description about attraction 3')
  ];
  $document.ready(function () {
    $("[data-toggle='popover']").popover();
  });
});