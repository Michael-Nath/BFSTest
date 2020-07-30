import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Task from "./components/Task";
import Adder from "./components/Adder";
import makeStyles from "@material-ui/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
	},
	modal: {
		margin: "25%",
	},
}));
function App(props) {
	const [tasks, setTasks] = React.useState([]);
	const [deleteTasks, setDelete] = React.useState(new Date());
	const [taskID, setTaskID] = React.useState(0);
	const [open, setOpen] = useState(false);

	const classes = useStyles();
	React.useEffect(() => {
		axios.get("/view-task").then((res) => {
			// console.log(res.data);
			setTasks(res.data);
		});
	}, [deleteTasks]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// const openModal = (choice, taskID) => {
	// 	setEdit(taskID)
	// 	if (choice) {
	// 		setOpen(true);
	// 	}
	// };
	return (
		<div>
			{tasks.map((task, index) => (
				<Task
					key={index}
					taskID={task.id}
					taskName={task.name}
					taskDescription={task.description}
					taskDate={task.due_date}
					taskCompleted={task.completed}
					setDelete={setDelete}
					modalFunc={setOpen}
					setTaskID={setTaskID}
				/>
			))}
			<Adder editTask={false} />
			<Modal open={open} className={classes.modal} onClose={handleClose}>
				<Adder editTask={true} taskID={taskID} />
			</Modal>
		</div>
	);
}

export default App;
