'use strict';

angular.module('MyApp.Adherent',['ngRoute'])

	.controller('AdherentVisualisationCtrl',function($rootScope,$scope,UrlService,AdherentService,$http,$routeParams,dateFilter) {
		
		$rootScope.title = "Visualisation adhérent";
		
		
		var url = UrlService.getAdherentAccessionUrl();
		var membre=[];
		$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
			
			membre = reponse.data;
			$scope.membre = reponse.data;
//			$scope.emprunt ={};
			
		});
		
		$scope.update = function(data) {
			membre.nom = data.nom
			membre.prenom = data.prenom
			membre.date_naissance = data.date_naissance;
			membre.adresse.ligne1 =data.adresse.ligne2;
			membre.adresse.ligne2 =data.adresse.ligne2;
			membre.email = data.email;
			membre.code_postal = data.code_postal; 
			membre.ville = data.ville;
			membre.date_naissance = data.date_naissance;
			membre.cotisation.debut = dateFilter(data.cotisation.debut, 'yyyy-MM-dd');
			membre.cotisation.fin = dateFilter(data.cotisation.debut, 'yyyy-MM-dd'); // function ajouté 1 ans
			membre.cotisation.montant = data.cotisation.montant;

			
	        return AdherentService.update(membre);
	    };
		
		
		
		
		
	});