define(['./module'], function(controllers) {
	'use strict';
	controllers.controller('TodoNGController', ['$scope',
	function($scope) {
		var pluginsList = [];
		CTRL_Helper.load_script_list(pluginsList, function(){
			CTRL_todo.init();
		});
	}]);
});

var CTRL_todo = {
	conf: {
		$scope : ''
	},
	init: function($scope){
		var self = CTRL_todo;
		self.conf.$scope = $scope;
		console.log("ctrl_todo");
	}
};