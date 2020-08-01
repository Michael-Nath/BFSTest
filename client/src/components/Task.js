import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";
import axios from "axios";
import {
	CardContent,
	CardActionArea,
	Button,
	Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		maxWidth: "500px",
	},
	modal: {
		margin: "50%",
	},
	cardUnmarked: {
		border: "2px solid black",
	},
	cardMarked: {
		border: "2px solid black",
		opacity: "0.5",
	},
}));

const Task = (props) => {
	const classes = useStyles();
	// use destructuring in order to get necessary prop values
	const {
		setDelete,
		taskID,
		taskName,
		taskDescription,
		taskDate,
		taskCompleted,
	} = props;
	// maintains the state of the task (whether it's completed or not)
	const [completed, markCompleted] = useState(taskCompleted);

	const retreivedDate = new Date(taskDate);
	// options given to DateTimeFormat object in order to informatively format task's date
	const dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		// timezone is adjusted according to where your machine is.
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		timeZoneName: "short",
	};
	const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
		retreivedDate
	);
	// once called, will submit a post request to backend to remove task from database
	const removeTask = () => {
		axios.post("/remove-task", { ID: taskID }).then((res) => {
			setDelete(new Date());
		});
	};

	// will mark a task as completed in the database.
	// then sets state of task to be completed, dulling the task card.
	const completeTask = () => {
		axios
			.post("/completed-task", { ID: taskID, completed: completed })
			.then(markCompleted(!completed));
	};

	// calls function in parent component in order to open up the editing modal.
	const editTask = () => {
		props.setTaskID(taskID);
		props.modalFunc(true);
	};

	return (
		<div className={classes.root}>
			<Card className={completed ? classes.cardMarked : classes.unMarked}>
				<CardContent>
					<Typography variant="h4">Task:</Typography>
					<Typography>{taskName}</Typography>
					<Divider />
					<Typography variant="h4">Description</Typography>
					<Typography>{taskDescription} </Typography>
					<Divider />
					<Typography variant="h4">Deadline</Typography>
					<Typography>{formattedDate}</Typography>
				</CardContent>
				<CardActionArea>
					<Button onClick={removeTask}>Remove Task</Button>
					<Button onClick={completeTask}>
						{(!completed && "Mark as Completed") || "Unmark"}
					</Button>
					<Button onClick={editTask}> Edit Task </Button>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default Task;
