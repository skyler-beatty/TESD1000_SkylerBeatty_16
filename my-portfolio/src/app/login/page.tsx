"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const formData = new FormData(e.currentTarget);

		const result = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});

		if (result?.error) {
			setError("Invalid email or password");
			setLoading(false);
		} else {
			router.push("/");
		}
	};

	return (
		<div className="max-w-md mx-auto mt-16">
			<h1 className="text-2xl font-bold mb-6">Sign In</h1>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input name="email" type="email" placeholder="Email" required className="border px-3 py-2 rounded" />
				<input name="password" type="password" placeholder="Password" required className="border px-3 py-2 rounded" />
				<button
					type="submit"
					disabled={loading}
					className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
				>
					{loading ? "Signing in..." : "Sign In"}
				</button>
			</form>
			<p className="mt-4 text-sm">
				Don't have an account?{" "}
				<Link href="/register" className="text-blue-600 hover:underline">
					Register
				</Link>
			</p>
		</div>
	);
}
