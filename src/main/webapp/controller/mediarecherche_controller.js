(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService, MediaRechercheService) {
		
			$rootScope.title = "Liste des médias" ;			
			$scope.recherche = MediaRechercheService; //inutile atm			
			$scope.modeRechercheAvancee=false; //pour cacher la barre de recherche avancée à l'initialisation			
			$scope.listeMedia = undefined;
			
			$scope.tdTri = 'titre'; // Type de tri par défault
			$scope.triInverse = false;  // Sens de tri par défault
			
			ListeMediaService.getList().then(function(data) {
				var estlibre = true;
				$scope.listeMedia = data;
				for (var index in $scope.listeMedia){
					var media = $scope.listeMedia[index];					
					if (media.emprunteur!==undefined){
						media.etat = 'PRETE';
					} else {
						media.etat = 'LIBRE';
					}
				}				
			});		
	    
		    $scope.lancerRechercheAvancee = function(){		    	
		    	$scope.filterRechercheAvancee = angular.copy($scope.modelRechercheAvancee);
		    }
		 
		});

})();