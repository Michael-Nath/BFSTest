var express = require('express');
var router = express.Router();
const db = require("../models");

router.get("/", async (req, res) => {
    // grab all tasks from the database.
    const myTasks = await db.Tasks.findAll()
    console.log(myTasks)
    // render the view of the tasks
    res.json(myTasks)
})

module.exports = router;