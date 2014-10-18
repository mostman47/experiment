var TODO_EXP = {
	tables : [{
		table : "todo_user",
		columns : ["name", "email"],
		dataList : [["",""]]
	}, {
		table : "todo_details",
		columns : ["text",{relation:"todo_user",name:"owner"}],
		dataList : [["",""]]
	}],
	init : function() {
		var self = TODO_EXP;
		console.log("todo_exp_load_all");
		$("#todo_exp_load_all").on("click", function() {
			console.log("todo_exp_load_all click");
			self.load_all();
		});
		$("#todo_exp_delete_all").on("click", function() {
			console.log("todo_exp_delete_all click");
			self.delete_all();
		});
	},
	load_all : function() {
		var self = TODO_EXP;
		PARSE_load_all.add_record_list(self.tables.slice());
	},
	delete_all : function() {
		var self = TODO_EXP;
		PARSE_load_all.remove_all_list(self.tables.slice());
	}};
TODO_EXP.init();
