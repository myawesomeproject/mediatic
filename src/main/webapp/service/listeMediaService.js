(function() {
	'use strict';

	angular
			.module('MyApp.Media')	
			.service('ListeMediaService', function($http, UrlService) {

						var url = UrlService.getMediaRechercheUrl();
						var promise = $http.get(url).then(function(response) {							
							return response.data
						}, function(){
							console.log('Oups... plus de réseau!')
							return [];					
						});

						this.getList = function() {
							return promise;
						};

						this.getMedia = function(id) {
							return promise.then(function(liste) {
								var media = undefined;
								for (var index in liste) {
									if (liste[index]._id.$oid === id) {
										return liste[index];
									}
								}
								throw 'Média non trouvé';
							});
						}
					})
})();