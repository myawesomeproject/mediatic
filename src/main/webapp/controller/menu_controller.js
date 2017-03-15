
angular.module('MyApp')
		.controller('MenuCtrl',function($rootScope,$scope) {
			
	
			$scope.isAdherent = function(value){
				
				return (value === 'Adhérents' 
					|| value === 'Création adhérents' 
					|| value === 'Visualisation adhérent');
			}
			
			$scope.isMedia = function(value){
				//console.log(value);
				return (value === 'Liste des médias' 
					|| value === 'Création media' 
					|| value === 'Visualisation media');
			}
		});
