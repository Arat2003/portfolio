import React from "react";
import "./hamburger.css";

const Hamburger = ({ isOpen, setIsOpen }) => {
	return (
		<button
			onClick={() => setIsOpen((prev) => !prev)}
			className="menu-button"
		>
			<div className={`menu-icon ${isOpen ? "open" : ""}`}></div>
		</button>
	);
};

export default Hamburger;
