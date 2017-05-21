/**
 * Created by Sherlock on 5/21/2017.
 */
angular.module('al')

.controller('SuggestCtrl', function($scope, $uibModalInstance, $http) {
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.suggestion = "";
    $scope.listSuggestions = [];
    $scope.saveSuggestion = function () {
        $http.get("service/suggest.php?suggestion="+$scope.suggestion).then($scope.getSuggestions);
    };
    
    $scope.getSuggestions = function(){
        $http.get("service/suggest.php?getSuggestion=getSuggestion").then(
            function (response) {
                $scope.listSuggestions = response.data.map(function(ligne){
                    ligne.vote = parseInt(ligne.vote);
                    return ligne;
                });
                $scope.listSuggestions.pop();
            }
        );
    };

    $scope.like = function(suggestion){
        $http.get("service/suggest.php?like="+suggestion).then($scope.getSuggestions);
    };
    $scope.getSuggestions();

});