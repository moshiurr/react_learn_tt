import { useState } from "react";
import Button from "../components/Button";

import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();

	const submitHandle = async e => {
		e.preventDefault();

		try {
			if (email === "" || password === "")
				throw new Error("Enter Credentials first!");

			const res = await axios.post("http://localhost:8800/api/v1/users/login", {
				email,
				password,
			});

			console.log(res.data);
			history.push("/dashboard");
		} catch (err) {
			setError(err.message);
			console.log(err);
		}

		console.log(email, password);
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

				{error ? (
					<h4 style={{ color: "red" }}>
						Check your credentials and Try again!
					</h4>
				) : (
					""
				)}
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
