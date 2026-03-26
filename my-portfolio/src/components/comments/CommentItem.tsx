import React from 'react';

interface CommentItemProps {
    comment: {
        id: string;
        content: string;
        author: string;
        createdAt: string;
    };
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onEdit, onDelete }) => {
    return (
        <div className="comment-item">
            <p><strong>{comment.author}</strong> - {new Date(comment.createdAt).toLocaleString()}</p>
            <p>{comment.content}</p>
            <button onClick={() => onEdit(comment.id)}>Edit</button>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
        </div>
    );
};

export default CommentItem;