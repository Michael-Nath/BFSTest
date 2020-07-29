var express = require("express");
var router = express.Router();
const db = require("../models");
router.get("/", async (req, res) => {
	const myTasks = await db.Tasks.findAll();
	console.log(myTasks);
	res.render("adder", { name: "Monkeys Moo", tasks: myTasks });
});

router.post("/api", async (req, res) => {
	// retrieving information from the form that user fills out
	const newTask = req.body;
	const newTaskName = newTask["taskName"];
	const newTaskDescription = newTask["taskDescription"];
	const newTaskDate = newTask["taskDate"];
	const parsedDate = new Date(newTaskDate);
	const createdTask = await db.Tasks.create({
		name: newTaskName,
		description: newTaskDate,
		due_date: parsedDate,
		completed: false,
	});
	console.log(createdTask);
	res.send("Task Added");
});

module.exports = router;
