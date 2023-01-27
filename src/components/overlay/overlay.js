import React from "react";
import "./overlay.css";

const Overlay = (props) => {
	const toggleModal = () => {
		props.setisOverlayActive(!props.isOverlayActive);
	};

	// prevent scrolling down when active
	if (props.isOverlayActive) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			{props.isOverlayActive && (
				<div className="modal">
					<div className="overlay"></div>
					<div className="modal-content">
						{props.children}
						<button
							className="close-modal"
							onClick={() => {
								toggleModal();
							}}
						>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Overlay;
