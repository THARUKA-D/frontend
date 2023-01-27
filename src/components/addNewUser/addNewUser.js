import React, { useState } from "react";
import ContactCard from "../contactCard/contactCard";
import axios from "axios";
import "./addNewUser.css";

const AddNewUser = (props) => {
	const [contactCardArry, setcontactCardArry] = useState([]);

	const onAddBtnClick = () => {
		const arr = [...contactCardArry, []];
		setcontactCardArry(arr);
	};

	const getUserInfo = () => {
		const form = document.forms.userinfo;
		const formData = new FormData(form);
		const userObj = {
			firstName: formData.get("fname"),
			lastName: formData.get("lastname"),
			age: formData.get("age"),
			birthday: formData.get("bday"),
			email: formData.get("email"),
		};
		return userObj;
	};
	const getUserContactInfo = () => {
		const form = document.forms.contact;
		const formData = new FormData(form);

		const contactArry = [];
		contactCardArry.forEach((e, i) => {
			const mobileInfo = [formData.get(`dis${i}`), formData.get(`val${i}`)];
			contactArry.push(mobileInfo);
		});

		return contactArry;
	};
	const onSubmitButton = async () => {
		const userInfo = getUserInfo();
		const contactInfo = getUserContactInfo();

		const user = { ...userInfo, mobileNumbers: contactInfo };

		await axios
			.post(`http://localhost:3001/newUser`, user)
			.then((res) => {
				if (res.status === 200) {
					alert("User Added Succesfuly...");
					props.setisOverlayActive(false);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div>
				<h2>Add New User</h2>
			</div>

			<div className="add-info">
				<form id="userinfo">
					<input
						className="add-input"
						placeholder="FirstName"
						name="fname"
					></input>
					<input
						className="add-input"
						placeholder="LasttName"
						name="lastname"
					></input>
					<input className="add-input" placeholder="Age" name="age"></input>
					<input
						className="add-input"
						placeholder="yyyy/mm/dd (BirthDay)"
						name="bday"
					></input>
					<input className="add-input" placeholder="Email" name="email"></input>
				</form>
				<div className="button-row">
					<p>Add Contact details</p>
					<button
						className="button-add"
						onClick={() => {
							onAddBtnClick();
						}}
					>
						+ Add mobile info
					</button>
				</div>
				<form>
					<div>
						{contactCardArry &&
							contactCardArry.map((component, i) => <ContactCard index={i} />)}
					</div>
				</form>
			</div>

			<div className="footer-add-new-user">
				<button
					id="update-btn"
					onClick={() => {
						onSubmitButton();
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default AddNewUser;
