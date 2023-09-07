import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
	const history = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerUser = async (event) => {
		event.preventDefault();
		const response = await fetch("http://localhost:1337/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		});

		const data = await response.json();

		if (data.status === "ok") {
			history.push("/login");
		}

		console.log(data);
	};

	return (
		<div className="App">
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					type="text"
					placeholder="First name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
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
				<input type="submit" value="Register" />
			</form>
		</div>
	);
}

export default App;
