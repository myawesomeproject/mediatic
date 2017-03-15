(function() {
	
	'use strict';

	angular
		.module('MyApp.Media',['ngRoute', '720kb.datepicker'])
		.controller('MediaVisualisationCtrl',function($rootScope) {
		
			$rootScope.title = "Visualisation media" ;

		});

})();
