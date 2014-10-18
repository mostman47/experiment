define(['./module'], function(controllers) {
	'use strict';
	controllers.controller('LoadParseNGController', ['$scope',
	function($scope) {
		var pluginsList = [];
		CTRL_Helper.load_script_list(pluginsList, function() {
			CTRL_loadParse.init();
		});
	}]);
});

var CTRL_loadParse = {
	conf : {
		$scope : ''
	},
	init : function($scope) {
		var self = CTRL_loadParse;
		self.conf.$scope = $scope;
		console.log("ctrl_loadparse");
		CTRL_Helper.load_script_list(["parse/load_all.js"]);
	}
}; 