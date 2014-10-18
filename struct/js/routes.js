define(['./app'], function(app) {
	'use strict';
	return app.config(function($stateProvider) {
		$stateProvider.state('index', {
			url : "",
			views : {
				"viewBody" : {
					templateUrl : 'templates/home.html',
					controller : 'HomeNGController'
				},
			}
		}).state('todo', {
			url : "/todo_exp",
			views : {
				"viewBody" : {
					templateUrl : 'templates/todo.html',
					controller : 'TodoNGController'
				},
			}
		}).state('loadParse', {
			url : "/loadParse",
			views : {
				"viewBody" : {
					templateUrl : 'templates/loadParse.html',
					controller : 'LoadParseNGController'
				},
			}
		});
	});
});

var ROUTES = {
	config : {
		app : ''
	},
};
