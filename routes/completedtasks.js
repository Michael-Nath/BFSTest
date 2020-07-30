const express = require("express");
const router = express.Router();
const db = require("../models");
router.post("/", async (req, res) => {
	await db.Tasks.update(
		{ completed: !req.body.completed },
		{
			where: {
				id: req.body.ID,
			},
		}
	);
	res.json({ status: "Request Successfully Received" });
});

module.exports = router;
