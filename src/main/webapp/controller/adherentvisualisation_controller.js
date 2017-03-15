'use strict';

angular.module('MyApp.Adherent',['ngRoute'])

	.controller('AdherentVisualisationCtrl',function($rootScope,$scope,UrlService,$http,$routeParams) {
		
		$rootScope.title = "Visualisation adhérent";
		
		
		var url = UrlService.getAdherentAccessionUrl();
		
		$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
			//console.log('OK',reponse.data);
			$scope.membre = reponse.data;
			
			
		});
	});