'use strict';

angular.module('MyApp.Connexion',['ngRoute'])

	.controller('ConnexionCtrl',function($rootScope,$scope,AuthentificationService) {
		
		$rootScope.title = "connexion" ;
		 
		$scope.isConnected = function(){
			return AuthentificationService.isConnected();
		};
		
		//var login = $scope.login;
		//var pass = $scope.pass;
		
		$scope.connect = function(login,pass){
			console.log(login, pass);
			return AuthentificationService.connect(login,pass);
		}
		
		$scope.disconnect = function(){
			return AuthentificationService.disconnect();
		};
		
	});