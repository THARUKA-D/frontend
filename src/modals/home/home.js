import React, { useEffect, useState } from "react";
import UserCard from "../../components/userCard/userCard";
import FilterByDropDown from "../../components/filterbyDropDown/filterbyDropDown";
import Button from "../../components/button/button";
import Overlay from "../../components/overlay/overlay";
import AddNewUser from "../../components/addNewUser/addNewUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
	const [users, setUsers] = useState([]);
	const [isOverlayActive, setisOverlayActive] = useState(false);
	const [updatePage, setUpdatePage] = useState(false);

	const navigate = useNavigate();

	const fetchUsers = async () => {
		await axios
			.get(`http://localhost:3001/fetchAllUsers`)
			.then((users) => {
				setUsers(users.data.users);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		console.log("sorted");
	}, [users]);

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		fetchUsers();
	}, [isOverlayActive, updatePage]);

	return (
		<div className="container">
			<div className="headerBar">
				<h1>The system</h1>
				<Button
					titel={"Logout"}
					onClick={() => {
						navigate("/login");
					}}
				/>
			</div>
			<hr />
			<div className="optionBar">
				<FilterByDropDown users={users} setUsers={setUsers} />
				<Button
					titel={"Add new user"}
					onClick={() => {
						setisOverlayActive(true);
					}}
				/>
			</div>

			{isOverlayActive && (
				<Overlay
					isOverlayActive={isOverlayActive}
					setisOverlayActive={setisOverlayActive}
				>
					<AddNewUser setisOverlayActive={setisOverlayActive} />
				</Overlay>
			)}

			<div className="userCards">
				{users &&
					users.map((user) => (
						<div key={user.UserId} class="column">
							<UserCard
								updatePage={updatePage}
								setUpdatePage={setUpdatePage}
								user={user}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
