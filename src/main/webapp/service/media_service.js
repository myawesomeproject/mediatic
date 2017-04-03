(function(){
	'use strict';
	
	angular
		.module('MyApp.Media')
		.service('MediaService', function($rootScope,UrlService,$http){

			this.add = function(media){
				var url = UrlService.getMediaCreationUrl();
				
				$http.post(url, media).then(function(reponse) {
					$rootScope.datas = reponse.data;
				
				});	
				
			};
			
			this.update = function(media){
				var url = UrlService.getMediaModificationUrl();
				$http.post(url, media).then(function(reponse) {
					$rootScope.datas = reponse.data;
				
				});	
			};	

		})

})();

