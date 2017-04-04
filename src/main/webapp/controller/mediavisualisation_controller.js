(function() {
	
	'use strict';

	angular
		.module('MyApp.Media',['ngRoute', '720kb.datepicker'])
		.controller('MediaVisualisationCtrl',function($rootScope,$scope,UrlService,$http,$routeParams) {
		
			$rootScope.title = "Visualisation média" ;
			
			$scope.Date=new Date();
			
			
			
			var url = UrlService.getMediaAccessionUrl();
			
			$http.get(url,{params:{"id": $routeParams.id}}).then(function(reponse) {
				//console.log('OK',reponse.data);
				$scope.media = reponse.data;
				
			});
			
			
			
			var url1 = UrlService.getAdherentRechercheUrl();
			
			$http.get(url1).then(function(reponse) {
				//console.log('OK',reponse.data);
				$scope.adherents = reponse.data;
				
			});
			
			
			$scope.isReturn=function(){
				return $scope.media.emprunts.retourner;
			}

		});

})();
