import React from "react";
import "./contactCard.css";

const CoutactCard = (props) => {
	return (
		<div className="contact-input">
			<input placeholder="contact info" name={`dis${props.index}`}></input>
			<p>:</p>
			<input placeholder="contact Name" name={`val${props.index}`}></input>
		</div>
	);
};

export default CoutactCard;
