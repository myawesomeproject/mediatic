(function(){
	'use strict';
	
	angular
		.module('MyApp.Adherent')
	
		.service('AdherentService', function($rootScope,UrlService,$http){
			var panier = [];
			//var seft = this;
			this.add = function(membre){
				var url = UrlService.getAdherentCreationUrl();
				
				$http.post(url, membre).then(function(reponse) {
					$rootScope.datas = reponse.data;
				
				});	
				
			};
			
			this.update = function(membre){
				var url = UrlService.getAdherentModificationUrl();
				$http.post(url, membre).then(function(reponse) {
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

