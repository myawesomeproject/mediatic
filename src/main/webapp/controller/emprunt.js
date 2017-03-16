(function() {
	
	'use strict';

	angular
		.module('MyApp.Emprunt',['ngRoute','MyApp.Adherent','MyApp.Media'])
		.controller('EmpruntCtrl',function($rootScope,$scope,UrlService,AdherentService,MediaService,$http,$routeParams) {
					
			var url = UrlService.getMediaAccessionUrl();
			
			var media=[];
			
			$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
				
				media = reponse.data;
				$scope.media = reponse.data;
			});
			
			
			$scope.emprunt = function(adherent) {
				
				media.emprunteurs[media.emprunteurs.length]=adherent;
				media.retour= new Date() + 1;
				

				
		        return MediaService.update(media);
		    };
		});
})();