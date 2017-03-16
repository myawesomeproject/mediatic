angular.module('MyApp.Connexion')
.factory('AuthentificationService', function($http, UrlService){
	
	var AuthentificationService = {};

	var connected = false;
	var defaut = 'Basic';

	$http.defaults.headers.common['Authorization'] = defaut;

	AuthentificationService.connect = function(login, password){
		var auth = 'Basic ' + btoa(login+':'+password);
		var data ={login :login, mdp:password};
		var config = {
			headers : {
				'Authorization' : auth
			}
		};
		return $http.post(UrlService.getConnection(),data , config).then(function(){
			console.log('Connection OK');
			connected = true;
			$http.defaults.headers.common['Authorization'] = auth;
			return true;
		}, function(){
			console.log('Connection NOK');
			connected = false;
			$http.defaults.headers.common['Authorization'] = defaut;
			return false;
		});
	};

	AuthentificationService.isConnected = function(){
		return connected;
	};
	
	
	AuthentificationService.disconnect = function(){
		connected = false;
		$http.defaults.headers.common['Authorization'] = defaut;
	};
	

	return AuthentificationService;

});