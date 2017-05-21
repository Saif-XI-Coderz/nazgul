angular.module('al')

.controller('MapCtrl', function($scope, $uibModalInstance, $document) {
  $scope.currentState = 'initial';
  $scope.stateClass = 'zoom-initial';
  $scope.close = function() {
    $uibModalInstance.dismiss('cancel');
  };
  function Attraction(imgClass,state,title,description){
    this.imgClass=imgClass;
    this.state=state;
    this.title=title;
    this.description=description;
  }

  function Navigation(from,to,label,cssClass,bottom,left) {
    this.from = from;
    this.to = to;
    this.label = label;
    this.cssClass=cssClass;
    this.bottom=bottom;
    this.left=left;
  }
  
  $scope.attractions = [
    new Attraction("img-warrior",'warriors','Warriors','Cool description about attraction 1. (click to zoom)'),
    new Attraction("img-heroes",'heroes','Super Hero','Cool description about attraction 2. (click to zoom)'),
    new Attraction("img-horror",'horror','Horror','Cool description about attraction 3. (click to zoom)')
  ];

  $scope.navigations = [
    new Navigation('horror','initial', 'Zoom out', 'fa-arrow-up','92%','50%'),
    new Navigation('horror','heroes', 'Go to super heroes', 'fa-arrow-left fa-rotate-45','93%','0%'),
    new Navigation('horror','warriors', 'Go to warriors', 'fa-arrow-left','1%','0.1%'),

    new Navigation('heroes','initial','Zoom out', 'fa-arrow-up','92%','50%'),
    new Navigation('heroes','horror', 'Go to horror', 'fa-arrow-right fa-rotate-45','0%','96%'),
    new Navigation('heroes','warriors', 'Go to warriors', 'fa-arrow-down fa-rotate-45','0%','0%'),

    new Navigation('warriors','initial', 'Zoom out', 'fa-arrow-up','92%','50%'),
    new Navigation('warriors','horror', 'Go to horror', 'fa-arrow-right','0%','96%'),
    new Navigation('warriors','heroes', 'Go to super heroes', 'fa-arrow-up fa-rotate-45','93%','96%')
  ];

  $scope.goto = function(from, to){
    $scope.currentState = to;
    console.info($scope.stateClass);
    $scope.stateClass= 'from-'+from+'-to-'+to;
  };

  $document.ready(function () {
    $("[data-toggle='popover']").popover();
    $("[data-toggle='tooltip']").tooltip();
  });
});