"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const formData = new FormData(e.currentTarget);

		const res = await fetch("/api/register", {
			method: "POST",
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				password: formData.get("password"),
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (res.ok) {
			router.push("/login");
		} else {
			const data = await res.json();
			setError(data.message || "Registration failed");
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-16">
			<h1 className="text-2xl font-bold mb-6">Register</h1>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input name="name" type="text" placeholder="Full Name" required className="border px-3 py-2 rounded" />
				<input name="email" type="email" placeholder="Email" required className="border px-3 py-2 rounded" />
				<input name="password" type="password" placeholder="Password" required className="border px-3 py-2 rounded" />
				<button
					type="submit"
					disabled={loading}
					className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
				>
					{loading ? "Registering..." : "Register"}
				</button>
			</form>
			<p className="mt-4 text-sm">
				Already have an account?{" "}
				<Link href="/login" className="text-blue-600 hover:underline">
					Sign In
				</Link>
			</p>
		</div>
	);
}
