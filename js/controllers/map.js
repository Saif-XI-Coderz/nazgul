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
  function Attraction(imgClass,state,anim,title,description){
    this.imgClass=imgClass;
    this.state=state;
    this.title=title;
    this.description=description;
    this.anim=anim;
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
    new Attraction("img-warrior",'warriors','rotate1','Warriors','Cool description about attraction 1. (click to zoom)'),
    new Attraction("img-heroes",'heroes','rotate2','Super Hero','Cool description about attraction 2. (click to zoom)'),
    new Attraction("img-horror",'horror','rotate3','Horror','Cool description about attraction 3. (click to zoom)')
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
      title:'Medieval Japan warriors',
      description:'Go on an adventure in Medieval Japan as a Samurai'
    },
    {
      bottom:'50%',
      left:'80%',
      state:'warriors',
      title:'Pirates of Android Land',
      description:'Hunt for the treasure of the pirates on Android Land!'
    },
    {
      bottom:'85%',
      left:'40%',
      state:'warriors',
      title:'Knights and Dragons',
      description:'Get under the skin of medieval knights and ride dragons!'
    },

    {
      bottom:'75%',
      left:'65%',
      state:'heroes',
      title:'Heaven vs. Hell',
      description:'Be immersed in the chase of demons by demon hunters'
    },
    {
      bottom:'30%',
      left:'20%',
      state:'heroes',
      title:'Code AL',
      description:'Follow secret agents on their adventure of solving crimes on Android Land'
    },
    {
      bottom:'80%',
      left:'5%',
      state:'heroes',
      title:'Miniature World',
      description:'Explore the world from the eyes of ant-size androids'
    },
    {
      bottom:'45%',
      left:'85%',
      state:'heroes',
      title:'Meta humans',
      description:'Experience what it is to be a superhuman'
    },

    {
      bottom:'41%',
      left:'89%',
      state:'horror',
      title:'Full Moon',
      description:'Run through the forest to safety from the werewolves'
    },
    {
      bottom:'23%',
      left:'50%',
      state:'horror',
      title:'Zombie Apocalypse',
      description:'You will be chased by a horde of zombies and you will have to survive and kill, or die'
    },
    {
      bottom:'65%',
      left:'75%',
      state:'horror',
      title:'Blood Lust',
      description:'Experience the lifestyle of vampires in the mansions'
    },
    {
      bottom:'80%',
      left:'30%',
      state:'horror',
      title:'Evil Spirit',
      description:'Get the scare of your life in the rollercoaster'
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
  });
  $timeout(resize,1000);
  $(window).resize(resize);
  function resize(){
    var widthRatio = $("#map-modal-body").width()/3600;
    var heightRatio = $("#map-modal-body").height()/2076;
    $(".img-warrior").css({width:(widthRatio * 1805)+'px',height:(heightRatio * 1037)+'px',left:(widthRatio * 58)+'px',bottom:(heightRatio * 106)+'px'});
    $(".img-heroes").css({width:(widthRatio * 1797)+'px',height:(heightRatio * 1030)+'px',left:(widthRatio * 975)+'px',bottom:(heightRatio * 1046)+'px'});
    $(".img-horror").css({width:(widthRatio * 1805)+'px',height:(heightRatio * 1037)+'px',left:(widthRatio * 1805)+'px',bottom:(heightRatio * 0)+'px'});
  };
});
