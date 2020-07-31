const express = require("express");
const router = express.Router();
const db = require("../models");
router.get("/:taskID", async (req, res) => {
	const taskID = req.params.taskID;
	const currentTask = await db.Tasks.findByPk(taskID);
	res.json({
		name: currentTask.name,
		description: currentTask.description,
	});
});

module.exports = router;
