const express = require("express");
var router = express.Router();
const db = require("../models");
router.get("/", async (req, res) => {
	const myTasks = await db.Tasks.findAll();
	console.log("Monkey Moo");
	res.render("remove", { name: "Monkey Moo", tasks: myTasks });
});

router.post("/", async (req, res) => {
	console.log(req.body.ID);
	await db.Tasks.destroy({
		where: {
			ID: req.body.ID,
		},
	})
		.then(res.send("Task Successfully Removed."))
		.catch((err) => res.error(err));
});
module.exports = router;
