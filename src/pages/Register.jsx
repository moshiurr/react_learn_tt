import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullname, setFullname] = useState("");

	const submitHandle = e => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<h1>Register</h1>
			<form className="add-form" onSubmit={submitHandle}>
				<div className="form-control">
					<label>Full Name</label>
					<input
						type="text"
						placeholder="Enter Your Full name"
						value={fullname}
						onChange={e => setFullname(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="text"
						placeholder="Enter Your Email Address"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<input type="submit" value="Sign Up" className="btn btn-block" />
				<div className="registerDiv">
					<span>
						Already have a account....
						<Link to="/">
							<Button color="green" text="Login" />
						</Link>
					</span>
				</div>
			</form>
		</div>
	);
}
