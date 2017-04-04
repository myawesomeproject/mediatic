(function() {
	
	'use strict';

	angular
		.module('MyApp.Adherent')
		.controller('AdherentRechercheCtrl',function($scope, $rootScope, ListeAdherentService) {
		
			$rootScope.title = "Adhérents" ;
			$scope.modeRechercheAvancee=false; //pour cacher la barre de recherche avancée à l'initialisation
			$scope.listeAdherent = undefined;			

			ListeAdherentService.getList().then(function(data) {
				var estlibre = true;
				var today = new Date();
				$scope.listeAdherent = data;				
				for (var index in $scope.listeAdherent){
					var adherent = $scope.listeAdherent[index];					
					if ((adherent.cotisation==null)||(adherent.cotisation.fin==undefined)||(adherent.cotisation.fin=="")||(adherent.cotisation.fin<today)){
						adherent.etat = 'INACTIF';					
					} else {						
						adherent.etat = 'ABONNE';
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
		    
		    $scope.colonneTri = 'nom'; // Type de tri par défault
			$scope.descending = false;  // Sens de tri par défault 
		        
		    $scope.changerTri = function(colonne) {
	    		if ($scope.colonneTri == colonne) {
	    			$scope.descending = !$scope.descending;
	    		} else {
	    			$scope.colonneTri = colonne;
	    			$scope.descending = false;
	    		}
		    };
		    

		    $scope.getObjetFiltre = function(){
		    	if($scope.modeRechercheAvancee===false){
		    		return $scope.filterRechercheBase.tout;
		    	}
		    	else {
			    	var obj = {};
			    	obj.nom = $scope.filterRechercheAvancee.nom;
			    	obj.prenom = $scope.filterRechercheAvancee.prenom;
			    	obj.email = $scope.filterRechercheAvancee.email;			    	
			    	obj.date_naissance = $scope.filterRechercheAvancee.date_naissance;
			    	obj.nombre_media = $scope.filterRechercheAvancee.nombre_media;
			    	
			    	return obj;
		    	}
		    };
		})
})();