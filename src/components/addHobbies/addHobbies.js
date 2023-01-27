import React, { useState } from "react";
import axios from "axios";

const AddHobbies = (props) => {
	const [hobbies, setHobbies] = useState([...props.user.Hobbies]);
	const [inputVal, setinputVal] = useState("");

	const updateHobbies = async () => {
		const data = {
			userId: props.user.UserId,
			hobbies: hobbies,
		};

		await axios
			.post(`http://localhost:3001/addHobbies`, data)
			.then((res) => {
				if (res.status === 200) {
					props.setisOverlayActive(false);
					alert("Updated User Hobbies Succesfuly...");
					props.setUpdatePage(!props.updatePage);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div>
				<h2>Add Hobbies</h2>
			</div>

			<div>
				<div>
					<input
						onChange={(e) => {
							setinputVal(e.target.value);
						}}
					></input>
					<button
						onClick={() => {
							setHobbies([...hobbies, inputVal]);
						}}
					>
						Add
					</button>
				</div>
			</div>
			<div>
				{hobbies &&
					hobbies.map((hobby) => (
						<div>
							<p> {hobby}</p>
						</div>
					))}
			</div>

			<div>
				<button
					onClick={() => {
						updateHobbies();
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default AddHobbies;
