"use client";
import React, { useState } from "react";
import { Comment } from "../../types";

interface CommentItemProps {
	comment: Comment;
	onDelete: (id: string) => void;
	onUpdate: (id: string, content: string) => void;
	isOwner: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onDelete, onUpdate, isOwner }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editContent, setEditContent] = useState(comment.content);

	const handleUpdate = async () => {
		await onUpdate(comment.id, editContent);
		setIsEditing(false);
	};

	return (
		<div className="border rounded p-4">
			<p className="font-bold">
				{comment.author} - {new Date(comment.createdAt).toLocaleString()}
			</p>
			{isEditing ? (
				<div className="flex flex-col gap-2 mt-2">
					<textarea
						value={editContent}
						onChange={(e) => setEditContent(e.target.value)}
						className="border px-3 py-2 rounded"
					/>
					<div className="flex gap-2">
						<button onClick={handleUpdate} className="bg-green-600 text-white px-3 py-1 rounded">
							Save
						</button>
						<button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-3 py-1 rounded">
							Cancel
						</button>
					</div>
				</div>
			) : (
				<p className="mt-2">{comment.content}</p>
			)}
			{isOwner && !isEditing && (
				<div className="flex gap-2 mt-2">
					<button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded">
						Edit
					</button>
					<button onClick={() => onDelete(comment.id)} className="bg-red-600 text-white px-3 py-1 rounded">
						Delete
					</button>
				</div>
			)}
		</div>
	);
};

export default CommentItem;
