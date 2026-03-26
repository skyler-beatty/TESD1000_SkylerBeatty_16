"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import WeatherDisplay from "./WeatherDisplay";

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
			<Link href="/" className="text-xl font-bold">
				Skyler Beatty
			</Link>
			<div className="flex items-center gap-6">
				<Link href="/">Home</Link>
				<Link href="/articles">Articles</Link>
				<Link href="/contact">Contact</Link>
				{session ? (
					<>
						<span>{session.user?.name}</span>
						<button onClick={() => signOut()}>Logout</button>
					</>
				) : (
					<Link href="/login">Login</Link>
				)}
			</div>
			<WeatherDisplay />
		</nav>
	);
};

export default Navbar;
