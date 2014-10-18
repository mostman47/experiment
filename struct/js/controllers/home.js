define(['./module'], function(controllers) {
	'use strict';
	controllers.controller('HomeNGController', ['$scope',
	function($scope) {
		var pluginsList = [];
		CTRL_Helper.load_script_list(pluginsList, function(){
			CTRL_Home.init();
		});
	}]);
});

var CTRL_Home = {
	conf: {
		$scope : ''
	},
	init: function($scope){
		var self = CTRL_Home;
		self.conf.$scope = $scope;
		console.log("ctrl_home");
	}
};
