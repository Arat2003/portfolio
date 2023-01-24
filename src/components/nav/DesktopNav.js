import React from "react";
// import { Link } from "react-router-dom";

const DesktopNav = () => {
	return (
		<nav className="desktopNav">
			<ul>
				<li>
					<a
						href="#home"
						className="link"
						to="/"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="link"
						to="#about"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#portfolio"
						className="link"
						to="#portfolio"
					>
						Portfolio
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="link"
						to="#contact"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default DesktopNav;
