var PARSE_load_all = {
	storage : {
		exp_tables_tmp : []
	},
	init : function() {
		console.log("parse_load_all");
		var load_list = ["parse/todo_exp.js"];
		CTRL_Helper.load_script_list(load_list);
	},
	add_record_list : function(list, callback) {
		var self = PARSE_load_all;
		self.storage.exp_tables_tmp = list.slice();
		console.log(list);
		if (list.length) {
			var table = list.shift();
			var tableObject = Parse.Object.extend(table.table);
			var dataList = table.dataList.slice();
			self.add_record(tableObject, table.columns, dataList, function() {
				self.add_record_list(list);
			});
		} else {
			console.log("done");
		}

	},
	add_record : function(tableObject, columns, dataList, callback) {
		var self = PARSE_load_all;
		console.log(dataList);
		if (dataList.length) {
			var data = dataList.shift();
			var ItemQuery = new tableObject();
			for (var i = 0; i < columns.length; i++) {
				if (columns[i].relation) {
					var relation = Parse.Object.extend(columns[i].relation);
					ItemQuery.set(columns[i].name, new relation());
				} else
					ItemQuery.set(columns[i], data[i]);
			}
			// console.log(JSON.stringify(ItemQuery));
			ItemQuery.save({
				success : function(e) {
					// Execute any logic that should take place after the object is
					// saved.
					console.log('New object created with objectId: ' + e.id);
					self.add_record(tableObject, columns, dataList, callback);
				},
				error : function(e, error) {
					// Execute any logic that should take place if the save fails.
					alert('Failed to create new object, with error code: ' + error.description);
				}
			});
		} else {
			if (callback != null)
				callback();
		}
	},
	remove_all_list : function(list, callback) {
		var self = PARSE_load_all;
		if (list.length) {
			var table = list.shift();
			self.remove_all_table(table, function() {
				self.remove_all_list(list);
			});
		}

	},
	remove_all_table : function(table, callback) {
		var query = new Parse.Query(Parse.Object.extend(table.table));
		query.find({
			success : function(results) {
				console.log("Successfully retrieved " + results.length + " records.");
				// Do something with the returned Parse.Object values
				Parse.Object.destroyAll(results, {
					success : function() {
						console.log("All is deleted");
						if (callback != null)
							callback(results);
					},
					error : function(error) {
						if (error.code == Parse.Error.AGGREGATE_ERROR) {
							for (var i = 0; i < error.errors.length; i++) {
								console.log("Couldn't delete " + error.errors[i].object.id + "due to " + error.errors[i].message);
							}
						} else {
							console.log("Delete aborted because of " + error.message);
						}
					},
				});
			},
			error : function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});
	}
};
$(function() {
	PARSE_load_all.init();
});
