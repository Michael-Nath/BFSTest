import React from "react";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from "@material-ui/core";
import Deadline from "./Deadline";

const Adder = () => {
	const [date, setDate] = React.useState(new Date());
	const testSomething = () => {
		console.log("This works!");
	};
	return (
		<form action="/add-task" method="POST">
			<InputLabel>Task Name</InputLabel>
			<Input name="taskName" multiline></Input>
			<InputLabel>Task Description</InputLabel>
			<Input name="taskDescription" multiline></Input>
			<InputLabel>Due Date</InputLabel>
			<Deadline setDate={setDate} />
			<Input type="hidden" name="taskDate" value={date}></Input>
			<Input type="submit" onSubmit={testSomething}>
				Add Task!
			</Input>
		</form>
	);
};

export default Adder;
