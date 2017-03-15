(function() {
	
	'use strict';

	angular
		.module('MyApp.Media',['ngRoute', '720kb.datepicker'])
		.controller('MediaVisualisationCtrl',function($rootScope,$scope,UrlService,$http,$routeParams) {
		
			$rootScope.title = "Visualisation média" ;
			
			var url = UrlService.getMediaAccessionUrl();
			
			$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
				//console.log('OK',reponse.data);
				$scope.media = reponse.data;
				
				
			});

		});

})();
