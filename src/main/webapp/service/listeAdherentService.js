(function() {
	'use strict';

	angular
			.module('MyApp.Adherent')	
			.service('ListeAdherentService', function($http, UrlService) {

						var url = UrlService.getAdherentRechercheUrl();
						var promise = $http.get(url).then(function(response) {							
							return response.data
						}, function(){
							console.log('Oups... plus de réseau!')
							return [];					
						});

						this.getList = function() {
							return promise;
						};

						this.getAdherent = function(id) {
							return promise.then(function(liste) {
								var adherent = undefined;
								for (var index in liste) {
									if (liste[index]._id.$oid === id) {
										return liste[index];
									}
								}
								throw 'Adherent non trouvé';
							});
						}
					})
})();