import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Skyler Beatty Portfolio",
	description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
				<SessionProvider>
					<Navbar />
					<main className="container mx-auto px-4 py-8">{children}</main>
				</SessionProvider>
			</body>
		</html>
	);
}
