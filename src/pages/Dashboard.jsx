import { useState, useEffect } from "react";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import axios from "axios";

function Dashboard() {
	const [tasks, setTasks] = useState([]);

	const [showForm, setShowForm] = useState(false);

	//const [idCounter, setIdCounter] = useState(1);

	//delete task event
	const deleteTask = async taskId => {
		console.log("delete ", taskId);

		try {
			const delTask = await axios.delete(
				"http://localhost:8800/api/v1/tasks/" + taskId
			);

			console.log(delTask.data, " task deleted");
		} catch (err) {
			console.log(err.message);
		}

		setTasks(tasks.filter(task => task._id !== taskId));
	};

	//toggle remainder event
	const toggleRemainder = async taskId => {
		console.log("Toggle", taskId);

		try {
			const t = await axios.patch(
				"http://localhost:8800/api/v1/tasks/" + taskId
			);
			console.log(t.data);
		} catch (err) {
			console.log(err.message);
		}

		setTasks(
			tasks.map(task =>
				task._id === taskId ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	//adding the new event to the state
	const addTask = async task => {
		//const newTask = { ...task, id: idCounter };
		try {
			const savedTask = await axios.post(
				"http://localhost:8800/api/v1/tasks/",
				{
					userId: "6151fd57dc92d884f750668a",
					title: task.title,
					time: task.time,
					reminder: task.reminder,
				}
			);
			console.log(savedTask.data);
			setTasks([...tasks, savedTask.data]);
		} catch (err) {
			console.log(err);
		}

		//setIdCounter(idCounter + 1);
	};

	useEffect(() => {
		const fetchTask = async userId => {
			try {
				const allTasks = await axios.get(
					"http://localhost:8800/api/v1/tasks/" + userId
				);

				setTasks(allTasks.data);
				console.log(allTasks.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchTask("6151fd57dc92d884f750668a");
	}, [setTasks]);

	return (
		<div className="container">
			<Header
				onShow={() => {
					setShowForm(!showForm);
				}}
				showStatus={showForm}
			/>
			{showForm && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
			) : (
				"No tasks to show"
			)}
		</div>
	);
}

export default Dashboard;
