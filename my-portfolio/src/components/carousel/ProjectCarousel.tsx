"use client";
import { useState } from "react";
import Link from "next/link";

interface Project {
	title: string;
	description: string;
	url: string;
	image?: string;
}

const projects: Project[] = [
	{
		title: "War Card Game",
		description:
			"One of my first projects in which the player will play the card game War against a computer. Created with JavaScript and run with Node.",
		url: "https://github.com/skyler-beatty/War-Card-Game",
		image: "https://skylerbeatty.huskisites.com/1100/personal-portfolio/07/images/WarCardGame.png",
	},
	{
		title: "Iron Forge",
		description: "A future project, intended to be a companion tool for the game Destiny 2",
		url: "#",
		image: "https://skylerbeatty.huskisites.com/1100/personal-portfolio/07/images/IronForge.jpg",
	},
	{
		title: "Project Three",
		description: "A description of project three.",
		url: "https://your-project-three.com",
		image: "/projects/project3.png",
	},
];

const ProjectCarousel = () => {
	const [current, setCurrent] = useState(0);

	const prev = () => setCurrent(current === 0 ? projects.length - 1 : current - 1);
	const next = () => setCurrent(current === projects.length - 1 ? 0 : current + 1);

	return (
		<div className="relative w-full overflow-hidden rounded-lg border bg-white shadow-md">
			<div className="flex flex-col items-center p-8 gap-4">
				{projects[current].image && (
					<img
						src={projects[current].image}
						alt={projects[current].title}
						className="w-full max-h-64 object-cover rounded"
					/>
				)}
				<h3 className="text-xl font-bold">{projects[current].title}</h3>
				<p className="text-gray-600 text-center">{projects[current].description}</p>
				<Link
					href={projects[current].url}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					View Project
				</Link>
			</div>

			<div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-t">
				<button onClick={prev} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
					← Prev
				</button>
				<span className="text-sm text-gray-500">
					{current + 1} / {projects.length}
				</span>
				<button onClick={next} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
					Next →
				</button>
			</div>
		</div>
	);
};

export default ProjectCarousel;
