import React from "react";
import AboutProject from "../components/AboutProject";
import HorizontalRule from "../components/HorizontalRule";
import { FiExternalLink } from "react-icons/fi";
import useWindowSize from "../hooks/useWindowSize";
import face from "../images/face.jpg";
import "./styles/about.css";

const About = () => {
	const { width } = useWindowSize();
	const isDesktop = width >= 768 ? true : false;

	return (
		<main className="about">
			<div className="personal-info">
				<img
					className="personal-info__img"
					src={face}
					alt="me"
				/>
				<br />
				<h2>Arat Guneri</h2>
				<HorizontalRule />
				<div className="contact">
					<h2>Contact</h2>
					<a
						target="_blank"
						rel="noreferrer"
						href="mailto:arat2003@hotmail.com"
						id={`${isDesktop ? "desktop" : ""}`}
					>
						<p>arat2003@hotmail.com</p>
						<FiExternalLink />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						id={`${isDesktop ? "desktop" : ""}`}
						href="mailto:guneri@usc.edu"
					>
						<p>guneri@usc.edu</p>
						<FiExternalLink />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						id={`${isDesktop ? "desktop" : ""}`}
						href="https://www.linkedin.com/in/aratguneri/"
					>
						<p>LinkedIn</p>
						<FiExternalLink />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						id={`${isDesktop ? "desktop" : ""}`}
						href="https://github.com/Arat2003"
					>
						<p>Github</p>
						<FiExternalLink />
					</a>
				</div>
			</div>
			<div className="about-info">
				<h1>About me</h1>
				<HorizontalRule />
				<p>
					I'm a 19 year old USC undergrad studying CS and Business based in LA.
					Creating things, especially software has been my passion for many
					years and I have been studying coding since 2019. This passion has led
					me to explore and complete different projects such as videogames
					(created in HS using Construct3), websites and Discord bots.
					Currently, I spend my time working on Front-end projects and trying
					different emerging frameworks! As of now, I mainly use React.js,
					Apollo GraphQL, and I also do OOP using C++.
					<br />
					<br />
					I am very interested in learning more about AI, machine learning and
					especially Natural Language Processing. While I was developing Discord
					Bots, I wished that I could take a step further and dive deeper into
					sentiment analysis to create speech-recognition bots or even my own
					HAL-9000.
					<br />
					<br />
					Outside of CS, I'm big into philosophy. This has led me to apply for
					the GE Honors Alternative at USC, Thematic Option. Such alternative
					has allowed me to explore and consider many of "big questions" in
					philosophy, different ways of thinking, but most importantly it has
					allowed me to appreciate many thinkers that I may have never heard of
					otherwise. Tying this into my CS background, I've had many discussions
					about the Ethics of AI with fellow students. Having this opportunity
					has made me consider picking up a minor in Philosophy.
				</p>
				<div className="skills">
					<div>
						<h2>Spoken Languages:</h2>
						<HorizontalRule />
						<ul>
							<li>
								<p>Spanish (Native)</p>
							</li>
							<li>
								<p>English (Native)</p>
							</li>
						</ul>
					</div>
					<div>
						<h2>Technical Skills:</h2>
						<HorizontalRule />
						<ul>
							<li>HTML/CSS</li>
							<li>Typescript</li>
							<li>React.js</li>
							<li>C++</li>
							<li>Java</li>
						</ul>
					</div>
				</div>
				<br />
				<div className="projects">
					<h1>Projects:</h1>
					<HorizontalRule />
					{projects.map((project) => (
						<AboutProject
							key={project.title}
							project={project}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default About;

const projects = [
	{
		date: "Jan 2023",
		title: "Metronome",
		desc: "Simple Metronome built to test Audio in React.js.",
		stack: "React.js • HTML",
	},
	{
		date: "May 2022 - July 2022",
		title: "Portfolio Page",
		desc: "First portfolio page built trying to replicate petitmoulinstudio.com sticky divs.",
		stack: "React.js",
	},
	{
		date: "Apr 2020 - Jan 2021",
		title: "Minestats",
		desc: "Discord bot used by over 100k users in 750+ servers.",
		stack: "TS • Discord.js v13",
	},
];

// {
// 	date:,
// 	title:,
// 	desc:,
// 	stack:,
// }
