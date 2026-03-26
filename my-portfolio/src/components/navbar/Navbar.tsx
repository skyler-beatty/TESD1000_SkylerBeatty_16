"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import WeatherDisplay from "./WeatherDisplay";

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
			<Link href="/" className="text-xl font-bold text-purple-900 hover:text-purple-800 drop-shadow-lg">
				Skyler Beatty
			</Link>
			<div className="flex items-center gap-6">
				<Link href="/" className="hover:text-purple-300 transition-colors">
					Home
				</Link>
				<Link href="/articles" className="hover:text-purple-300 transition-colors">
					Articles
				</Link>
				<Link href="/contact" className="hover:text-purple-300 transition-colors">
					Contact
				</Link>
				{session ? (
					<>
						<span className="text-gray-300">{session.user?.name}</span>
						<button
							onClick={() => signOut()}
							className="bg-purple-900 hover:bg-purple-800 px-3 py-1 rounded cursor-pointer transition-colors"
						>
							Sign Out
						</button>
					</>
				) : (
					<Link href="/login" className="bg-purple-900 hover:bg-purple-800 px-3 py-1 rounded transition-colors">
						Login
					</Link>
				)}
			</div>
			<WeatherDisplay />
		</nav>
	);
};

export default Navbar;
