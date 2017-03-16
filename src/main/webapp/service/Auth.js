angular.module('MyApp.Connexion')
.factory('AuthentificationService', function($http, UrlService,$cookieStore,$cookies){
	
	var AuthentificationService = {};

	var connected = false;
	var defaut = 'Basic';

	var authCookie = $cookies.get('auth');
	if (authCookie != undefined){
		connected = true;
		defaut = authCookie;
	}
	
	
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
			//console.log('Connection OK');
			connected = true;			
			$http.defaults.headers.common['Authorization'] = auth;
			$cookies.put('auth', auth);
			return true;
		}, function(){
			AuthentificationService.disconnect();
			return false;
		});
	};

	AuthentificationService.isConnected = function(){
		return connected;
	};
	
	
	AuthentificationService.disconnect = function(){
		connected = false;
		$cookies.remove('auth');
		$http.defaults.headers.common['Authorization'] = 'Basic';
	};
	

	return AuthentificationService;

});