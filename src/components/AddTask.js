import { useState } from "react";

const AddTask = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [active, setActive] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		if (!name || !age) {
			alert("Please insert valid input");
			return;
		}

		onAdd({ name, age, active });

		setName("");
		setAge("");
		setActive(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name</label>
				<input
					type="text"
					placeholder="Add Name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Age</label>
				<input
					type="number"
					placeholder="Add Age"
					min="1"
					value={age}
					onChange={e => setAge(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Active</label>
				<input
					type="checkbox"
					checked={active}
					value={active}
					onChange={e => setActive(e.currentTarget.checked)}
				/>
			</div>
			<input type="submit" value="Save" className="btn btn-block" />
		</form>
	);
};
export default AddTask;
