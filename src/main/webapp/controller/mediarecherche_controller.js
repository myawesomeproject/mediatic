(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService, MediaRechercheService) {
		
			$rootScope.title = "Liste des médias" ;
			
			$scope.recherche = MediaRechercheService;
			
			$scope.modeRechercheAvancee=false; //pour cacher la barre de recherche avancée à l'initialisation
			
			$scope.listeMedia = undefined;

			ListeMediaService.getList().then(function(data) {
				var estlibre = true;
				$scope.listeMedia = data;
				for (var index in $scope.listeMedia){
					var media = $scope.listeMedia[index];
					console.log(media);
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