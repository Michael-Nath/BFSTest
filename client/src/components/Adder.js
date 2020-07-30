import React from "react";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Paper,
	Typography,
} from "@material-ui/core";
import Deadline from "./Deadline";
import makeStyles from "@material-ui/styles/makeStyles";

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
	return (
		<Paper elevation={24} className={classes.root}>
			<Typography className={classes.addTitle} variant="h3">
				Add a Task!
			</Typography>
			<form action="/add-task" method="POST">
				<InputLabel>Task Name</InputLabel>
				<Input fullWidth name="taskName" multiline></Input>
				<InputLabel>Task Description</InputLabel>
				<Input fullWidth name="taskDescription" multiline></Input>
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
					value={(!props.editTask) ? "Add Task" : "Submit Edit"}
				></Input>
			</form>
		</Paper>
	);
};

export default Adder;
