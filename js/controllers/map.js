angular.module('al')

.controller('MapCtrl', function($scope, $uibModalInstance, $document,$timeout) {
  $scope.showAttraction = true;
  $scope.nav = {
    heroes:false,
    warriors:false,
    horror:false
  };
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
    new Attraction("img-warrior rotate1",'warriors','Warriors','Cool description about attraction 1. (click to zoom)'),
    new Attraction("img-heroes rotate2",'heroes','Super Hero','Cool description about attraction 2. (click to zoom)'),
    new Attraction("img-horror rotate3",'horror','Horror','Cool description about attraction 3. (click to zoom)')
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

  $scope.mapItems = [
    {
      bottom:'45%',
      left:'30%',
      state:'warriors',
      title:'Event 1 Title',
      description:'Event 1 Description'
    },
    {
      bottom:'50%',
      left:'80%',
      state:'warriors',
      title:'Event 2 Title',
      description:'Event 2 Description'
    },
    {
      bottom:'85%',
      left:'40%',
      state:'warriors',
      title:'Event 3 Title',
      description:'Event 3 Description'
    },

    {
      bottom:'75%',
      left:'65%',
      state:'heroes',
      title:'Event 4 Title',
      description:'Event 4 Description'
    },
    {
      bottom:'30%',
      left:'20%',
      state:'heroes',
      title:'Event 5 Title',
      description:'Event 5 Description'
    },
    {
      bottom:'80%',
      left:'5%',
      state:'heroes',
      title:'Event 6 Title',
      description:'Event 6 Description'
    },
    {
      bottom:'45%',
      left:'85%',
      state:'heroes',
      title:'Event 7 Title',
      description:'Event 7 Description'
    },

    {
      bottom:'41%',
      left:'89%',
      state:'horror',
      title:'Event 8 Title',
      description:'Event 8 Description'
    },
    {
      bottom:'23%',
      left:'50%',
      state:'horror',
      title:'Event 9 Title',
      description:'Event 9 Description'
    },
    {
      bottom:'65%',
      left:'75%',
      state:'horror',
      title:'Event 10 Title',
      description:'Event 10 Description'
    },
    {
      bottom:'80%',
      left:'30%',
      state:'horror',
      title:'Event 11 Title',
      description:'Event 11 Description',
      description:'Event 11 Description'
    }
  ];
  $scope.goto = function(from, to){
    $scope.currentState = to;
    if(from=='initial'){
      $scope.showAttraction = false;
      $timeout(function(){
        $scope.nav[to] = true;
      },1000);
    }
    else if(to=='initial'){
      $scope.nav[from] = false;
      $timeout(function(){
        $scope.showAttraction = true;
      },1000);
    }
    else {
      $scope.nav[from] = false;
      $timeout(function(){
        $scope.nav[to] = true;
      },2000);
    }
    $scope.stateClass= 'from-'+from+'-to-'+to;
  };

  $document.ready(function () {
    $("[data-toggle='popover']").popover();
    $("[data-toggle='tooltip']").tooltip();
    resize();
  });

  $(window).resize(resize);
  function resize(){
    var widthRatio = $("#map-modal-body").width()/3600;
    var heightRatio = $("#map-modal-body").height()/2076;
    $(".img-warrior").css({width:(widthRatio * 1805)+'px',height:(heightRatio * 1037)+'px',left:(widthRatio * 58)+'px',bottom:(heightRatio * 106)+'px'});
    $(".img-heroes").css({width:(widthRatio * 1797)+'px',height:(heightRatio * 1030)+'px',left:(widthRatio * 975)+'px',bottom:(heightRatio * 1046)+'px'});
    $(".img-horror").css({width:(widthRatio * 1805)+'px',height:(heightRatio * 1037)+'px',left:(widthRatio * 1805)+'px',bottom:(heightRatio * 0)+'px'});
  };
});
