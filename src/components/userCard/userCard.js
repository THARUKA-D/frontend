import React, { useState } from "react";
import Button from "../button/button";
import Overlay from "../overlay/overlay";
import AddHobbies from "../addHobbies/addHobbies";
import "./userCard.css";

const UserCard = (props) => {
	const [isOverlayActive, setisOverlayActive] = useState(false);
	const user = props.user;

	return (
		<>
			{isOverlayActive && (
				<Overlay
					isOverlayActive={isOverlayActive}
					setisOverlayActive={setisOverlayActive}
				>
					<AddHobbies
						updatePage={props.updatePage}
						setUpdatePage={props.setUpdatePage}
						user={user}
						setisOverlayActive={setisOverlayActive}
					/>
				</Overlay>
			)}
			<div className="usercontainer">
				<div className="image">
					<p>IMAGE</p>
				</div>
				<div className="info">
					<p>
						Name : {user.FirstName} {user.LastName}
					</p>
					<p>Email : {user.Email}</p>
					<p>Age : {user.Age}</p>
					<p>BirthDay: {user.Birthday}</p>
					{user.Hobbies && (
						<>
							<hr />
							<p className="blodText"> Hobbies </p>
							{user.Hobbies.map((hobby) => (
								<p > {hobby}</p>
							))}
							<hr />
						</>
					)}

					{user.MobileNumbers && (
						<>
							<p className="blodText"> Contact Details </p>
							{user.MobileNumbers.map((mobileinfo) => (
								<p>{mobileinfo.description} : {mobileinfo.mobileNumber}</p>
							))}
						</>
					)}
				</div>
				<div className="usrcard-button">
					<Button
						titel={"Update Hobbies"}
						onClick={() => {
							setisOverlayActive(!isOverlayActive);
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default UserCard;
