'use strict';

angular.module('MyApp',['ngRoute','MyApp.Connexion'])

	.config(function($routeProvider){
		
		$routeProvider.when('/connexion', {
			controller :'connexionCtrl',
			templateUrl : './template/connexion.html',
			title: 'Connexion'
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