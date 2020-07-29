import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import axios from "axios";
import {
	CardContent,
	CardActionArea,
	Button,
	Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const Task = (props) => {
	const { setDelete, taskID, taskName, taskDescription, taskDate } = props;
	const [completed, markCompleted] = useState(false);
	const parsedDate = new Date(taskDate);
	const removeTask = () => {
		axios.post("/remove-task", { ID: taskID }).then((res) => {
			console.log(res);
			setDelete(new Date());
		});
	};
	const completeTask = () => {
		axios.post("/completed-task", {ID: taskID}).then(markCompleted(!completed))
	};

	return (
		<Card>
			<CardContent>
				<Typography>
					Task: {taskName} {taskID}{" "}
				</Typography>
				<Divider />
				<Typography>Task Description: {taskDescription} </Typography>
				<Typography>Task Deadline: {taskDate} </Typography>
			</CardContent>
			<CardActionArea>
				<Button onClick={removeTask}>Remove Task</Button>
				<Button onClick={completeTask}>{(!completed && "Mark as Completed") || "Unmark"} </Button>
			</CardActionArea>
		</Card>
	);
};

export default Task;
