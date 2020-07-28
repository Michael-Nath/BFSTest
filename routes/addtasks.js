var express = require("express");
var router = express.Router();
const db = require("../models");
router.get("/", async (req, res) => {
  const myTasks = await db.Tasks.findAll();
  console.log(myTasks);
  res.render("adder", { name: "Monkeys Moo", tasks: myTasks });
});

router.post("/api", (req, res) => {
  // retrieving information from the form that user fills out
  const newTask = req.body;
  const newTaskName = newTask["taskName"];
  const newTaskDescription = newTask["taskDescription"];
  const newTaskDate = newTask["taskDate"];

  console.log([newTaskName, newTaskDescription, newTaskDate]);
  res.send("Request Received");
});

module.exports = router;
