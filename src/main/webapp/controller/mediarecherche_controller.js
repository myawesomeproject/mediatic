(function() {
	
	'use strict';

	angular
		.module('MyApp.Media')
		.controller('MediaRechercheCtrl',function($scope, $rootScope, ListeMediaService) {
		
			$rootScope.title = "Médias";		
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
		    
		    $scope.modelRechercheBase = {};
		    $scope.modelRechercheAvancee = {};
		    $scope.filterRechercheAvancee = {};
		    $scope.filterRechercheBase = '';
	    
		    $scope.lancerRechercheAvancee = function(){		    	
		    	$scope.filterRechercheAvancee = angular.copy($scope.modelRechercheAvancee);
		    }
		    
		    $scope.lancerRechercheBase = function(){
		    	$scope.modeRechercheAvancee = false;
		    	$scope.filterRechercheBase = angular.copy($scope.modelRechercheBase);
		    }

		    $scope.getObjetFiltre = function(){
		    	if($scope.modeRechercheAvancee===false){
		    		return $scope.filterRechercheBase.tout;
		    	}
		    	else {
			    	var obj = {};
			    	obj.titre = $scope.filterRechercheAvancee.titre;
			    	obj.auteur = $scope.filterRechercheAvancee.auteur;		    	
			    	if($scope.filterRechercheAvancee.emprunteur!==undefined){
			    		var nom = $scope.filterRechercheAvancee.emprunteur.nom;
				    	if((nom!==undefined)&&(nom!=='')){
				    		obj.emprunteur = obj.emprunteur || {};
				    		obj.emprunteur.nom = nom;
				    	}
			    	}
			    	if(($scope.filterRechercheAvancee.retour!==undefined)&&($scope.filterRechercheAvancee.retour!=='')){
//idem, pour éviter de renseigner le champ s'il n'existe pas ou est vide, comme ça la recherche n'est pas fuckée
			    		obj.retour = $scope.filterRechercheAvancee.retour;
			    	}
			    	return obj;
		    	}
		    };
		})
})();