import React, { useState } from "react";
import { useRouter } from "next/router";
import { saveContactInquiry } from "../../actions/contactActions";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			await saveInquiry({ name, email, message });
			router.push("/thank-you"); // Redirect after successful submission
		} catch (err) {
			setError("Failed to send inquiry. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
			</div>
			{error && <p>{error}</p>}
			<button type="submit" disabled={loading}>
				{loading ? "Sending..." : "Send Inquiry"}
			</button>
		</form>
	);
};

export default ContactForm;
