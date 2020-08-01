var express = require("express");
var router = express.Router();
const db = require("../models");

router.post("/", async (req, res) => {
	// retrieving information from the form that user fills out
	console.log(req.body);
	const newTask = req.body;
	const currentDate = new Date();
	const newTaskName = newTask["taskName"];
	const newTaskDescription = newTask["taskDescription"];
	const newTaskDate = newTask["taskDate"];
	const editTask = newTask["edit"];
	const parsedDate = new Date(newTaskDate);
	console.log(typeof editTask);
	if (editTask == "true") {
		await db.Tasks.update(
			{ name: newTaskName, description: newTaskDescription, date: newTaskDate },
			{
				where: {
					id: newTask.taskID,
				},
			}
		);
	} else {
		await db.Tasks.create({
			name: newTaskName,
			description: newTaskDescription,
			due_date: parsedDate,
			createdAt: currentDate,
			updatedAt: currentDate,
			completed: false,
		});
	}
	// this is rendered as a remedy for the form redirecting user to api endpoint. 
	res.render("index");
});

module.exports = router;
