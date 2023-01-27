import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
	const [userName, setuserName] = useState("");
	const [password, setpassword] = useState("");
	
	const navigate = useNavigate();

	const validate = async () => {
		await axios
			.post(`http://localhost:3001/login`, {
				userName: userName,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					navigate("/home");
				}
				if (res.status === 401) {
					alert("Re-enter correct username and password");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="lgin-container">
			<div>
				<h1> The System </h1>
			</div>
			<div>
				<p> User name</p>
				<input
					className="lgin-input"
					placeholder="Username"
					onChange={(e) => {
						setuserName(e.target.value);
					}}
				></input>
				<p> Password</p>
				<input
					className="lgin-input"
					type="password"
					placeholder="Password"
					onChange={(e) => {
						setpassword(e.target.value);
					}}
				></input>
			</div>
			<div>
				<button
					className="lgin-btn"
					onClick={() => {
						validate();
					}}
				>
					{" "}
					LOGIN{" "}
				</button>
			</div>
		</div>
	);
};

export default Login;
