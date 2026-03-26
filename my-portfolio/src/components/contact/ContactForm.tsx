"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { saveContactInquiry } from "../../actions/contactActions";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			await saveContactInquiry({ name, email, message });
			setSuccess(true);
			router.push("/");
		} catch (err) {
			setError("Failed to send inquiry. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
			<div>
				<label htmlFor="name" className="block mb-1">
					Name:
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="border px-3 py-2 rounded w-full"
				/>
			</div>
			<div>
				<label htmlFor="email" className="block mb-1">
					Email:
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="border px-3 py-2 rounded w-full"
				/>
			</div>
			<div>
				<label htmlFor="message" className="block mb-1">
					Message:
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					className="border px-3 py-2 rounded w-full"
				/>
			</div>
			{error && <p className="text-red-500">{error}</p>}
			{success && <p className="text-green-500">Message sent!</p>}
			<button
				type="submit"
				disabled={loading}
				className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
			>
				{loading ? "Sending..." : "Send Message"}
			</button>
		</form>
	);
};

export default ContactForm;
