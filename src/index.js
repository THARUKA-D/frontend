import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./modals/home/home";
import Login from "./modals/login/login";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	</BrowserRouter>
);
