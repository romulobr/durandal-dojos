define(['knockout'], function(ko) {
	var toDoList = ko.observableArray([
		{ task:"monkey", done: true},
		{ task:"banana", done: false}]),

		newTask = ko.observable(),
		filterBy = ko.observable("noFilter"),
		filtered = ko.computed(function(){
			if (filterBy() === "noFilter") {
				return toDoList();
			}

			return ko.utils.arrayFilter(toDoList(), function(task) {
				return filterBy() === "done" ? task.done : !task.done;
			});
		});

	return {
		list: filtered,
		newTask: newTask,
		addTask: function() {
			toDoList.push({
					task:newTask(),
					done:false
				});
			newTask("");			
		},
		filterBy: filterBy
	};

});