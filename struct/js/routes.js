define(['./app'], function(app) {
	'use strict';
	var loadList = ["assets/ctrlJS/ctrl_main.js", "assets/ctrlJS/ctrl_helper.js"];
	ROUTES.config.app = app;
	ROUTES.load_first_list(loadList, ROUTES.final_callback);
});

var ROUTES = {
	config: {
		app: ''
	},
	load_first_list : function(list, callback) {
		var self = ROUTES;
		if (list.length) {
			$.getScript(list[0]).done(function(script, textStatus) {
				list.shift();
				self.load_first_list(list, callback);
			}).fail(function(jqxhr, settings, exception) {
			});
		} else {
			if (callback != null) {
				callback();
			}
		}
	},
	final_callback: function(){
		var self = ROUTES;
		var app = self.config.app;
		 app.config(function($stateProvider) {
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
		return app;
	}
};
