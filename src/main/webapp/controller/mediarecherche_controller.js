(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService, MediaRechercheService) {
		
			$rootScope.title = "Liste des médias" ;
			
			$scope.recherche = MediaRechercheService;
			$scope.avancee=false;
			
			$scope.listeMedia = undefined;

			ListeMediaService.getList().then(function(data) {
				
				$scope.listeMedia = data;
				
			});	
		 
		});

})();