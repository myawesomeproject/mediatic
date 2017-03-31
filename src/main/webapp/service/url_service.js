angular.module('MyApp')
	
	.factory('UrlService', function() {

	var Service = {};

	var serveur = 'http://localhost:8080/mediatic/ws';

	// ADHERENT
	var adherentCreationUrl = serveur + '/resource/adherent.creation';
	var adherentModificationUrl = serveur + '/resource/adherent.modification';
	var adherentAccessionUrl = serveur + '/resource/adherent.accession';
	var adherentRechercheUrl = serveur + '/resource/adherent.recherche';

	// EMPRUNT
	var empruntAjoutUrl = serveur + '/resource/emprunt.ajout';

	// MEDIA	
	var mediaCreationUrl = serveur + '/resource/media.creation';
	var mediaModificationUrl = serveur + '/resource/media.modification';
	var mediaAccessionUrl = serveur + '/resource/media.accession';
	var mediaRechercheUrl = serveur + '/resource/media.recherche';
	
	var ConnexionUrl = serveur + '/resource/connexion.login';
	var ConnexionUrl2 = serveur + '/resource/connexion.rights';
	
	Service.getConnection = function() {
		return ConnexionUrl;
	}
	
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
	
	Service.getMediaAccessionUrl = function() {
		return mediaAccessionUrl;
	}

	return Service;
});