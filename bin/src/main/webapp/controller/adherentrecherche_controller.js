(function() {
	
	'use strict';

	angular
		.module('MyApp.Adherent')
		.controller('AdherentRechercheCtrl',function($rootScope,UrlService,$http,$scope) {
		
			$rootScope.title = "Adhérents" ;
			
			
			var url = UrlService.getAdherentRechercheUrl();
			
			$http.get(url).then(function(reponse) {
				//console.log('OK',reponse.data);
				$scope.membres = reponse.data;
				
				
		
			});
			
			
		});

})();