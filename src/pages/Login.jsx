import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<h1>Sign In</h1>
			<form className="add-form">
				<div className="form-control">
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

				<input type="submit" value="Login" className="btn btn-block" />
			</form>
		</div>
	);
}
