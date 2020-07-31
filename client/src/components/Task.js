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
	const {
		setDelete,
		taskID,
		taskName,
		taskDescription,
		taskDate,
		taskCompleted,
	} = props;
	const [completed, markCompleted] = useState(taskCompleted);

	const parsedDate = new Date(taskDate);
	const removeTask = () => {
		axios.post("/remove-task", { ID: taskID }).then((res) => {
			console.log(res);
			setDelete(new Date());
		});
	};
	const completeTask = () => {
		axios
			.post("/completed-task", { ID: taskID, completed: completed })
			.then(markCompleted(!completed));
	};

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
					<Typography>{taskDate}</Typography>
				</CardContent>
				<CardActionArea>
					<Button onClick={removeTask}>Remove Task</Button>
					<Button onClick={completeTask}>
						{(!completed && "Mark as Completed") || "Unmark"}{" "}
					</Button>
					<Button onClick={editTask}> Edit Task </Button>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default Task;
