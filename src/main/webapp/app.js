(function() {
	'use strict';

	angular.module('MyApp', [ 'ngRoute', 'MyApp.Connexion' ])

	.config(function($routeProvider) {

		$routeProvider.when('/connexion', {
			controller : 'connexionCtrl',
			templateUrl : './template/connexion.html',
			title : 'Connexion'
		});

		$routeProvider.when('/adherentvisualisation', {
			controller : 'adherentvisualisationCtrl',
			templateUrl : './template/adherentvisualisation.html',
			title : 'Adhérent'
		});

		$routeProvider.when('/adherentrecherche', {
			controller : 'adherentrechercheCtrl',
			templateUrl : './template/adherentrecherche.html',
			title : 'Liste des adhérents'
		});

		$routeProvider.when('/mediavisualisation', {
			controller : 'mediavisualisationCtrl',
			templateUrl : './template/mediavisualisation.html',
			title : 'Média'
		});

		$routeProvider.when('/mediarecherche', {
			controller : 'mediarechercheCtrl',
			templateUrl : './template/mediarecherche.html',
			title : 'Liste des médias'
		});
		
		$routeProvider.when('/mediacreation', {
			controller : 'mediacreationCtrl',
			templateUrl : './template/mediacreation.html',
			title : 'Ajout de média'
		});

		$routeProvider.when('/adherentcreation', {
			controller : 'adherentcreationCtrl',
			templateUrl : './template/adherentcreation.html',
			title : 'Ajout d\'adhérent'
		});

		$routeProvider.otherwise('/connexion');
	})

	.run(function($location, $rootScope) {
		$rootScope.title = 'Home';
	});

})();
