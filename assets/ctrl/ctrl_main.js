var CTRL_Main = {
	init: function(){
		console.log("ctrl_main");
		var list = ["assets/parseJS/parse_main.js"];
		CTRL_Helper.load_script_list(list);
	}
};
$(function(){
	CTRL_Main.init();
});

