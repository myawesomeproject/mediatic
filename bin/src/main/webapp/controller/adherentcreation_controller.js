(function() {
	
	'use strict';

	angular
		.module('MyApp.Adherent')
		.controller('AdherentCreationCtrl',function($rootScope,AdherentService,$scope,dateFilter) {
		
			$rootScope.title = "Création adhérents" ;
			
			/*var datatest = {
					"nom": "toto",
				    "prenom": "toto",
				    "date_naissance": "1992-02-28",
				    "email": "maitre@troy.com",
				    "adresse": {
				      "ligne1": "3eme maison",
				      "ligne2": "chambre du père",
				      "codepostal": "3-333",
				      "ville": "Eckmul"
				    },
				    "cotisation": {
				      "debut": "2017-01-01",
				      "fin": "2018-01-01",
				      "montant": 20
				    },
				    "age": 23,
				    "emprunt": [],
				    "nombre_media": 0
				};*/
			$scope.data ={};
			
			
			
			
			
			$scope.ajoute = function(data) {
				
				data.adresse.ligne2 = " ";
				data.emprunt = [];
				data.nombre_media = 0;
				data.age = 25; // faire une function age;
				data.date_naissance = dateFilter(data.date_naissance, 'yyyy-MM-dd');
				data.cotisation.debut = dateFilter(data.cotisation.debut, 'yyyy-MM-dd');
				data.cotisation.fin = dateFilter(data.cotisation.debut, 'yyyy-MM-dd'); // function ajouté 1 ans
				
				console.log(data);
				
		        return AdherentService.add(data);
		    };
		    
		    $scope.remove = function(){
		    	$scope.data ={};
		    }
						
						
				
		});

})();