'use strict';

angular.module('MyApp.Adherent',['ngRoute','ui.bootstrap','ui.bootstrap.typeahead'])

	.controller('AdherentVisualisationCtrl',function($rootScope,$scope,UrlService,AdherentService,ListeMediaService,$http,$routeParams,dateFilter) {
		
		$rootScope.title = "Visualisation adhérent";
		 var _selected;
		 var date_depart = undefined;

		  $scope.selected = undefined;
		
		var url = UrlService.getAdherentAccessionUrl();
		var membre=[];

		$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
			
			membre = reponse.data;
			$scope.membre = reponse.data;
console.log(membre);
			
		});
		
		ListeMediaService.getList().then(function(data) {
			
			$scope.listeMedia = data;
			
		});
		
		
		$scope.update = function(data) {
			membre.nom = data.nom
			membre.prenom = data.prenom
			membre.dateNaissance = data.dateNaissance;
			membre.adresse =data.adresse;
			//membre.adresse.ligne2 =data.adresse.ligne2;
			membre.email = data.email;
			membre.codePostal = data.codePostal; 
			membre.ville = data.ville;
			//membre.date_naissance = data.date_naissance;
			if(membre.cotisation.dateCotisation == null || membre.cotisation.dateCotisation == undefined){
				membre.cotisation = null;
			}
			else {
				membre.cotisation.dateCotisation = dateFilter(data.cotisation.dateCotisation, 'yyyy-MM-dd');
				membre.cotisation.montantCotisation = data.cotisation.montantCotisation;
			}																	// ajouté
																						// 1
			console.log(membre);																		// ans

			
	        return AdherentService.update(membre);
	    };
		
		$scope.emprunte = function(id_adherent,id_media,date_depart){
//			var date_departt = dateFilter(date_depart,'yyyy-MM-dd');
			return AdherentService.emprunte(id_adherent,id_media,date_depart);
			
			
		};
	    

	      $scope.modelOptions = {
	        debounce: {
	          default: 500,
	          blur: 250
	        },
	        getterSetter: true
	      };
		
		
	});