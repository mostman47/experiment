define(['./module'], function(controllers) {
	'use strict';
	controllers.controller('TodoNGController', ['$scope',
	function($scope) {
		var pluginsList = [];
		CTRL_Helper.load_script_list(pluginsList, function(){
			CTRL_todo.init();
		});
		require(["../../assets/plugins/codemirror-4.7/lib/codemirror",
		, "../../assets/plugins/codemirror-4.7/mode/htmlmixed/htmlmixed"], function(CodeMirror) {
			CodeMirror.fromTextArea(document.getElementById("todoTextArea"), {
				lineNumbers : true,
				mode: "htmlmixed"
				// matchBrackets : true
			});
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