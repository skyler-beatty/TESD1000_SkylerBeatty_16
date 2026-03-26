import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<SessionProvider>
					<Navbar />
					<main className="container mx-auto px-4 py-8">{children}</main>
				</SessionProvider>
			</body>
		</html>
	);
}
