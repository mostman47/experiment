define(['./app'], function(app) {
	'use strict';
	return app.config(function($stateProvider) {
		$stateProvider.state('index', {
			url : "",
			views : {
				"viewBody" : {
					templateUrl : 'templates/home.html',
					controller : 'HomeController'
				},
			}
		});
	});
});
