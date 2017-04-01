(function() {
	
	'use strict';

	angular
		.module('MyApp.Adherent')
		.controller('AdherentCreationCtrl',function($rootScope,AdherentService,$scope,dateFilter,$location) {
		
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
			$scope.data ={	};
			
			
			
			
			
			$scope.ajoute = function(data) {
				
				//data.adresse.ligne2 = " ";
				data.emprunts = null;
				//data.nombre_media = 0;
				data.dateNaissance = dateFilter(data.dateNaissance, 'yyyy-MM-dd');
				
				// data.age = calculAge(data.dateNaissance); // faire une function age;

				
				/*if (data.cotisation.datecotisation != undefined || data.cotisation.datecotisation != "" ){
					
					data.cotisation.datecotisation = dateFilter(data.cotisation.debut, 'yyyy-MM-dd');
					//data.cotisation.fin = Abonnement1Y(data.cotisation.debut); // function ajouté 1 ans
				}
				else {*/
					data.cotisation = null;
				//}
					
				console.log(data);
				
				
		        AdherentService.add(data);
		        $location.path('/adherentrecherche');
		        
		    };
		    
		    $scope.remove = function(){
		    	$scope.data ={};
		    }
						

			function calculAge(strDate) {
			    strDate = strDate.split('-');
			    var birthMonth = strDate[1]-1, // (les mois commencent à 0)
			        birthDay = strDate[2], 
			        now = new Date(),
			        nowMonth = now.getMonth(),
			        nowDay = now.getDate(),
			        age = now.getFullYear()-strDate[0];
			     
			   // console.log('mois =', birthMonth ,'jours =', birthDay,'mois =', nowMonth, 'jours =',nowDay, age);
			    // Si la date d'anniversaire n'est pas encore passée, on corrige l'age
			   // if(nowMonth<birthMonth || nowMonth==birthMonth && nowDay<birthDay) {
			  //      age--;
			  //  }
			    return age;
			}
			
			function Abonnement1Y(strDate) {
			    strDate = strDate.split('-');
			    var birthMonth = strDate[1], 
			        birthDay = strDate[2], 
			        age = strDate[0];
			     
			    age = parseInt(age) + 1;
			    var str = age+"-"+birthMonth+"-"+birthDay;
			    
			    return str;
			}
			 
			//console.log(Abonnement1Y('1994-02-01')); // 18
			//console.log(calculAge('1994-05-05')); // 17 
			
		});

})();