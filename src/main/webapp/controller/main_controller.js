angular
	.module('MyApp')
	.controller('MainCtrl', function($scope, AuthentificationService){
	
	$scope.isConnected = function(){
		return AuthentificationService.isConnected();
	};

});