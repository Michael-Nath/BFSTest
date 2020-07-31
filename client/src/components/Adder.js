import React from "react";
import { InputLabel, Input, Paper, Typography } from "@material-ui/core";
import Deadline from "./Deadline";
import makeStyles from "@material-ui/styles/makeStyles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "50%",
	},
	addTitle: {
		fontWeight: "bold",
	},
}));

const Adder = (props) => {
	const classes = useStyles();
	const [date, setDate] = React.useState(new Date());
	const [taskName, setTaskName] = React.useState("");
	const [taskDescription, setTaskDescription] = React.useState("");
	if (props.editTask == true) {
		axios.get(`/get-task/${props.taskID}`).then((res) => {
			const data = res.data;
			setTaskName(data.name);
			setTaskDescription(data.description);
		});
	}
	return (
		<Paper elevation={24} className={classes.root}>
			<Typography className={classes.addTitle} variant="h3">
				Add a Task!
			</Typography>
			<form action="/add-task" method="POST">
				<InputLabel>Task Name</InputLabel>
				<Input
					defaultValue={taskName}
					fullWidth
					name="taskName"
					multiline
				></Input>
				<InputLabel>Task Description</InputLabel>
				<Input defaultValue={taskDescription} fullWidth name="taskDescription" multiline></Input>
				<InputLabel>Due Date</InputLabel>
				<Deadline setDate={setDate} />
				<Input type="hidden" name="taskDate" value={date}></Input>
				<Input type="hidden" name="edit" value={props.editTask}></Input>
				<Input
					type="hidden"
					name="taskID"
					value={props.taskID || undefined}
				></Input>
				<br />
				<Input
					type="submit"
					value={!props.editTask ? "Add Task" : "Submit Edit"}
				></Input>
			</form>
		</Paper>
	);
};

export default Adder;
