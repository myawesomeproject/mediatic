'use strict';

angular.module('MyApp',['ngRoute','MyApp.Connexion'])

	.config(function($routeProvider){
		
		$routeProvider.when('/connexion', {
			controller :'connexionCtrl',
			templateUrl : './template/connexion.html',
			title: 'Connexion'
		});	
		
		$routeProvider.when('/adherentvisualisation', {
			controller :'adherentCtrl',
			templateUrl : './template/adherent.html',
			title: 'Adhérent'
		});	
		
		$routeProvider.when('/adherentrecherche', {
			controller :'adherentrechercheCtrl',
			templateUrl : './template/adherentrecherche.html',
			title: 'Liste des adhérents'
		});	
		
		$routeProvider.when('/mediavisualisation', {
			controller :'mediaCtrl',
			templateUrl : './template/media.html',
			title: 'Média'
		});	
		
		$routeProvider.when('/mediatrecherche', {
			controller :'mediarechercheCtrl',
			templateUrl : './template/mediarecherche.html',
			title: 'Liste des médias'
		});	
		
	/*	$routeProvider.when('/book/:id', {
			controller :'bookCtrl',
			templateUrl : './view-book/book.html',
			title: 'Book'
		});	*/
		
		$routeProvider.otherwise('/connexion');	
	})

	.run(function($location, $rootScope) {
			$rootScope.title = 'Home';			
	});