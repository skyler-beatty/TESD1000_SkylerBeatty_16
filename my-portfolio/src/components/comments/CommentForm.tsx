"use client";
import { useState } from "react";

interface CommentFormProps {
	articleId: string;
	onSubmit: (content: string) => Promise<void>;
}

const CommentForm = ({ articleId, onSubmit }: CommentFormProps) => {
	const [comment, setComment] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			await onSubmit(comment);
			setComment("");
		} catch (err) {
			setError("Failed to submit comment. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
			<textarea
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				placeholder="Write your comment..."
				required
				className="border px-3 py-2 rounded"
			/>
			<button
				type="submit"
				disabled={loading}
				className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
			>
				{loading ? "Submitting..." : "Submit Comment"}
			</button>
			{error && <p className="text-red-500">{error}</p>}
		</form>
	);
};

export default CommentForm;
