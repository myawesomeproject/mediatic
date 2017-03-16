(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaCreationCtrl',function($rootScope,$scope,MediaService,$location) {
		
			$rootScope.title = "Création média" ;
			
			$scope.data ={};
			
			
			$scope.ajoute = function(data) {
				console.log(data);
				MediaService.add(data);
				$location.path('/mediarecherche');
				};
				
			$scope.remove = function(){
			    $scope.data ={};
			    $location.path('/mediarecherche');
			}
		});

})();