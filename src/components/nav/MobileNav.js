import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
import Hamburger from "./Hamburger";

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(false);
	const ref = useRef(null);
	useOutsideClick(ref, handleClick);

	return (
		<div ref={ref}>
			<Hamburger
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<nav className="mobileNav">
				<ul className={`${isOpen ? "open" : ""}`}>
					<li>
						<a
							href="#home"
							className="link"
							to="/"
							onClick={handleClick}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="link"
							to="about"
							onClick={handleClick}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							className="link"
							to="portfolio"
							onClick={handleClick}
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="link"
							to="contact"
							onClick={handleClick}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
			{/* )} */}
		</div>
	);
};

export default MobileNav;
