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
			controller : 'adherentvisulationCtrl',
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

		$routeProvider.when('/mediatrecherche', {
			controller : 'mediarechercheCtrl',
			templateUrl : './template/mediarecherche.html',
			title : 'Liste des médias'
		});

		$routeProvider.otherwise('/connexion');
	})

	.run(function($location, $rootScope) {
		$rootScope.title = 'Home';
	});

})();