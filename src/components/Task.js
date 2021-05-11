import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.active ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.name}{" "}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.age}</p>
		</div>
	);
};

export default Task;
