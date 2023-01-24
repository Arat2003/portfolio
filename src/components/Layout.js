import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./nav2/Nav";

const Layout = () => {
	return (
		<div className="App">
			<Nav />
			<Outlet />
		</div>
	);
};

export default Layout;
