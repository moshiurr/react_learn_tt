import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			title: "Call Alif",
			time: "May 21st 9pm",
			reminder: true,
		},
	]);

	const [showForm, setShowForm] = useState(false);

	const [idCounter, setIdCounter] = useState(1);

	//delete task event
	const deleteTask = id => {
		console.log("delete ", id);
		setTasks(tasks.filter(task => task.id !== id));
	};

	//toggle remainder event
	const toggleRemainder = id => {
		console.log("Toggle", id);
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	//adding the new event to the state
	const addTask = task => {
		const newTask = { ...task, id: idCounter };

		setIdCounter(idCounter + 1);
		setTasks([...tasks, newTask]);
	};

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

export default App;
