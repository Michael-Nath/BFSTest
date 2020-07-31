import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Task from "./components/Task";
import Adder from "./components/Adder";
import makeStyles from "@material-ui/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
	title: {
		textAlign: "center",
		fontWeight: "bold",
	},
	modal: {
		margin: "25%",
	},
	adder: {
		marginTop: "10%",
	},
}));
function App(props) {
	const [tasks, setTasks] = React.useState([]);
	const [deleteTasks, setDelete] = React.useState(new Date());
	const [taskID, setTaskID] = React.useState(0);
	const [open, setOpen] = useState(false);

	const classes = useStyles();
	React.useEffect(() => {
		axios.get("/view-tasks").then((res) => {
			setTasks(res.data);
		});
	}, [deleteTasks]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Typography className={classes.title} variant="h2">
				Your Tasks
			</Typography>
			<Grid container spacing={3}>
				{tasks.map((task, index) => (
					<Grid item xs={3}>
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
					</Grid>
				))}
			</Grid>
			<div className={classes.adder}>
				<Adder editTask={false} />
			</div>
			<Modal open={open} className={classes.modal} onClose={handleClose}>
				<Adder editTask={true} taskID={taskID} />
			</Modal>
		</div>
	);
}

export default App;
