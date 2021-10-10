import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useHistory } from "react-router";
import axios from "axios";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");
	const [fullname, setFullname] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();

	const submitHandle = async e => {
		e.preventDefault();

		try {
			if (email === "" || password === "" || passwordAgain === "")
				return setError("Fillup the form properly!");

			if (password !== passwordAgain) return setError("Passwords don't match");

			const res = await axios.post("http://localhost:8800/api/v1/users/", {
				email,
				password,
				fullname,
			});

			console.log(res.data);
			history.push("/login");
		} catch (err) {
			setError(err.message);
			console.log(err);
		}
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
				<div className="form-control">
					<label>Confirm Password</label>
					<input
						type="password"
						placeholder="Confirm your password"
						value={passwordAgain}
						onChange={e => setPasswordAgain(e.target.value)}
					/>
				</div>

				<h4 style={{ color: "red" }}>{error ? error : ""}</h4>

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
