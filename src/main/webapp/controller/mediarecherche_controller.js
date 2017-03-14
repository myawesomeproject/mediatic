(function() {
	
	'use strict';

	angular
		.module('MyApp.Media',['ngRoute'])
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService, MediaRechercheService) {
		
			$rootScope.title = "Liste des médias" ;
			
			$scope.recherche = MediaRechercheService;
			
			$scope.listeMedia = undefined;

			ListeMediaService.getList().then(function(data) {
				
				$scope.listeMedia = data;
				
			});
		 
		});

})();