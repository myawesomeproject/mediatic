(function() {
	'use strict';

	angular
			.module('MyApp.Media')
			.value('MediaRechercheService', {}) //permet d'instancier et créer un espace mémoire pour la recherche
			.service('ListeMediaService', function($http, UrlService) {

						//var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
						var url = UrlService.getMediaRechercheUrl();
						// console.log(url); //pour faire apparaitre l'url de la liste des médias
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