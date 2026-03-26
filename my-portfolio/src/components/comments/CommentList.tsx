import React from "react";
import CommentItem from "./CommentItem";
import { Comment } from "../../types";

interface CommentListProps {
	comments: Comment[];
	onDelete: (id: string) => void;
	onUpdate: (id: string, content: string) => void;
	currentUserId?: string;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onDelete, onUpdate, currentUserId }) => {
	return (
		<div className="flex flex-col gap-4">
			{comments.length === 0 ? (
				<p>No comments yet.</p>
			) : (
				comments.map((comment) => (
					<CommentItem
						key={comment.id}
						comment={comment}
						onDelete={onDelete}
						onUpdate={onUpdate}
						isOwner={currentUserId === comment.userId}
					/>
				))
			)}
		</div>
	);
};

export default CommentList;
