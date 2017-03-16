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
			
			this.getHT = function(ligne){
				return ligne.article.price *ligne.qte;
				
			}

			$rootScope.getPanierServiceSize = function(){
				return panier.reduce(function(previous, item){
					return previous +item.qte;
				}, 0);
			}
			return this;
		})

})();

