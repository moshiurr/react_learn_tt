import { useState } from "react";
import Button from "../components/Button";

import { useHistory, Link } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandle = e => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<h1>Sign In</h1>
			<form className="add-form" onSubmit={submitHandle}>
				<div className="form-control">
					<label>Email</label>
					<input
						type="email"
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

				<input type="submit" value="Login" className="btn btn-block" />
				<div className="registerDiv">
					<span>
						Don't have an account...
						<Link to="/register">
							<Button color="green" text="Register" />
						</Link>
					</span>
				</div>
			</form>
		</div>
	);
}
