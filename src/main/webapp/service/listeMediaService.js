(function() {
	'use strict';

	angular
			.module('MyApp.Media')
			.value('MediaRechercheService', {}) //permet d'instancier et créer un espace mémoire pour la recherche
			.service('ListeMediaService', function($http) {

						var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i'
						var promise = $http.get(url).then(function(response) {							
							return response.data
						}, function(){
							console.log('Oups... plus de réseau!')
							return [];					
						});

						this.getList = function() {
							return promise;
						};

						this.getBook = function(id) {
							return promise.then(function(liste) {
								var livre = undefined;
								for (var index in liste) {
									if (liste[index]._id.$oid === id) {
										return liste[index];
									}
								}
								throw 'livre non trouvé';
							});
						}
					})
})();