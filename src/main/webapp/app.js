'use strict';

angular.module('MyApp',['ngRoute','MyApp.Connexion'])

	.config(function($routeProvider){
		
		$routeProvider.when('/connexion', {
			controller :'connexionCtrl',
			templateUrl : './template/connexion.html',
			title: 'Connexion'
		});	
		
		$routeProvider.when('/adherentvisualisation', {
<<<<<<< HEAD
			controller :'adherentvisulationCtrl',
=======
			controller : 'adherentvisualationCtrl',
>>>>>>> 97146d6761537bf26f6988bf569c944a761282a5
			templateUrl : './template/adherentvisualisation.html',
			title: 'Adhérent'
		});	
		
		$routeProvider.when('/adherentrecherche', {
			controller :'adherentrechercheCtrl',
			templateUrl : './template/adherentrecherche.html',
			title: 'Liste des adhérents'
		});	
		
		$routeProvider.when('/mediavisualisation', {
			controller :'mediavisualisationCtrl',
			templateUrl : './template/mediavisualisation.html',
<<<<<<< HEAD
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
=======
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
>>>>>>> 97146d6761537bf26f6988bf569c944a761282a5
	})

	.run(function($location, $rootScope) {
			$rootScope.title = 'Home';			
	});