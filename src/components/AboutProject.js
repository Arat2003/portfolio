import React from "react";
import "./styles/aboutProject.css";

const AboutProject = ({ project }) => {
	return (
		<div className="about-project__container">
			<div>{project.date}</div>
			<div style={{ marginLeft: "0.5rem" }}>
				<h3>{project.title}</h3>
				<p className="about-project__desc">{project.desc}</p>
				<p className="about-project__stack">{project.stack}</p>
			</div>
		</div>
	);
};

export default AboutProject;
