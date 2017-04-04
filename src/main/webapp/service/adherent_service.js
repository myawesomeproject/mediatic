(function() {
	'use strict';

	angular.module('MyApp.Adherent')

	.service('AdherentService', function($rootScope, UrlService, $http) {
		var panier = [];
		// var seft = this;
		this.add = function(membre) {
			var url = UrlService.getAdherentCreationUrl();

			$http.post(url, membre).then(function(reponse) {
				$rootScope.datas = reponse.data;

			});

		};

		this.update = function(membre) {
			var url = UrlService.getAdherentModificationUrl();
			$http.put(url, membre).then(function(reponse) {

			});
		};

		this.emprunte = function(id_adherent, id_media, date_depart, type) {

			var data = {
				dateEmprunt : date_depart,
				dateRetour : dateRetour(date_depart, type),
				retourner : false,
				adherent : {
					id : id_adherent
				},
				media : {
					id : id_media,
					type : type
				}
			};
			console.log(type);

			var media = {
				type : "Livre"
			};
			console.log(dateRetour(date_depart, media));

			var url = UrlService.getEmpruntAjoutUrl();
			$http.post(url, data);
		};

		this.getHT = function(ligne) {
			return ligne.article.price * ligne.qte;

		}

		$rootScope.getPanierServiceSize = function() {
			return panier.reduce(function(previous, item) {
				return previous + item.qte;
			}, 0);
		}
		return this;
	});

	function dateRetour(strDate, type) {

		strDate = strDate.split('-');
		var Month = strDate[1], Day = strDate[2], age = strDate[0];

		if (type === 'Livre') {
			Day = parseInt(Day) + 30;
		} else {
			Day = parseInt(Day) + 15;
		}
		var str = age + "-" + Month + "-" + Day;
		console.log(str);
		return str;
	}
})();
