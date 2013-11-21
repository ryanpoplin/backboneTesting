App.Models.Core = Backbone.Model.extend({
	defaults: function() {
		return {
			title: "",
			text: "",
			// Will be using Parse and not localStorage...
			createdAt: new Date() // not relevant for current project...
		};
	}
});