(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService, MediaRechercheService) {
		
			$rootScope.title = "Liste des médias" ;
			
			$scope.recherche = MediaRechercheService;
			
			$scope.rechercheAvancee=false; //pour cacher la barre de recherche avancée à l'initialisation
			
			$scope.listeMedia = undefined;

			ListeMediaService.getList().then(function(data) {
				
				$scope.listeMedia = data;
				
			});	
		 
		});

})();