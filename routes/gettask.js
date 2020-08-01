const express = require("express");
const router = express.Router();
const db = require("../models");
router.get("/:taskID", async (req, res) => {
	// uses route parameters to get the info of the appropriate task. 
	const taskID = req.params.taskID;
	const currentTask = await db.Tasks.findByPk(taskID);
	// queries the database by the primary key, which is the task id in this case
	// returns info as a JSON
	res.json({
		name: currentTask.name,
		description: currentTask.description,
	});
});

module.exports = router;
