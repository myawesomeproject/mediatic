(function() {
	
	'use strict';
	
	angular.module('MyApp',['ngRoute',
							'MyApp.Connexion',
							'MyApp.Adherent',												
							'MyApp.Media',
							//'MyApp.Emprunt',
							])
	
		.config(function($routeProvider){
			
			$routeProvider.when('/connexion', {
				controller :'ConnexionCtrl',
				templateUrl : './template/connexion.html',
				title: 'Connexion'
			});	
			
			$routeProvider.when('/adherentrecherche', {
				controller :'AdherentRechercheCtrl',
				templateUrl : './template/adherentrecherche.html',
				title: 'Liste des adhérents'
			});	
			
			$routeProvider.when('/mediarecherche', {
				controller : 'MediaRechercheCtrl',
				templateUrl : './template/mediarecherche.html',
				title : 'Liste des médias'
			});
			
			$routeProvider.when('/adherentvisualisation', {
				controller : 'AdherentVisualisationCtrl',
				templateUrl : './template/adherentvisualisation.html',
				title: 'Adhérent'
			});	
			
			$routeProvider.when('/mediavisualisation', {
				controller :'MediaVisualisationCtrl',
				templateUrl : './template/mediavisualisation.html',
				title : 'Média'
			});	
		
			$routeProvider.when('/adherentcreation', {
				controller : 'AdherentCreationCtrl',
				templateUrl : './template/adherentcreation.html',
				title : 'Ajout d\'adhérent'
			});
			
			$routeProvider.when('/mediacreation', {
				controller : 'MediaCreationCtrl',
				templateUrl : './template/mediacreation.html',
				title : 'Ajout de média'
			});
	
			$routeProvider.otherwise('/connexion');	
			})
	
		.run(function($location, $rootScope) {
				$rootScope.title = 'Home';			
		});
})();


