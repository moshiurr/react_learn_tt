const router = require("express").Router();
const Task = require("../models/task.model");

//create a task
router.post("/", async (req, res) => {
	const newTask = new Task({
		userId: req.body.userId,
		title: req.body.title,
		time: req.body.time,
		reminder: req.body.reminder,
	});

	try {
		await newTask.save();
		res.status(200).send(newTask);
	} catch (err) {
		res.status(500).send(err);
	}
});

//get all task of user
router.get("/:userId", async (req, res) => {
	try {
		const allTasks = await Task.find({ userId: req.params.userId });
		res.send(allTasks);
	} catch (err) {
		res.status(500).send(err);
	}
});

//modify task
// router.patch("/:taskId", async (req, res) => {});

//delete task
router.delete("/:taskId", async (req, res) => {
	try {
		const delTask = await Task.findByIdAndDelete(req.params.taskId);
		res.send(delTask);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
