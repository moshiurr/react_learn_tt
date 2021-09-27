const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		reminder: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model("Task", TaskSchema);
