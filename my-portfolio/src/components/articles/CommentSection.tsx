"use client";
import React, { useEffect, useState } from "react";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";
import { getCommentsByArticleId, createComment, deleteComment, updateComment } from "../../actions/commentActions";
import { useSession } from "next-auth/react";
import { Comment } from "../../types";

const CommentSection = ({ articleId }: { articleId: string }) => {
	const { data: session } = useSession();
	const [comments, setComments] = useState<Comment[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadComments = async () => {
			try {
				const fetchedComments = await getCommentsByArticleId(articleId);
				setComments(fetchedComments);
			} catch (error) {
				console.error("Failed to fetch comments:", error);
			} finally {
				setLoading(false);
			}
		};
		loadComments();
	}, [articleId]);

	const handleCommentCreate = async (content: string) => {
		if (!session) return;
		await createComment(articleId, content);
		const updated = await getCommentsByArticleId(articleId);
		setComments(updated);
	};

	const handleCommentDelete = async (commentId: string) => {
		if (!session) return;
		await deleteComment(commentId);
		setComments((prev) => prev.filter((comment) => comment.id !== commentId));
	};

	const handleCommentUpdate = async (commentId: string, content: string) => {
		if (!session) return;
		await updateComment(commentId, content);
		const updated = await getCommentsByArticleId(articleId);
		setComments(updated);
	};

	if (loading) return <p>Loading comments...</p>;

	return (
		<div>
			{session ? (
				<CommentForm articleId={articleId} onSubmit={handleCommentCreate} />
			) : (
				<p className="text-sm text-gray-500">
					Please{" "}
					<a href="/login" className="text-blue-600 underline">
						log in
					</a>{" "}
					to comment.
				</p>
			)}
			<CommentList
				comments={comments}
				onDelete={handleCommentDelete}
				onUpdate={handleCommentUpdate}
				currentUserId={session?.user?.id}
			/>
		</div>
	);
};

export default CommentSection;
