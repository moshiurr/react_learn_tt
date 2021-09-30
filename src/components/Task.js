import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(task._id)}
		>
			<h3>
				{task.title}{" "}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(task._id)}
				/>
			</h3>
			<p>{task.time}</p>
		</div>
	);
};

export default Task;
