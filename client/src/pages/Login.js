import React from "react";
import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (event) => {
		event.preventDefault();
		const response = await fetch("http://localhost:1337/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();

		if (data.user) {
			alert("Login successful");
			window.location.href = "/dashboard";
		} else {
			alert("Login failed! Check your email or password");
		}

		console.log(data);
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default Login;
