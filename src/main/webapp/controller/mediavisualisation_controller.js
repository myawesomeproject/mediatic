(function() {
	
	'use strict';

	angular
		.module('MyApp.Media',['ngRoute'])
		.controller('MediaVisualisationCtrl',function($scope, $rootScope, catalogService, PanierService, rechercheService) {
		
			$rootScope.title = "Visualisation du media" ;
			
			$scope.recherche = rechercheService;
			
			$scope.catalogue = undefined;

			catalogService.getList().then(function(data) {
				
				$scope.catalogue = data;
				
			});
		 
		});

})();