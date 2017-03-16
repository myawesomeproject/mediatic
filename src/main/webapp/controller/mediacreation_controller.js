(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaCreationCtrl',function($rootScope,$scope,MediaService) {
		
			$rootScope.title = "Création média" ;
			
			$scope.data ={};
			
			$scope.ajoute = function(data) {
				console.log(data);
				MediaService.add(data);
				};
				
			$scope.remove = function(){
			    $scope.data ={};
			}
		});

})();