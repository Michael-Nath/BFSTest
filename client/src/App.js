import React from "react";
import axios from "axios";
import "./App.css";
import Task from "./components/Task";
import Adder from "./components/Adder";
function App() {
	const [tasks, setTasks] = React.useState([]);
	const [deleteTasks, setDelete] = React.useState(new Date());
	React.useEffect(() => {
		axios.get("/view-task").then((res) => {
			console.log(res.data);
			setTasks(res.data);
		});
	}, [deleteTasks]);
	return (
		<div>
			{tasks.map((task, index) => (
				<Task
					key={index}
					taskID={task.id}
					taskName={task.name}
					taskDescription={task.description}
					taskDate={task.due_date}
					setDelete={setDelete}
				/>
			))}
			<Adder />
		</div>
	);
}

export default App;
