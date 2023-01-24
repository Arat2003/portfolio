import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./styles/portfolio.css";
import old_portfolio from "../images/old_portfolio.png";
import minestats from "../images/minestats.png";
import metronome from "../images/metronome.png";

const Portfolio = () => {
	return (
		<main className="portfolio">
			{projects.map((project) => (
				<ProjectCard
					key={project.title}
					project={project}
				/>
			))}
		</main>
	);
};

export default Portfolio;

const projects = [
	{
		title: "Minestats",
		desc: "Verified Discord Bot (which also made me a Verified Discord Bot Dev) developed for Hypixel players who want to check their stats in an easy and efficient way. Sat at 750+ servers with over 100k users. Hasn't updated after Discord's API most recent update",
		project_link:
			"https://discord.com/oauth2/authorize?client_id=720525129850814494&permissions=388160&scope=bot",
		link_text: "repo",
		repo: "https://github.com/Arat2003/discord-bot",
		image: minestats,
	},
	{
		title: "Metronome",
		desc: "Simple metronome focused on applying new knowledge of audio and useEffect hook.",
		project_link: "/portfolio/metronome",
		link_text: "repo",
		repo: "https://github.com/Arat2003/metronome",
		image: metronome,
	},
	{
		title: "Portfolio Page",
		desc: "First portfolio page built trying to replicate petitmoulinstudio.com's sticky divs. Applied all the knowledge I had of React.js, React Router, HTML/CSS in a Front-end project.",
		project_link: "https://github.com/Arat2003/old_portfolio",
		link_text: "repo",
		repo: "https://github.com/Arat2003/old_portfolio",
		image: old_portfolio,
	},
];

// {
// 	title:,
// 	desc:,
//	project_link:,
// 	link_text:,
// 	repo:,
// 	image:,
// }
