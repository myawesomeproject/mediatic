(function() {
	
	'use strict';

	angular
		.module('MyApp.Emprunt',['ngRoute','MyApp.Adherent','MyApp.Media'])
		.controller('EmpruntCtrl',function($rootScope,$scope,UrlService,AdherentService,dateFilter,MediaService,$http,$routeParams) {
					
			var url = UrlService.getMediaAccessionUrl();
			var url2 = UrlService.getEmpruntAjoutUrl();
			
			var emprunt={};
			var media={};
			
			$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
				
				media = reponse.data;
				$scope.media = reponse.data;
			});
			
			
			$scope.addemprunt = function(adherent) {
				emprunt = {id_adherent : adherent.id,id_media : media.id, depart : dateFilter( new Date(),'yyyy-MM-dd')};
				$http.post(url2,emprunt);
		    };
		    
		    
		});
})();