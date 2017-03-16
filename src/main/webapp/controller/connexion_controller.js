'use strict';

angular.module('MyApp.Connexion',['ngRoute'])

	.controller('ConnexionCtrl',function($rootScope,$scope,$location, AuthentificationService) {
		
		$rootScope.title = "connexion" ;
		 
		$scope.isConnected = function(){
			return AuthentificationService.isConnected();
		};
		
		//var login = $scope.login;
		//var pass = $scope.pass;
		
		$scope.connect = function(login,pass){
			//console.log(login, pass);
			AuthentificationService.connect(login,pass).then(function(isOk){
				if(isOk){
					$location.path('/mediarecherche');
				}
			});
		}
		
		$scope.disconnect = function(){
			//console.log('disconnect');
			AuthentificationService.disconnect();
		};
		
	});