var CTRL_Helper = {
	init: function(){
		console.log("ctrl_helper");
	},
	load_script_list : function(list, callback) {
		var self = CTRL_Helper;
		if (list.length) {
			$.getScript(list[0]).done(function(script, textStatus) {
				list.shift();
				self.load_script_list(list, callback);
			}).fail(function(jqxhr, settings, exception) {
			});
		} else {
			if (callback != null) {
				callback();
			}
		}
	},
}; 
$(function(){
	CTRL_Helper.load_script_list(["assets/ctrl/ctrl_main.js"]);
});

