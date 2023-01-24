import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import "./nav.css";

const Nav = () => {
	const { width } = useWindowSize();

	return (
		<header>
			<nav>
				<div className={`nav__item ${width >= 768 ? "" : "hide_on_mobile"}`}>
					<Link to="/">Arat Guneri</Link>
				</div>
				<div className="nav__item">
					<Link to="/">About</Link>
					<Link to="portfolio">Portfolio</Link>
				</div>
				<div className={`nav__item ${width >= 768 ? "" : "hide_on_mobile"}`}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://docs.google.com/document/d/1gLT_UWap7V4ziVxgHHYJzebkrrIiXq1vGosNXQqzbzg/edit?usp=sharing"
					>
						Resume
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
