"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
		description: "A future project intended as a companion app for the game Destiny 2",
		url: "#",
		image: "https://skylerbeatty.huskisites.com/1100/personal-portfolio/07/images/IronForge.jpg",
	},
	{
		title: "Project Three",
		description: "A description of project three.",
		url: "#",
		image: "https://skylerbeatty.huskisites.com/1100/personal-portfolio/07/images/future.jpg",
	},
];

const ProjectCarousel = () => {
	const [current, setCurrent] = useState(0);

	const prev = () => setCurrent(current === 0 ? projects.length - 1 : current - 1);
	const next = () => setCurrent(current === projects.length - 1 ? 0 : current + 1);

	return (
		<div className="relative w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-md">
			<div className="flex flex-col items-center p-8 gap-4">
				{projects[current].image && (
					<div className="relative w-full max-w-sm" style={{ aspectRatio: "256/160" }}>
						<Image src={projects[current].image} alt={projects[current].title} fill className="object-cover rounded" />
					</div>
				)}
				<h3 className="text-xl font-bold text-purple-300">{projects[current].title}</h3>
				<p className="text-gray-300 text-center">{projects[current].description}</p>
				<Link
					href={projects[current].url}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-purple-900 hover:bg-purple-800 text-white px-4 py-2 rounded transition-colors"
				>
					View Project
				</Link>
			</div>

			<div className="flex justify-between items-center px-4 py-2 bg-gray-700 border-t border-gray-600">
				<button
					onClick={prev}
					className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer transition-colors"
				>
					← Prev
				</button>
				<span className="text-sm text-gray-400">
					{current + 1} / {projects.length}
				</span>
				<button
					onClick={next}
					className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer transition-colors"
				>
					Next →
				</button>
			</div>
		</div>
	);
};

export default ProjectCarousel;
