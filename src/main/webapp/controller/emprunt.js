(function() {
	
	'use strict';

	angular
		.module('MyApp.Emprunt',['ngRoute','MyApp.Adherent','MyApp.Media'])
		.controller('EmpruntCtrl',function($rootScope,$scope,UrlService,AdherentService,dateFilter,MediaService,$http,$routeParams) {
					
			var url = UrlService.getMediaAccessionUrl();
			var url2 = UrlService.getEmpruntAjoutUrl();
			
			var emprunt={};

			
			
			$scope.addemprunt = function(adherent,media) {
				emprunt = {id_adherent : adherent.id,id_media : media.id, depart : dateFilter( new Date(),'yyyy-MM-dd')};
				$http.post(url2,emprunt);
		    };
		    
		    
		});
})();