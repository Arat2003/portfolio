import React from "react";
import "./nav.css";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
	const { width } = useWindowSize();
	return (
		<header className="nav">
			<section className="nav__left">
				<h2>
					<a href="/">Arat Guneri</a>
				</h2>
			</section>
			<section className="nav__right">
				{width < 768 && <MobileNav />}
				{width >= 768 && <DesktopNav />}
			</section>
		</header>
	);
};

export default Nav;
