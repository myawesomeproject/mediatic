angular.module('MyApp')
	
	.factory('UrlService', function() {

	var Service = {};

	var serveur = 'http://192.168.10.17:8090';

	// ADHERENT
	var adherentCreationUrl = serveur + '/resource/adherent.creation';
	var adherentModificationUrl = serveur + '/resource/adherent.modification';
	var adherentAccessionUrl = serveur + '/resource/adherent.accession';
	var adherentRechercheUrl = serveur + '/resource/adherent.recherche';

	// EMPRUNT
	var empruntAjoutUrl = serveur + '/resource/emprunt.ajout';

	// MEDIA
	var mediaRechercheUrl = serveur + '/resource/media.recherche';
	var mediaCreationUrl = serveur + '/resource/media.creation';
	var mediaModificationUrl = serveur + 'resource/media.modification';

	Service.getAdherentCreationUrl = function() {
		return adherentCreationUrl;
	}

	Service.getAdherentModificationUrl = function() {

		return adherentModificationUrl;
	}

	Service.getAdherentRechercheUrl = function() {

		return adherentRechercheUrl;
	}

	Service.getMediaRechercheUrl = function() {

		return mediaRechercheUrl;
	}

	Service.getEmpruntAjoutUrl = function() {

		return empruntAjoutUrl;
	}

	Service.getAdherentAccessionUrl = function() {

		return adherentAccessionUrl;
	}

	Service.getMediaCreationUrl = function() {

		return mediaCreationUrl;
	}

	Service.getMediaModificationUrl = function() {

		return mediaModificationUrl;
	}

	return Service;
});