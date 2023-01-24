import React from "react";
import "./styles/projectCard.css";

const ProjectCard = ({ project }) => {
	const { title, desc, project_link, link_text, repo, image } = project;
	return (
		<div className="project-card">
			<img
				className="card__image"
				src={image}
				alt={`${title}`}
			/>
			<a
				href={project_link}
				target="_blank"
				rel="noreferrer"
			>
				<h2 className="card__title">{title}</h2>
			</a>
			<p className="card__desc">{desc}</p>
			<a
				href={repo}
				target="_blank"
				rel="noreferrer"
			>
				<p className="link-text">{link_text}</p>
			</a>
		</div>
	);
};

export default ProjectCard;
